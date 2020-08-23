import React, { Suspense, lazy } from 'react';
import { Menu, Layout, Skeleton } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
// 菜单
const routes = require(`../config/routes`);
const history = createBrowserHistory();
const GlobalIdentity = history.location.pathname.split("/")[1];
const { Header } = Layout;
const { SubMenu } = Menu;
/*
 * 主界面内容 路由按需加载
 */
export class SelectedRoute extends React.PureComponent {
    constructor() {
        super();
        this.router = Router;
        this.routeWithSubRoutes = this.routeWithSubRoutes.bind(this);
    }

    routeWithSubRoutes(props) {
        let { component, path, store, params = {} } = props;
        let ComponentContext = lazy(async () => {
            return import(`../pages${component}`);
        });

        return (
            <Route
                path={path}
                render={(_props) => (
                    <ComponentContext store={store} {..._props} {...params} />
                )}
            />
        );
    }

    render() {
        let [RouteWithSubRoutes, IndexPage, ErrorPage, $routes = []] = [
            this.routeWithSubRoutes,
        ];
        let routeType = (route) => {
            if (route.type === "index") {
                route.title && (document.title = route.title);
                IndexPage = lazy(async () => {
                    // return import(`../pages${route.component}`);
                    return import(`../pages/home/index`);
                });
            }
            if (route.type === "404") {
                ErrorPage = lazy(() => import(`../pages${route.component}`));
            }
        };
        routes.map((route) => {
            if (route.component) {
                $routes.push(route);
            }
            if (route.sublist.length > 0) {
                route.sublist.map((_route) => {
                    _route.component && $routes.push(_route);
                    routeType(_route);
                    return _route;
                });
            }
            routeType(route);
            return route;
        });
        if (!IndexPage) {
            IndexPage = ErrorPage;
        }
        return (
            <Suspense fallback={<Skeleton paragraph={{ rows: 10 }} active />}>
                <Switch>
                    <Route
                        exact
                        path={`/`}
                        render={(props) => <IndexPage {...props} />}
                    />
                    {$routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                    <Route render={(props) => <ErrorPage {...props} />} />
                </Switch>
            </Suspense>
        );
    }
}
/*
 * 主界面顶部主菜单栏
 */
export class SiderMenuTop extends React.PureComponent {
    constructor(props) {
        super();
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.props.toggle();
    }
    render() {
        const props = this.props;
        const collapsed = props.collapsed;
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger fc_white',
                    onClick: this.toggle,
                })}
            </Header>
        );
    }
}
/*
 * 主界面左侧主菜单栏
 */
export class SiderMenuLeft extends React.PureComponent {
    constructor(props) {
        super();
        this.rootSubmenuKeys = []
        let openKeys_ = ['sub0']
        routes.map((c, i) => {
            this.rootSubmenuKeys.push('sub' + i);
            // 展开的菜单
            if (c.folder === GlobalIdentity) {
                openKeys_ = ['sub' + i]
            }
            return c;
        });
        this.state = { openKeys: openKeys_ };
        console.log(this.state.openKeys)
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        let MenuItem = (_route, i) => {
            return (
                <Menu.Item
                    title={_route.name}
                    key={i}
                >
                    <Link
                        to={_route.path}
                    >
                        {_route.name}
                    </Link>
                </Menu.Item>
            );
        };
        return (
            <Menu
                theme="dark" mode="inline"
                defaultOpenKeys="[sub0]"
                defaultSelectedKeys="[sub0_0]"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
            >
                <div className="box box-allc fc_white" style={{ height: 64 }}>
                    logo
                </div>
                {routes.map((c, i) => {
                    if (c.hide === true) {
                        return null;
                    }
                    if (!c.sublist.length) {
                        return MenuItem(c, `sub${i}`);
                    }
                    return (
                        <SubMenu
                            key={'sub' + i}
                            title={c.name}
                        >
                            {c.sublist.map((cc, ii) => MenuItem(cc, `sub${i}_${ii}`))}
                        </SubMenu>
                    )
                })}
            </Menu>
        );
    }
}