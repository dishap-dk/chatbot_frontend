
import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Signup (){
  const navigate=useNavigate()
  const [error,setError]=useState(false)
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setPassword]=useState("")
  const [city,setcity]=useState("")
  const  collectData=async()=>{
    console.log(name,email,password,city)
   if(!name || !email|| !password|| !city){
    setError(true)
    return false
   }
    let result = await fetch("http://localhost:8080/registration",{
      method:"post",
      body:JSON.stringify({name, email , password , city}),
      headers:{
        'Content-Type':'application/json',
        
      }
    })
    result= await result.json()
    console.log(result)
    localStorage.setItem('user',JSON.stringify(result));

  navigate('/Login')
  }
  

  return(
    <div className='register'>

  <label className='label'>name</label>
<input className='inputBox' type="text" placeholder='enter name' value={name} onChange={(e)=>setname(e.target.value)}/><br/>
{error && !name &&<><span className='enter-valid'>enter valid name</span><br /><br /></>}
<label className='label'>email</label>

<input className='inputBox' type="text" placeholder='enter email' value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
{error && !email &&<><span className='enter-valid'>enter valid email</span><br /><br /></>}
<label className='label'>password</label>
<input className='inputBox' type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
{error && !password && <><span className='enter-valid'>enter valid password</span><br /><br /></>}
<label className='label'>city</label>
<input className='inputBox' type="text" placeholder='enter city' value={city} onChange={(e)=>setcity(e.target.value)}/><br/>
{error && !city && <><span className='enter-valid'>enter valid city</span><br /><br /></>}
<button className='btn' onClick={collectData} > Register</button>

    </div>
  )
}
export default Signup;
