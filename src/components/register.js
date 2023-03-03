
import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Signup (){
  const navigate=useNavigate()
  const  collectData=async()=>{
    console.log(name, email , password , city)
    let result = await fetch("http://localhost:8080/registration",{
      method:"post",
      body:JSON.stringify({name, email , password , city}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result= await result.json()
  navigate('/Login')
  }
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setPassword]=useState("")
  const [city,setcity]=useState("")
  return(
    <div className='register'>

  <label className='label'>name</label>
<input className='inputBox' type="text" placeholder='enter name' value={name} onChange={(e)=>setname(e.target.value)}/><br/>
<label className='label'>email</label>

<input className='inputBox' type="text" placeholder='enter email' value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
<label className='label'>password</label>
<input className='inputBox' type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
<label className='label'>city</label>
<input className='inputBox' type="text" placeholder='enter city' value={city} onChange={(e)=>setcity(e.target.value)}/><br/>
<button className='btn' onClick={collectData} > Register</button>

    </div>
  )
}
export default Signup;
