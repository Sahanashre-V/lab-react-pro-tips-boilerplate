import React from "react";
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="flex">
            <Link to = "/">
            <div className="text">
                Kalvium ♥
            </div>
            </Link>
            <div className="nav">
                 

            <Link to="/Contact">
                <div className="text">
                Contact Us
                </div>
                
            </Link>

            <Link to="/Registration">
                <div className="text">
                Registration Form
                </div>
                
                </Link>
            </div>
           
          
        </div>
    )
}

export default Navbar