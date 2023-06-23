import {Outlet,useNavigate} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
import { useContext, useEffect, useState,useRef } from 'react'
import LoadingBar from 'react-top-loading-bar';
import AuthContext from '../context/authContext'
export default function Typewisehotel(){
    const [typedetail,settypedetail]=useState();
    const auth=useContext(AuthContext);
    const navigate=useNavigate();
    const ref=useRef(null);
    const typeimage=["https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/18/61/186141_v1.jpeg","https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/summit-jungle-lodge-lansdowne/DSC04178_lmk62s","https://cdn.junglelodges.com/uploads/2020/03/2-50.jpg","https://i0.wp.com/pediaa.com/wp-content/uploads/2020/11/Difference-Between-Lodge-and-Guest-House_1.jpg?resize=550%2C334&ssl=1"]
useEffect(()=>{
handleSubmit();
},[])

const handleSubmit = async () => {
    ref.current.continuousStart()
    const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/allBuildingTypes_roomCount_minCost", {
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
        settypedetail(json.data);
    }
    else{
        alert(json.message);
    }
    ref.current.complete()
}
    return(
        <>
            <section className="home">
            <LoadingBar color='#f11946' height={4} ref={ref} />
        <div className="text">Roomtypes</div>
        <div className='container-fluid'>
            <div className='row hotelcontainer'>
                    {
                    (()=>{
                       let rows=[];
                       console.log(typedetail);
                       if(typedetail){
                        for(let i=0;i<typedetail.length;i++){
                        rows.push(
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 p-2' onClick={()=>{auth.setsearchcity("");auth.setsearchtype(typedetail[i]._id);navigate("../hotellist");}}><div  className='city p-2'>
                <img src={typeimage[i%4]}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>Type: {typedetail[i]._id}</p></div>
                    <div className='row'>
                    <p className='cityname col'>Rooms: {typedetail[i].roomCount}</p>
                    <p className='cityname col'>Min-cost: {typedetail[i].minCost}Rs</p>
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