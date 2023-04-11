import {Outlet,Link} from 'react-router-dom';
import '../App.css';
import React, { useEffect, useState } from "react";
export default function Nav(){
 
 const [mode,setMode]=useState("Light");
const [close,setClose]=useState(false);
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  document.body.classList.toggle("dark", isOpen);

},[isOpen]);



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

                <li className="search-box">
                    <i className='bx bx-search icon'></i>
                    <input type="text" placeholder="Search..."/>
                </li>

                <ul className="menu-links" >
                    <li className="nav-link">
                        <Link to="../">
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Home</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                        <i class='bx bxs-category icon'></i>
                            <span className="text nav-text">All rooms</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i class='bx bxs-city icon' ></i>
                            <span className="text nav-text">All cities</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                        <i class='bx bx-building icon'></i>
                            <span className="text nav-text">All roomtypes</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                        <i class='bx bx-user icon'></i>
                            <span className="text nav-text">Profile</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                        <i class='bx bx-info-circle icon'></i>
                            <span className="text nav-text">About</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <Link to="../login">
                        <i className='bx bx-log-in icon' ></i>
                        <span className="text nav-text">Login</span>
                    </Link>
                </li>

                <li className="mode">
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
                </li>
                
            </div>
        </div>

    </nav>
   


        <Outlet/>
        </>
    )
}