import React, { useContext } from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setauthUser] = useAuth();
    const handelLogout = ()=>{
        try {
            setauthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("logout successfully !")
            
            setTimeout(()=>{
               
                window.location.reload();
              
              },2000)
            
        } catch (error) {
            toast.error("Error :" + error.message )
            setTimeout(()=>{},2000);
        }
    }
  return (
    <>

    <button className='px-3 py-2 bg-red-500 text-white rounded-md courser-pointer'  
    onClick={handelLogout}
    
    >logout</button>
    </>
  )
}

export default Logout