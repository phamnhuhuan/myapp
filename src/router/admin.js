const admin = [
    {
        path: '/myapp/admin',
        component: () => import('../layout/admin.vue'),
        children: [
            {
                path: 'create-news',
                name:'admin-createnews',
                component: () => import('../pages/Admin/News/create.vue'),
                meta:{
                    Auth:true
                }
            },
            {
                path: 'create-tour',
                name:'admin-createtour',
                component: () => import('../pages/Admin/Tour/create.vue'),
                meta:{
                    Auth:true
                }
            },
            {
                path: 'tour',
                name:'admin-tour',
                component: () => import('../pages/Admin/Tour/index.vue'),
                meta:{
                    Auth:true
                }
            },
        ]
    }
]
export default admin;