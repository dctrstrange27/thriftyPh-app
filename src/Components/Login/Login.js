import React from 'react'
import LoginStyle from './LoginStyle.scss'

const Login = () => {
    return (
        <div className="container">
            <form className="add-form" action="/Home">
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="text" />
                </div>
                <input className="btn btn-block" type="submit" value="Log-in"/>
            </form>
        </div>
    )
}

export default Login
