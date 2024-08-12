import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

function Login() {
    const {
        register,
        handleSubmit,

        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
      

  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
       onClick={() => document.getElementById("my_modal_3").close()}
      >
        ✕
    </Link>
   
    <h3 className="font-bold text-lg">Login!</h3>
    <div className='mt-4 space-y-3'>
        <span>Email</span><br/>
        <input type="email" placeholder='enter your mail !'
        className='w-80 px-3 border rounded-md outline-none py-1'
        {...register("email", { required: true })}
         /><br/>
         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    {/* password section */}

    <div className='mt-4 space-y-3'>
    <span>Password</span><br/>
        <input type="password" placeholder='enter your valid password !'
        className='w-80 px-3 border rounded-md outline-none py-1'
        {...register("password", { required: true })}
        /><br/>
        {errors.password && <span className=' text-sm text-red-500'>This field is required</span>}
    </div>
{/* button */}
<div className='flex justify-around mt-4'>
    <button className=' bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-700 duraion-300'
    type='submit'
    >Login</button>

    <p>not regestered !  <Link to={"/signup"} className='underline text-blue-500 cursor-pointer' >SignUp</Link> </p>
   
</div>
</form>
  </div>
</dialog>
    </div>
    
    </>
  )
}

export default Login