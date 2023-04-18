import React from "react";
import profilePicture from '../homebg.png'
import '../App.css';
export default function Genprofile() {

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
                  Biswajit Nag
                </div></div>
                <div className="profilevars rounded">Mobile<div className="profilevals">
                  787288900
                </div></div>
                <div className="profilevars rounded">Email<div className="profilevals">
                  biswajit@gmail.com
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}