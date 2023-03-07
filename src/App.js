// import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import NavBar2 from "./components/Navbar2"
// import Chat from './components/chat';
// import Protected from './components/Protected';
import Chat from './components/chat';
import Chatting from './components/chatting';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
    <NavBar/>
 
      <Routes>
        {/* <Route element={<Protected/>}> */}
  
        {/* <Route path='/Register' element={<Register/>}/> */}
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/chat'  element={<Chat />}/>
        <Route path='/Home'  element={<Home/>}/>
        {/* </Route> */}
        <Route path='/' element={<Register/>}/>
        <Route path='/chatting' element={<Chatting/>}/>

        {/* <Link to ="/login">login</Link> */}
        </Routes><br/>
      </BrowserRouter>
    </div>
  );
}

export default App;
