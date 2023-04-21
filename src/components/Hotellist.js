import {Outlet} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
import { useEffect, useState } from 'react'
export default function Hotellist(){
    const [roomdetail,setroomdetail]=useState();
useEffect(()=>{
handleSubmit();
},[])

const handleSubmit = async () => {
    const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/buildingDetails_Type_City_wise", {
        method: 'GET',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",

        },
        
        body: JSON.stringify()
    });
    const json = await response.json()
    if (json.success){
        console.log(json.data);
        setroomdetail(json.data);
    }
    else{
        alert(json.message);
    }
}
    return(
        <>
            <section className="home">
        <div className="text">All rooms</div>
        <div className='container-fluid'>
            <div className='row hotelcontainer'>
                    {
                    (()=>{
                       let rows=[];
                       console.log(roomdetail);
                       if(roomdetail){
                        for(let i=0;i<roomdetail.length;i++){
                        rows.push(
                        <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>{roomdetail[i].name}</p></div>
                    <div className='row hotelcontainer'>
                    <p className='cityname col'>{roomdetail[i].city}</p>
                    <p className='cityname col'>{roomdetail[i].buildingType}</p>
                    <p className='cityname col'>{roomdetail[i].price}Rs</p>
                    </div>
                    </div></div></div>);}}
                    return rows;
                    })()
                    }
            </div>
        </div>
        </section>
        <Outlet/>
        </>
    )
}