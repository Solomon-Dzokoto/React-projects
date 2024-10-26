import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const SignUp = () => {
     const [emailValue,setEmailValue] = useState('');
     const [passwordValue,setPasswordValue] = useState('');

      const dateObj = new Date();
      console.log(dateObj)
    const schema = yup.object().shape({
      Fullname : yup.string().required("Fullname needed"),
      Email : yup.string().email('Invalid email format').required('Email needed'),
      Date : yup
      .date()
      .required('Please insert your date of birth')
      .typeError('invalid date format')
      .max(dateObj(dateObj.setFullYear(dateObj.getFullYear()-15))),
      Password : yup.string().required("Password required"),
      ConfirmPassword :yup.oneOf([yup.ref('Password'),null]).string().required('Confirm Password needed'),
    })
    
    const {handleSubmit,register}=useForm({
    resolver : yupResolver(schema)
    })

const onHandleSubmit = async (e) => {
  try{
    e.preventDefault();
   await createUserWithEmailAndPassword(auth,emailValue,passwordValue)
  }catch(err){
    console.error(`Error: ${err.message}`)
  }
 

}
return (
    <div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <input
         type="text" 
         placeholder="Fullname..."
         {...register("Fullname")}
         />
        <input
         type="date"
         {...register("Date")}
         />
        <input
         type="email" 
         placeholder="Email..."
         value={emailValue}
         onChange={(e)=>setEmailValue(e.target.value)}
         {...register("Email")}
         />
        <input
         type="password" 
         placeholder="Password"
         value={passwordValue}
         onChange={(e)=>setPasswordValue(e.target.value)}
         {...register("Password")}
         />
        <input
         type="password" 
         placeholder="Confirm Password"
         value={passwordValue}
         onChange={(e)=>setPasswordValue(e.target.value)}
         {...register("ConfirmPassword")}
         />
        <input
         type="submit" 
         />
      </form>
    </div>
  )
}

export default SignUp
