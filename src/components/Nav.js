import {Outlet,Link} from 'react-router-dom';
import '../App.css';
import React, { useEffect, useState,useContext } from "react";
import AuthContext from '../context/authContext';

export default function Nav(){
 const auth=useContext(AuthContext);
 const [mode,setMode]=useState("Light");
const [close,setClose]=useState(false);
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  document.body.classList.toggle("dark", isOpen);

},[isOpen]);

console.log(localStorage.getItem("authtoken"));

    return(
        <>
        <nav className={`sidebar ${close?"close":""}  `}>
        <header>
            <div className="image-text">
                <span className="image">
                   
                </span>

                <div className="text logo-text">
                    
                    <span className="name">SweetHome</span>
                    
                </div>
            </div>
            
            <i className='bx bx-chevron-right toggle' onClick={()=>{setClose(!close)}}></i>
            
        </header>

        <div className="menu-bar">
            <div className="menu">


                <ul className="menu-links" >
                    <li className="nav-link">
                        <Link to="../">
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>Home</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="../hotellist">
                        <i class='bx bxs-category icon'></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>All rooms</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="../cityhotels">
                            <i class='bx bxs-city icon' ></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>All cities</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="../typehotels">
                        <i class='bx bx-building icon'></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>All roomtypes</span>
                        </Link>
                    </li>

                    {auth.userlogin&&<li className="nav-link">
                        <Link to="../genprofile">
                        <i class='bx bx-user icon'></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>Profile</span>
                        </Link>
                    </li>}

                    <li className="nav-link">
                    <Link to="../about">
                        <i class='bx bx-info-circle icon'></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>About</span>
                        </Link>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                
                {!(auth.userlogin)?<li className="">
                    <Link to="../login">
                        <i className='bx bx-log-in icon' ></i>
                        <span className="text nav-text">Login</span>
                    </Link>
                </li>:<li className="" onClick={()=>{localStorage.removeItem("userauthtoken");auth.setuserlogin(false)}}>
                    <Link to="../">
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Logout</span>
                    </Link>
                </li>}

                {/* <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon sun'></i>
                        <i className='bx bx-sun icon moon'></i>
                    </div>
                    <span className="mode-text text" > {mode} mode</span>

                    <div className="toggle-switch" onClick={()=>{
                      setMode(mode=="Dark"?"light":"Dark")
                      setIsOpen(!isOpen)}} >
                        <span className="switch"></span>
                    </div>
                </li> */}
                
            </div>
        </div>

    </nav>
        <Outlet/>
        </>
    )
}