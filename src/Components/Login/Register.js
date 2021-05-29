
import LoginStyle from './LoginStyle.scss'
const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <form className="add-form" >
        <div className="form-control">
          <label>Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="text" id="password" name="password" required />
        </div>
        <input className="btn btn-block" type="submit" value="register" />
        <a className="btn btn-block" href="/thriftyPh-app">Login</a>
      </form>
    </div>

  )
}

export default Register