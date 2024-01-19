import React, { useState } from 'react'
import {IoMdEyeOff, IoMdEye} from "react-icons/io"
import { Link } from 'react-router-dom';
import Auth from '../components/Auth';

export default function SignIn() {
    const [showPassword, setShoePassword] = useState(false)
    const[formData, setFormData] =useState ({
        email: "",
        password: "",
    });
    const{ email, password } = formData;
    function onChange(e){
       setFormData((prevState)=>({
        ...prevState,
        [e.target.id]: e.target.value,
       }))
    }
  return (
    <section>
     <h1 className="text-3xl text-center mt-6 font-bold"> SignIn</h1>

        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl ">

     <div className="md:w-[60%] lg:w-[50%] mb-12 md:mb-6">
        <img src="https://www.svgrepo.com/download/16800/house-key.svg" alt="key" 
        className="w-full w-40% " />
     </div>
     <div className="w-full md:w-[60%] lg:w-[40%] ml-20">
        <form>
        <input type="email" id="email" value={email} onChange={onChange} placeholder="email address"
        className="w-full px-5 py-3 text-xl text-gray-600 bg-white border-gray-400 rounded transition ease-in-out mb-6"/>
        <div className="relative mb-6">
        <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={onChange} placeholder="password"
        className="w-full px-5 py-3 text-xl text-gray-600 bg-white border-gray-400 rounded transition ease-in-out"/>
        {showPassword ? ( <IoMdEyeOff className="absolute right-4 top-4 text-xl cursor-pointer"
         onClick={()=>setShoePassword((prevState)=>!prevState)}/>)
         : (<IoMdEye className="absolute right-4 top-4 text-xl cursor-pointer" onClick={()=>setShoePassword((prevState)=>!prevState)}/>)}
        </div>
        <div className="flex justify-between text-sm:text-lg whitespace-nowrap">
        <p className="mb-6">
            Don't have a account?
            <Link to="/sign-up" className="text-red-600 hover:text-red-400 transition duration-200 ease-in-out ml-1">Register</Link>
        </p>
        <p>
            <Link to="/forgot-password" className="hover:text-blue-400 text-red-800 transition duration-200 ease-in-out">ForgetPassword?</Link>
        </p>
        </div>

        <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out active:bg-blue-900" type="submit">Sign in</button>

        <div className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
        <p className="text-center font-semibold mx-4">
        OR
        </p>
        </div>
        <Auth />

        </form> 
     </div>
     </div>
    </section>
  )
}
