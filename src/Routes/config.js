import {lazy} from 'react'

const Home = lazy(()=> import("../Components/Home/Home"))
const About = lazy(()=> import("../Components/About/About"))
const Service = lazy(()=> import("../Components/Service/Service"))
const Logins = lazy(()=> import("../Components/Login/Logins"))
const Register = lazy(()=> import("../Components/Login/Register"))
const ROUTERS = [
    { 
        path: "/thriftyPh-app",
        component:Logins,
    },
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
        path: "/Register",
        component:Register,
    },
 
]
export default {
    ROUTERS:ROUTERS
}

