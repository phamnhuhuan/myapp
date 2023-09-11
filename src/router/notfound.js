const notfound = [
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../layout/notfound.vue'),
        meta:{
            title:'Not Found 404'
        }
    }
]
export default notfound;