import { useContext } from "react";
import {authContext }from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
    const {email,password,setEmail,setPassword,handleLogin,}=useContext(authContext)
  return (
    <div>
       <form onSubmit={(e)=>{
        e.preventDefault()
        setEmail('');
        setPassword("")
        }}>
      <div className="email ">
        <label htmlFor="email">Email</label>
        <input 
        type="text"
        placeholder="email..."
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
       <div className="password">
        <label htmlFor="password">Password</label>
        <input 
            type="password"
            placeholder="password..."
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
       </div>
       <button type="submit" className='py-2 bg-sky-100 px-8 rounded' onClick={handleLogin}>Login</button>
       <p>Forgot Password?</p>
       <Link to='/signup'>
         Sign up?
       </Link>
    </form>
    </div>
  )
}

export default Login
