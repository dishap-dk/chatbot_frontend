// import {  Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
function NavBar2() {
  const [result, setresult] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      let res = await fetch("http://localhost:8080/getUser");
      res = await res.json();
      setresult(res.data);
      
    };
    getUsers();
  }, []);
  return (
    <div className="nav">
      <table>
      <ul className="navbar2">
        <h1 className="user">users List</h1>
       
        <li>id</li>
        <li>name</li>
      </ul>
      {result &&
        result.length > 0 &&
        result.map((list, index) => {
          return (
            <ul className="navbar3"  key={index}>
              <li>{list.id}</li>
              <li>{list.name}</li>
            </ul>
            
          );
        })}
    
    </table>
    </div>
  );
}
export default NavBar2;
