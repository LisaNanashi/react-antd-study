module.exports = [
    /*
   * 管理员端路由
   * path: 路由浏览器地址
   * name: 路由中文名
   * folder: 菜单上路由组件的文件夹
   * icon: 路由图标，详情：https://ant.design/components/icon-cn/
   * component: 根目录pages目录下路由文件地址
   * sublist： 伪二级路由，对应为左侧主菜单的子菜单，注意：当没有子菜单时值必须为空数组
   * type: 路由类型，暂时只支持设置index、404
   */
    {
        name: "菜单1",
        icon: "icon-gailan",
        type: "index",
        folder:"home",
        sublist: [
            {
                name: "index",
                path: "/index",
                component: "/home/index"
            },
            {
                name: "index1",
                path: "/index1",
                component: "/home/index1"
            },
        ],
    },
    {
        name: "菜单2",
        icon: "icon-gailan",
        folder:"menu2",
        sublist: [
            {
                name: "list1",
                path: "/menu2/list1",
                component: "/menu2/list"
            },
            {
                name: "list2",
                path: "/menu2/list2",
                component: "/menu2/list2"
            },
        ],
    },
    {
        name: "菜单3",
        icon: "icon-gailan",
        folder:"menu3",
        sublist: [
            {
                name: "list1",
                path: "/menu3/list1",
                component: "/menu3/list"
            },
            {
                name: "list2",
                path: "/menu3/list2",
                component: "/menu3/list2"
            },
        ],
    },
    {
        name: "菜单4",
        folder:"other",
        path: "other/test2",
        component: "/other/test2",
        icon: "icon-gailan",
        sublist: [],
    },
    {
        path: "/404",
        name: "页面不存在",
        type: "404",
        hide: true,
        component: "/other/404",
        sublist: [],
    },
];