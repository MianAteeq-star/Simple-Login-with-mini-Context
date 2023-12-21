import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'





export default function Profile() {
    
    const {user} = useContext(UserContext)

    if (!user)  return <div>Please Login</div>
    

   return( 
   <>
    <div className="3xl p-4 text-center bg-orange-600 mt-10">
        Profile
    </div>
   <div className='text-center mt-5'>Welcome : {user.email} <br />  Password : {user.password} </div>
   </>
   
)
}
