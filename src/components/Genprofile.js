import React, { useContext, useState } from "react";
import '../App.css';
import { useEffect,useRef } from "react";
import AuthContext from "../context/authContext";
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from "react-router-dom";
export default function Genprofile() {
    const base_url="https://room-rover-app-backend-mern.onrender.com";
   //const base_url=" http://localhost:4001";
  const [profile,setprofile]=useState({name:"",mobile:"",email:""});
  const [bookdetail,setbook]=useState([]);
  const [checkkdetail,setcheck]=useState([]);
  const [wishdetail,setwish]=useState([]);
  const [num,setnum]=useState();
  const navigate=useNavigate();
  const auth=useContext(AuthContext);
  const ref=useRef(null);
  const [b64,setb64]=useState("data:image/png;base64,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")
  useEffect(()=>{
    handleSubmit();
    bookingdetail();
    checkoutdetail();
    viewwishlist();
    },[])

    function convertToBase64(e){
       var reader=new FileReader();
       reader.readAsDataURL(e.target.files[0]);
       reader.onload=()=>{
          setb64(reader.result);
          reader.onerror=error=>{
              console.log("Error : ",error);
          }
          if(window.confirm("Do you want to lock this avatar?"))
       updateprofile(reader.result);
       }
       
    };

  const handleSubmit = async () => {
    ref.current.continuousStart()
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
        if(json.data.image)
        setb64(json.data.image);
    }
    else{
        alert(json.message);
    }
    ref.current.complete()
}

const updateprofile = async (b64string) => {
  console.log(b64string);
  ref.current.continuousStart()
  const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/update_profile", {
      method: 'POST',
      crossDomain: true,
      headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",

      },
      
      body: JSON.stringify({token:localStorage.getItem("userauthtoken"),name:profile.name, address:"", base64:b64string, userSellerType:"user"})
  });
  const json = await response.json()
  if(json.success){
  handleSubmit();}
  alert(json.message)
  ref.current.complete()
}

const cancelbook = async (i) => {
  // console.log(i);
  ref.current.continuousStart()
  const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/cancelBooking", {
      method: 'PUT',
      crossDomain: true,
      headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",

      },
      
      body: JSON.stringify({token:localStorage.getItem("userauthtoken"),booking_id:bookdetail[i]._id})
  });
  const json = await response.json()
  if(json.success){
    bookingdetail();
  handleSubmit();}
  alert(json.message)
  ref.current.complete()
}

const viewwishlist = async () => {
  ref.current.continuousStart();
  const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/view_wishlist", {
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
  if(json.success){
      console.log(json.data);
      setwish(json.data.wishlist);
  }
  else{
  alert(json.message);}
  ref.current.complete();
}

const bookingdetail = async () => {
  ref.current.continuousStart()
  const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/view_all_booking_history", {
      method: 'POST',
      crossDomain: true,
      headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",

      },
      
      body: JSON.stringify({token:localStorage.getItem("userauthtoken"),status:"booked"})
  });
  const json = await response.json()
  if (json.success){
      console.log(json.data);
      setbook(json.data);
  }
  else{
      alert(json.message);
  }
  ref.current.complete()
}

const checkoutdetail = async () => {
  ref.current.continuousStart()
  const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/view_all_booking_history", {
      method: 'POST',
      crossDomain: true,
      headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
           "Access-Control-Allow-Origin": "*",

      },
      
      body: JSON.stringify({token:localStorage.getItem("userauthtoken"),status:"checkedOut"})
  });
  const json = await response.json()
  if (json.success){
      console.log(json.data);
      setcheck(json.data);
  }
  else{
      alert(json.message);
  }
  ref.current.complete()
}

  return (
    <>
      <section className="home" >
            <LoadingBar color='#f11946' height={4} ref={ref} />
     
        <div className="text">Profile</div>
        <div className="p-3 row mx-0 my-0">
          <div className="profile-page my-3 col-12 col-lg-6">
            <div className="profile">
              <div className="profile-picture ">
                {/* <img src={profilePicture} alt="Profile" /> */}
                <form>
                <input   type="file" id='file' accept='.jpeg, .png, .jpg'   onChange={convertToBase64}/>
                  <label htmlFor="file"><img src={b64}/></label>
                  </form>
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
                <div className="profilevars rounded">Coins<div className="profilevals">
                <i class='bx bxs-coin' style={{color:'#f4fa07'}}></i> {profile.coins}
                </div></div>
              </div>
            </div>
            </div>
            <div className="col-12 col-lg-6">
            <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Booked</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Checked-out</button>
    <button class="nav-link" id="nav-wish-tab" data-bs-toggle="tab" data-bs-target="#nav-wish" type="button" role="tab" aria-controls="nav-wish" aria-selected="false">Wishlist</button>
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
      <th scope="col">Seller</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
  {checkkdetail[0]&&(()=>{
      let rows=[];
      if(checkkdetail){
      for(let i=0;i<checkkdetail.length;i++){
      rows.push(
    <tr>
      <td>{checkkdetail[i].building.name}</td>
      <td>{checkkdetail[i].seller.name}</td>
      <td>{checkkdetail[i].building.city}</td>
    </tr>);}}
  return rows;
  })()
  }
  </tbody>
</table>
  </div>
  
  <div class="tab-pane fade" id="nav-wish" role="tabpanel" aria-labelledby="nav-wish-tab" tabindex="0">
    <table className="table booktable">
  <thead>
  
    <tr>
      <th scope="col">Building</th>
      <th scope="col">Price</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
  {wishdetail[0]&&(()=>{
      let rows=[];
      if(wishdetail){
      for(let i=0;i<wishdetail.length;i++){
      rows.push(
    <tr onClick={()=>{navigate("../"+wishdetail[i]._id)}}>
      <td>{wishdetail[i].name}</td>
      <td>{wishdetail[i].price}</td>
      <td>{wishdetail[i].city}</td>
    </tr>);}}
  return rows;
  })()
  }
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