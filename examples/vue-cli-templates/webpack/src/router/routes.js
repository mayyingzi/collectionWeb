// 按需加载组件页面
const HelloWorld = (resolve) => {
    require(['../components/HelloWorld.vue'], resolve)
}
const testMePage = (resolve) => {
    require(['../components/testMe.vue'], resolve)
}
const testViewPage = (resolve) => {
    require(['../views/testViewPage/index.vue'], resolve)
}

export default[
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/test_me',
        name: 'testMePage',
        component: testMePage
    },
    {
        path: '/test-view',
        name: 'testViewPage',
        component: testViewPage
    }
]
