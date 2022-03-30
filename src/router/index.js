import { createRouter, createWebHistory, routeLocationKey } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'


const routes = [
    {path:'/', name: 'Home', component: Home},
    // {
    //     path: '/protected',
    //     name: 'protected',
    //     component: ()=>import('@/views/Protected.vue'),
    //     meta:{
    //         requiresAuth: true,
    //     }
    // },
    {
        path: '/about',
        name: 'about',
        component: ()=>import('@/views/About.vue'),
    },
    // {
    //     path: '/work',
    //     name: 'work',
    //     component: ()=>import('@/views/Work.vue'),
    // },
    {
        path:'/project/:id/:slug',
        name: 'project.show', 
        component: ()=>import('@/views/ProjectsShow.vue'),
        props: route=> ({...route.params, id: parseInt(route.params.id)}),
        beforeEnter(to, from){
            const exist = sourceData.projects.find(
                project => project.id === parseInt(to.params.id)
            )

            if (!exist) return {
                name: 'NotFound',
                params: {pathMatch: to.path.split('/').slice(1)},
                query: to.query,
                hash: to.hash,
            }
         },
        // children: [
        //     {
        //         path:':projectSlug',
        //         name: 'design.show', 
        //         component: ()=>import('@/views/ExperienceShow.vue'),
        //         props: route=> ({...route.params, id: parseInt(route.params.id)}),
        //     },
        // ] 
    },
    {
        path:'/:pathMatch(.*)*',
        name: 'NotFound',
        component: ()=>import('@/views/NotFound.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || new Promise((resolve)=>{
            // setTimeout pour conter le temps de transition css et behavior possible
            //setTimeout(()=>resolve({top:0, behavior:'smooth'}), 1000)
            setTimeout(()=>resolve({top:0}), 1000)
        })
    }
})

router.beforeEach((to, from)=>{
    if(to.meta.requiresAuth  && !window.user){
        return {name: 'login'}

    }
})

export default router