import {Outlet,Link} from 'react-router-dom';
import '../App.css';
import React, { useEffect, useState,useContext } from "react";
import AuthContext from '../context/authContext';
export default function Selnav(){
 const auth=useContext(AuthContext);
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

               

                <ul className="menu-links" >
                    <li className="nav-link">
                        <Link to="../selhome">
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>Dashboard</span>
                        </Link>
                    </li>

                   

                    

                    <li className="nav-link">
                        <Link to="../addroom">
                        <i class='bx bx-building icon'></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>Add New Rooms</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="../selprofile">
                        <i class='bx bx-user icon'></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>Profile</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                    <Link to="../about">
                        <i class='bx bx-info-circle icon'></i>
                            <span className="text nav-text" onClick={()=>{setClose(true)}}>About</span>
                        </Link>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="" onClick={()=>{localStorage.clear();auth.setsellerlogin(false);}}>
                    <Link to="../login">
                        <i className='bx bx-log-in icon' ></i>
                        <span className="text nav-text">Logout</span>
                    </Link>
                </li>

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