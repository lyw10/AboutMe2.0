import Login from '../views/login.vue'
import About from '../views/about.vue'
import Project from '../views/project.vue'

export default [
    {
        path:'/',
        redirect:'/about'
    },
    {
        path:'/about',
        component:About,
    },
    {
        path:'/project',
        component:Project,
    },
    {
        path:'/login',
        component:Login,
    },
    ]