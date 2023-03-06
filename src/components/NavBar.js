import {  Link } from "react-router-dom";
import "../App.css"
function NavBar(){
    return(
        <div>
            <ul className="navbar">
                <li> <Link to ="/">Register</Link></li>
                <li><Link to ="/login">login</Link></li>
                <li><Link to ="/chat">chat</Link></li>
                

            </ul>
        </div>
    )
}
export default NavBar
