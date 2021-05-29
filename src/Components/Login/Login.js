
import LoginStyle from './LoginStyle.scss'
import Home from '../Home/Home'
import PropTypes from 'prop-types';
import {useState} from 'react'

async function loginUser(crendentials) {
    return fetch('http://localhost:8080/Login',{
    method :'POST',
    headers:{
        'Content.Type':'application/json'
    }, 
    body: JSON.stringify(crendentials)
 })
  .then(data => data.json())
}



const Login = ({setToken}) => {
    
    const[username,setUsername] = useState()
    const[password,setPassword] = useState()
    
     const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        setToken(token);
     }    
    return (
        <div className="container">
            <h1>Log-in</h1>
            <form className="add-form" onSubmit={handleSubmit} >
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" onChange={x => setUsername(x.target.value)}    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password"  onChange={x => setPassword(x.target.value)}  />
                </div>
                <input className="btn btn-block" type="submit" value="Log-in"/>
        
            </form> 
        </div>
    )
}
Login.propTypes ={
    setToken: PropTypes.func.isRequired
}


export default Login
