import React, { useState } from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import toast from "react-hot-toast"
import { useForm } from 'react-hook-form';
import axios from "axios"

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }

      await  axios.post("http://localhost:4041/user/signup", userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success("Signup successfully !");
                navigate(from, {replace:true})
                
            }
           
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        })
        .catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error("Error:" + err.response.data.message)
                
              }
        });
    }
    
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            
                            <h3 className="font-bold text-lg">Signup!</h3>
                            
                            {/* Name input */}
                            <div className='mt-4 space-y-3'>
                                <span>Name</span><br/>
                                <input type="text" placeholder='Enter your full name!'
                                    className='w-80 px-3 border rounded-md outline-none py-1'
                                    {...register("name", { required: true })}
                                /><br/>
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Email input */}
                            <div className='mt-4 space-y-3'>
                                <span>Email</span><br/>
                                <input type="email" placeholder='Enter your email!'
                                    className='w-80 px-3 border rounded-md outline-none py-1'
                                    {...register("email", { required: true })}
                                /><br/>
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Password input */}
                            <div className='mt-4 space-y-3'>
                                <span>Password</span><br/>
                                <input type="password" placeholder='Enter a valid password!'
                                    className='w-80 px-3 border rounded-md outline-none py-1'
                                    {...register("password", { required: true })}
                                /><br/>
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Signup button and login link */}
                            <div className='flex justify-around mt-4'>
                                <button type="submit" className='bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>Signup</button>
                                
                                <p className='text-xl'>
                                    Already registered? <span className='underline text-blue-500 cursor-pointer' onClick={() => setIsLoginOpen(true)}>Login!</span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Conditional rendering of the Login modal */}
            {isLoginOpen && <Login closeModal={() => setIsLoginOpen(false)} />}
        </>
    );
}

export default Signup;
