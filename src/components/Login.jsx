import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    const {setUser}= useContext(UserContext)


    const handleSubmit= (e)=>{
e.preventDefault()
setUser({email,password})
console.log(email,password);
    }
  return (
    <>
    
    <div className="3xl p-4 text-center bg-orange-600">
        LOGIN
    </div>
 
    <div className="flex flex-wrap justify-center rounded-xl flex-col w-56 items-center mx-auto bg-amber-800 mt-4 gap-y-2 p-4">
        <input type="text" placeholder='Email' 
        className='my-2 outline-none p-2 rounded-lg'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        
        />
        <input type="password" placeholder='Password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='my-2 outline-none p-2 rounded-lg'
        
        />

        <button type='button' 
        className='p-2 bg-gray-500 text-white rounded-lg my-3'
        onClick={handleSubmit}>
            Login
        </button>
    </div>
    
    </>
  )
}
