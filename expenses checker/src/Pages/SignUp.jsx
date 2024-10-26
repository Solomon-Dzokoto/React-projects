import { useContext } from "react";
import {authContext }from "../context/AuthContext";
import AuthContext from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const {email,password,setEmail,setPassword,handleGoogleLogin,handleLogin}=useContext(authContext)
  return(
    <AuthContext>
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
       <div className="confirm-password">
        <label htmlFor="password">Password</label>
        <input 
            type="password"
            placeholder="password..."
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
       </div>
       <button type="submit" className='py-2 bg-sky-100 px-8 rounded' onClick={handleLogin}>Sign up</button>
       <div onClick={handleGoogleLogin} className="google cursor-pointer p-2 inline-block bg-sky-100">
          <FcGoogle/>
       </div>
    </form>
    </AuthContext>
  )
}

export default SignUp
