import {Outlet,Link} from 'react-router-dom';
import '../App.css';
import React, { useEffect, useState } from "react";
export default function Nav(){
  
 
  const body =()=>{document.querySelector("body")} ;
  const sidebar =() =>{document.querySelector("body.nav")};
  const toggle = ()=>{document.querySelector("body.toggle")};
  const searchBtn = ()=>{document.querySelector("body.search-box")};
  const modeSwitch =()=>{document.querySelector("body.toggle-switch")};
  const modeText =()=>{document.querySelector("body.mode-text")};
 
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
                        <a href="#">
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Home</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-bar-chart-alt-2 icon' ></i>
                            <span className="text nav-text">Option1</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Option2</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i class='bx bx-coffee icon' ></i>
                            <span className="text nav-text">Option3</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-heart icon' ></i>
                            <span className="text nav-text">Option4</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-wallet icon' ></i>
                            <span className="text nav-text">Option5</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <a href="#">
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Logout</span>
                    </a>
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

    <section className="home">
        <div className="text">Dashboard Sidebar</div>
    </section>

        <Outlet/>
        </>
    )
}