import Login from "../Pages/Login"



const Auth = () => {
   
  return (
   <div>
    <Login/>
   </div>
  )
}

export default Auth
{/* <form onSubmit={(e)=>{ */}
    //     e.preventDefault()
    //     setEmail('');
    //     setPassword("")
    //     }}>
    //   <div className="email ">
    //     <label htmlFor="email">Email</label>
    //     <input 
    //     type="text"
    //     placeholder="email..."
    //     value={email}
    //     onChange={(e)=>setEmail(e.target.value)}
    //     />
    //   </div>
    //    <div className="password">
    //     <label htmlFor="password">Password</label>
    //     <input 
    //         type="password"
    //         placeholder="password..."
    //         value={password}
    //         onChange={(e)=>setPassword(e.target.value)}
    //     />
    //    </div>
    //    <button type="submit" className='py-2 bg-sky-100 px-8 rounded' onClick={handleLogin}>Login</button>
    //    <div onClick={handleGoogleLogin} className="google cursor-pointer p-2 inline-block bg-sky-100">
    //       <FcGoogle/>
    //    </div>
    //    <div onClick={handleLogout} className="logout">
    //     Logout
    //    </div>
    // </form>
