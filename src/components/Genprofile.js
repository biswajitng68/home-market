import React from "react";
import profilePicture from '../homebg.png'
import '../App.css';
export default function Genprofile(){

    return(
        <>
        <section className="home">
        <div className="text">Profile</div>
            <div className="profile-page">
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>Biswajit Nag</h2>
        <p>hbckjndsankjs jbkdnksd kjsbknksc kjasdjksnjnc kbcsabjcbsjb kasbbsk
            ncasknbckn jkskncskncnc kasnkcnscn ksnckndskncj ksbnckjs ck kajsnckj 
            nckksdnknck njcsksnsn cnskcn sb cjjsnc nsnsckjdsjjjd 
        </p>
      </div>
    </div>
    </section>
        </>
    )
}