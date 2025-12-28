import React,{ useContext, useState} from 'react'
import UserContext from '../Context/UserContext'
const Login = () => {
 
   const [username,setUsername]= useState('')
   const [password, setPassword] = useState('') 
   
   const {setUser}= useContext(UserContext)

   const handleSubmit=(e)=>{
     e.preventDefault()
      setUser({username,password}) 
   }
  
const inputstyles='p-2 border border-gray-400 shadow-sm rounded my-2';
  return (
    <div className='flex flex-col items-center justify-center'>
        <h2>Login</h2>
        <input className={inputstyles} type='text'
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='username'/>
        
        <input className={inputstyles} type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/>
        <button className='p-2 border border-orange-100 bg-red-100 shadow-sm rounded my-2 hover:bg-red-200' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
export default Login