import {useForm} from "react-hook-form"
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup"

const Contact = () => {

    const schema = yup.object().shape({
        FullName : yup.string().required('Your full name please'),
        email: yup.string().email('invalid email').required('Your email please'),
        age: yup.number().min(18).required('age please'),
        password: yup.string().min(6).max(15).required('Password please'),
        confirmPassword:yup
        .string()
        .oneOf([yup.ref('password'),null],'password do not match')
        .required('confirm password please')
    })

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    });

    const submit = (data) => {
       
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(submit)}> 
     <input type="text" placeholder="Full Name..." {...register("FullName")} />
     <small>{errors.FullName?.message}</small>
     <input type="text" placeholder="Email..."  {...register("email")}/>
     <small>{errors.email?.message}</small>
     <input type="number" placeholder="Age..."{...register("age")}/>
     <small>{errors.FullName?.message}</small>
     <input type="password" placeholder="Password..." {...register("password")}/>
     <small>{errors.password?.message}</small>
     <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
     <small>{errors.confirmPassword?.message}</small>
     <input type="submit" value="submit" {...register("submit")}/>
    </form>
  )
}

export default Contact