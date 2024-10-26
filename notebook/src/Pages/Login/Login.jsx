import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <main>
      <form className="grid content center">
        <div className="email ">
            <label htmlFor="email ">Email</label>
            <input
            className="w-8 bg-sky-900"
            type="email" 
            />
        </div>
        <div className="pass">
            <label htmlFor="password">Password</label>
            <input
             type="password"
              name="password"
               id="password"
            />
        </div>
        <p>Forgot Password</p>
        <div className="google">
         <FcGoogle />
        </div>
      </form>
    </main>
  
  )
}

export default Login
