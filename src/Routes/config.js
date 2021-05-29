import {lazy} from 'react'

const Home = lazy(()=> import("../Components/Home/Home"))
const About = lazy(()=> import("../Components/About/About"))
const Service = lazy(()=> import("../Components/Service/Service"))
const Login = lazy(()=> import("../Components/Login/Login"))

const ROUTERS = [
    { 
        path: "/About",
        component:About,
    },
    { 
        path: "/Home",
        component:Home,
    },
    { 
        path: "/Service",
        component:Service,
    },
    { 
        path: "/",
        component:Login,
    },
    
]
export default {
    ROUTERS:ROUTERS
}

