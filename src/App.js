import React, { Suspense,useState,useEffect } from 'react'
import main from './main.scss'
import Routers from './Routes/Routers'
import Loading from "./Components/LoadingScreen/Loading"
import Logins from  './Components/Login/Logins'

export const App = () => {

    const [isLoading, setIsLoading] = useState(true);
     useEffect (()=>{
        setTimeout(()=> {setIsLoading(false);},800)
        }
      )
  
    return (
        <div>
          {isLoading ? <Loading/> : 
            <Suspense fallback={<Loading/>}>
            <Routers></Routers>
            </Suspense>
          }

        </div>
    )
}
export default App