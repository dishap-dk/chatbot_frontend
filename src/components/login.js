
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login (){
 const navigate = useNavigate()
 const [error, setError]=useState(false)
  const collect = async()=>{
    if(!email || !password){
      setError(true)
      return false
    }
    let result = await fetch("http://localhost:8080/loginUser",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result= await result.json();
    console.log(result)
    if(result.token){
localStorage.setItem('user',JSON.stringify(result.user))
localStorage.setItem('token',JSON.stringify(result.token))
localStorage.setItem('id',JSON.stringify(result.user[0].id))
console.log(result)

navigate('/Chatting')
    }else{
      alert("please enter correct details")
    }
   
  }
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

  return(
<div className="login">
<label className='label'>email</label>

<input className='inputBox' type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/> <br/>
{error && !email &&<> <span>Enter Valid Email</span><br /></>}
<label className='label'>password </label>
<input className="inputBox" type ="password" placeholder="enter PAssword" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/><br/>
{ error && !password&&  <><span>Enter Valid Password</span><br/></>}
<button onClick={collect}>login</button>
</div>
  )
}

export default Login;
