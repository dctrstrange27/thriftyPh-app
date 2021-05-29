import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Routers from './config'

const routes = Routers.ROUTERS

const AppRouters =()=>{
    return(
     <Router>
         <Switch>
            {routes.map((x)=> (
                <Route
                     path={x.path}
                     exact component={x.component}
                ></Route>
            )
            )}
         </Switch>
     </Router>

    )
}
export default AppRouters