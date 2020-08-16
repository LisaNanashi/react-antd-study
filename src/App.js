import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import { SiderMenuTop, SiderMenuLeft, SelectedRoute} from './common/base'
import './App.less';
import Moment from "moment";
import 'moment/locale/zh-cn';
Moment.locale('zh-cn');
const { Sider, Content } = Layout;
class App extends React.PureComponent {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapsed: localStorage.collapsed === "true" ? 1 : 0,
        };
    }
    toggle = () => {
        localStorage.collapsed = !this.state.collapsed;
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <ConfigProvider>
                <Router>
                    <Layout style={{ height: "100%" }}>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <SiderMenuLeft collapsed={this.state.collapsed} />
                        </Sider>
                        <Layout className="site-layout">
                            <SiderMenuTop toggle={this.toggle} collapsed={this.state.collapsed} />
                            <Layout
                                style={{
                                    padding: 0,
                                    marginTop: 15,
                                    marginLeft: 15,
                                }}
                            >
                                <Content
                                    className="bg_white"
                                    style={{
                                        padding: 24,
                                        margin: "10px 10px 10px 0",
                                        minHeight: "86vh",
                                    }}
                                >
                                    <SelectedRoute />
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </Router>
            </ConfigProvider>
        );
    }
}

export default App;
