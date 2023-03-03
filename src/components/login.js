// // import { useEffect } from 'react';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom";
// import "../App.css";

// function Login() {
//   const navigate = useNavigate();

//   return (
//     <Form className="login">
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address &nbsp;</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted"></Form.Text>
//       </Form.Group>
//       <br />
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password &nbsp;</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>{" "}
//       <br />
//       <Button
//         variant="primary"
//         type="submit"
//         onClick={() => {
//           navigate("/chat");
//         }}
//       >
//         Submit
//       </Button>
//       <br />
//     </Form>
//   );
// }

// 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login (){
 const navigate = useNavigate()
  const collect = async()=>{
    let result = await fetch("http://localhost:8080/loginUser",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result= await result.json();
    navigate('/Chat')
  }
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


  return(
<div className="login">
<label className='label'>email</label>
<input className='inputBox' type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/> <br/>
<label className='label'>password </label>
<input className="inputBox" type ="password" placeholder="enter PAssword" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/><br/>

<button onClick={collect}>login</button>
</div>
  )
}

export default Login;
