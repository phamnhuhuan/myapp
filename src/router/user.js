const user = [
    {
        path: '/myapp',
        component: () => import('../layout/user.vue'),
        children: [
            {
                path:'',
                name:'home',
                component:()=>import('../pages/User/Home.vue'),
            },
            {
                path:'gioi-thieu',
                name:'about',
                component:()=>import('../pages/User/About.vue'),
                meta:{
                    title:'Giới thiệu'
                }
            },
            {
                path:'tour-du-lich/:id',
                name:'tour',
                component:()=>import('../pages/User/Tour.vue'),
                meta:{
                    title:'Tour du lịch'
                }
            },
            {
                path:'chi-tiet-tour/:id',
                name:'detailtour',
                component:()=>import('../pages/User/Detailtour.vue'),
                meta:{
                    title:'Chi tiết tour'
                }
            },
            {
                path:'tin-tuc',
                name:'new',
                component:()=>import('../pages/User/News.vue'),
                meta:{
                    title:'Tin tức'
                }
            },
            {
                path:'tin-tuc/:id',
                name:'detailnew',
                component:()=>import('../pages/User/Detailnew.vue'),
                meta:{
                    title:'Chi tiết tin tức'
                }
            },
            {
                path:'dang-nhap',
                name:'login',
                component:()=>import('../pages/User/Login.vue'),
                meta:{
                    title:'Đăng nhập',
                    Auth:false
                }
            },
            {
                path:'dang-ki',
                name:'register',
                component:()=>import('../pages/User/Register.vue'),
                meta:{
                    title:'Đăng kí',
                    Auth:false
                }
            },
            {
                path:'cam-on',
                name:'thankyou',
                component:()=>import('../pages/User/thankyou.vue'),
                meta:{
                    title:'Cảm ơn'
                }
            },
        ]
    }
]
export default user;