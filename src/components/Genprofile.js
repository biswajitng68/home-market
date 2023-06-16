import React, { useContext, useState } from "react";
import profilePicture from '../homebg.png'
import '../App.css';
import { useEffect } from "react";
import AuthContext from "../context/authContext";
export default function Genprofile() {
    const base_url="https://room-rover-app-backend-mern.onrender.com";
   //const base_url=" http://localhost:4001";
  const [profile,setprofile]=useState({name:"",mobile:"",email:""});
  const [bookdetail,setbook]=useState([]);
  const [num,setnum]=useState();
  const auth=useContext(AuthContext);
  useEffect(()=>{
    handleSubmit();
    bookingdetail();
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

const cancelbook = async (i) => {
  // console.log(i);
  const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/cancelBooking", {
      method: 'PUT',
      crossDomain: true,
      headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",

      },
      
      body: JSON.stringify({token:localStorage.getItem("userauthtoken"),booking_id:bookdetail[i||num]._id})
  });
  const json = await response.json()
  if(json.success){
    bookingdetail();}
  alert(json.message)
}

const bookingdetail = async () => {
  const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/user_booking_Details", {
      method: 'POST',
      crossDomain: true,
      headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",

      },
      
      body: JSON.stringify({token:localStorage.getItem("userauthtoken")})
  });
  const json = await response.json()
  if (json.success){
      console.log(json.data);
      setbook(json.data);
  }
  else{
      alert(json.message);
  }
}
  return (
    <>
      <section className="home">
        <div className="text">Profile</div>
        <div className="p-3 row mx-0 my-0">
          <div className="profile-page my-3 col-12 col-lg-6">
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
            <div className="col-12 col-lg-6">
            <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Booked</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Checked-out</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
  {bookdetail[0]&&<div class="accordion" id="accordionExample">
  {
  (()=>{
      let rows=[];
      if(bookdetail){
      for(let i=0;i<bookdetail.length;i++){
      rows.push(
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+i} aria-expanded="false" aria-controls={"collapse"+i}>
      <i class='bx bxs-institution'></i> {bookdetail[i].building.name} <i class='bx bxs-hand-right'></i> Rs.{bookdetail[i].building.price}
      </button>
    </h2>
    <div id={"collapse"+i} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Seller: {bookdetail[i].seller.name}</p>
        <p>Contact: {bookdetail[i].building.mobile}</p>
        <p>Location: {bookdetail[i].building.address}, {bookdetail[i].building.city}</p>
        <button type="button" className="btn btn-danger" onClick={()=>{setnum(i);cancelbook(i)}}>Cancel</button>
        </div>
    </div>
  </div>);}}
  return rows;
  })()
  }
</div>}
  </div>
  
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
    <table className="table booktable">
  <thead>
    <tr>
      <th scope="col">Building</th>
      <th scope="col">Booking date</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>Thornton</td>
    </tr>
  </tbody>
</table>
  </div>
</div>
</div>
        </div>
      </section>
    </>
  )
}