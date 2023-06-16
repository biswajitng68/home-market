import {Outlet,useParams} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
import { useEffect, useState } from 'react';

export default function Hotel(){
const params =useParams();
const [hoteldetail,sethoteldetail]=useState();
useEffect(()=>{
handleSubmit();
},[])

const handleSubmit = async () => {
    const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/building_Details", {
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",

        },
        
        body: JSON.stringify({building_id:params.hotel})
    });
    const json = await response.json()
    if (json.success){
        sethoteldetail(json.data[0]);
        console.log(json);
    }
    else{
        alert(json.error)
    }
}

const bookroom = async () => {
    const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/bookRoom", {
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",

        },
        
        body: JSON.stringify({building_id:params.hotel,token:localStorage.getItem("userauthtoken"),seller_id:hoteldetail.seller._id})
    });
    const json = await response.json()
    alert(json.message);
}

    return(
        <>
        {hoteldetail&&
          <section className="home hotelsp">
        <div className="text">{hoteldetail.name}</div>
        <div className='row hotelpage'>
        <div className='col-lg-8 col-md-6 hotelimg'>
        <img src={boximg}></img>
        </div>
        <div className='col-lg-4 col-md-6 hoteldetails'>
            <div className='d-flex justify-content-between'>
        <h5>{hoteldetail.buildingType}</h5>
        <h5>Rs.{hoteldetail.price}</h5>
        </div>
        <div className='hoteldetailtext'>
            {hoteldetail.description}
        </div>
        <div className='hoteldetailtext'>
            <i class='bx bxs-map'></i> 
        {hoteldetail.address}
        </div>
        <div className='hoteldetailtext'>Available Rooms: {hoteldetail.available}</div>
        <div className='d-grid mx-auto hoteldetailtext'>
            <button type="button" className="btn btn-primary bookbutton" onClick={bookroom}>Book</button>
        </div>
        <div className='hoteldetailtext ownerdetail rounded my-2'>
            <h4>Contact details</h4>
            <div className='hoteldetailtext'>Owner:{hoteldetail.seller.name}</div>
            <div className='hoteldetailtext'>
                <i className='bx bx-phone p-1'></i>
                {hoteldetail.seller.mobile}
            </div>
            <div className='hoteldetailtext'>
            <i className='bx bxl-gmail p-1'></i>
                 {hoteldetail.seller.email}
            </div>
        </div>
        </div>
       
        </div>
        </section>}
        <Outlet/>
        </>
    )
}