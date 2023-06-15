import React, { useContext, useState } from "react";
import profilePicture from '../homebg.png'
import '../App.css';
import { useEffect } from "react";
import AuthContext from "../context/authContext";
export default function Genprofile() {
    const base_url="https://room-rover-app-backend-mern.onrender.com";
   //const base_url=" http://localhost:4001";
  const [profile,setprofile]=useState({name:"",mobile:"",email:""});
  const auth=useContext(AuthContext);
  useEffect(()=>{
    handleSubmit();
    },[])
  const handleSubmit = async () => {
    const response = await fetch(base_url+"/api/user_seller_profile", {
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",

        },
        
        body: JSON.stringify({token:localStorage.getItem("userauthtoken"),userSellerType:"user"})
    });
    const json = await response.json()
    if (json.success){
        console.log(json.data);
        setprofile(json.data);
    }
    else{
        alert(json.message);
    }
}
  return (
    <>
      <section className="home">
        <div className="text">Profile</div>
        <div className="p-4">
          <div className="profile-page my-3">
            <div className="profile">
              <div className="profile-picture ">
                <img src={profilePicture} alt="Profile" />

              </div>
              <div className="profile-info">
                <div className="profilevars rounded">Name<div className="profilevals">
                  {profile.name}
                </div></div>
                <div className="profilevars rounded">Mobile<div className="profilevals">
                  {profile.mobile}
                </div></div>
                <div className="profilevars rounded">Email<div className="profilevals">
                  {profile.email}
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}