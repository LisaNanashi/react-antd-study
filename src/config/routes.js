module.exports = [
    /*
   * 管理员端路由
   * path: 路由浏览器地址
   * name: 路由中文名
   * icon: 路由图标，详情：https://ant.design/components/icon-cn/
   * component: 根目录pages目录下路由文件地址
   * sublist： 伪二级路由，对应为左侧主菜单的子菜单，注意：当没有子菜单时值必须为空数组
   * type: 路由类型，暂时只支持设置index、404
   */
    {
        name: "菜单1",
        icon: "icon-gailan",
        type: "index",
        component: "/home/index",
        path: "/admin/index",
        sublist: [
            {
                name: "index",
                path: "/admin/index",
                component: "/home/index"
            },
            {
                name: "index1",
                path: "/admin/index1",
                component: "/home/index1"
            },
        ],
    },
    {
        name: "菜单2",
        icon: "icon-gailan",
        sublist: [
            {
                name: "Options1",
                path: "/admin/test",
                component: "/other/test"
            },
            {
                name: "Options2",
                path: "/admin/test",
                component: "/other/test"
            },
        ],
    },
    {
        name: "菜单3",
        icon: "icon-gailan",
        sublist: [
            {
                name: "Options1",
                path: "/admin/test",
                component: "/other/test"
            },
            {
                name: "Options2",
                path: "/admin/test",
                component: "/other/test"
            },
        ],
    },
    {
        name: "菜单4",
        path: "/admin/hhh",
        component: "/other/hhh",
        icon: "icon-gailan",
        sublist: [],
    },
    {
        path: "/admin/404",
        name: "页面不存在",
        type: "404",
        hide: true,
        component: "/other/404",
        sublist: [],
    },
];