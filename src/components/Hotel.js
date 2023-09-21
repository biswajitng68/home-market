import {Outlet,useParams,useNavigate} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
import { useEffect, useState,useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
export default function Hotel(){
      const base_url="https://room-rover-app-backend-mern.onrender.com";
   //const base_url=" http://localhost:4001";
const params =useParams();
const [hoteldetail,sethoteldetail]=useState();
const [wished,setwished]=useState(false);
const [alert,setalert]=useState();
var [alertmessage,setalm]=useState("Here is an alert");
const ref=useRef(null);
const nav=useNavigate();
useEffect(()=>{
handleSubmit();
if(localStorage.getItem("userauthtoken"))
viewwishlist();
},[])

const handleSubmit = async () => {
    ref.current.continuousStart();
    const response = await fetch(base_url+"/api/building_Details", {
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
    ref.current.complete();
}

const remfromwishlist = async () => {
    ref.current.continuousStart();
    const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/remove_from_wishlist", {
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",

        },
        
        body: JSON.stringify({building_id:params.hotel,token:localStorage.getItem("userauthtoken")})
    });
    const json = await response.json()
    if(json.success){
    setwished(false);
    setalm(json.message);
    setalert(true);
            var x=json.message.length
        }
        else{
            setalm(json.error)
            setalert(true);
            var x=json.error.length
        }
        setTimeout(() => {
            setalert(false);
            
        }, 150*x);
    ref.current.complete();
}

const viewwishlist = async () => {
    ref.current.continuousStart();
    const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/add_to_wishlist", {
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",

        },
        
        body: JSON.stringify({building_id:params.hotel,token:localStorage.getItem("userauthtoken"),verify:true})
    });
    const json = await response.json()
    if(json.success){
        setwished(json.present_in_wishlist);
    }
    else
    alert(json.error2);
    ref.current.complete();
}

const wishlist = async () => {
    ref.current.continuousStart();
    const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/add_to_wishlist", {
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",

        },
        
        body: JSON.stringify({building_id:params.hotel,token:localStorage.getItem("userauthtoken"),verify:false})
    });
    const json = await response.json()
    if(json.success){
        setwished(true);
        setalm(json.message);
        setalert(true);
                var x=json.message.length
            }
            else{
                setalm(json.error)
                setalert(true);
                var x=json.error.length
            }
            setTimeout(() => {
                setalert(false);
                
            }, 150*x);
    ref.current.complete();
}

const bookroom = async () => {
    ref.current.continuousStart();
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
    if(json.success){
        setalm(json.message);
        setalert(true);
                var x=json.message.length
            }
            else{
                setalm(json.error)
                setalert(true);
                var x=json.error.length
            }
            setTimeout(() => {
                setalert(false);
                if(json.success===true)
                nav("../genprofile")
            }, 150*x);
    ref.current.complete();
}

    return(
        <>
        
          <section className="home hotelsp" >
          <LoadingBar color='#f11946' height={4} ref={ref} />
{hoteldetail&&<><div className="text">{hoteldetail.name}</div>
{alert==true&&
        <div className='d-flex justify-content-center aalert-container'>
            <div className='d-flex alert rounded my-2'><i className='bx bx-bell  mx-1'></i><span className='alerttext'>{alertmessage}</span></div>
        </div>}
        <div className='row hotelpage'>
        <div className='col-lg-8 col-md-6 hotelimg'>
        <img src={hoteldetail.image||boximg}></img>
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
        {wished==false?<div className='d-grid mx-auto hoteldetailtext'>
            <button type="button" className="btn btn-primary bookbutton" onClick={wishlist}>Add to wishlist</button>
        </div>:
        <div className='d-grid mx-auto hoteldetailtext'>
        <button type="button" className="btn btn-primary bookbutton" onClick={remfromwishlist}>Remove from wishlist</button>
    </div>}
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
       
        </div></>}
        </section>
        <Outlet/>
        </>
    )
}