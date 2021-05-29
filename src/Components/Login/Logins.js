import Login from "./Login"
import {useState} from 'react'
import Home from '../Home/Home'
import useToken from "../../useToken"


const Logins =()=>{
    const {token,setToken} = useToken();

    if(!token){
        return<Login setToken={setToken} />
    }
    return(
        <>
        <h1>hello Login</h1>

        </>
    )
}
export default Logins