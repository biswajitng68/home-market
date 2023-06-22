import {Outlet,useNavigate} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
import { useEffect, useState ,useContext,useRef} from 'react'
import AuthContext from '../context/authContext'
import LoadingBar from 'react-top-loading-bar'
export default function Hotellist(){
     const base_url="https://room-rover-app-backend-mern.onrender.com";
   //const base_url=" http://localhost:4001";
    const navigate=useNavigate();
    const auth=useContext(AuthContext);
    const [roomdetail,setroomdetail]=useState();
    const [searchmin,setsearchmin]=useState(0);
    const [searchmax,setsearchmax]=useState(20000);
    const ref=useRef(null);
useEffect(()=>{
handleSubmit();
},[])

const handleSubmit = async () => {
    ref.current.continuousStart();
    const response = await fetch(base_url+"/api/buildingDetails_Type_City_wise", {
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",

        },
        
        body: JSON.stringify({city:auth.searchcity, buildingType:auth.searchtype, minCost:searchmin, maxCost:searchmax})
    });
    const json = await response.json()
    if (json.success){
        console.log(json.data);
        setroomdetail(json.data);
    }
    else{
        alert(json.message);
    }
    ref.current.complete();
}
    return(
        <>
            <section className="home">
            <LoadingBar color='#f11946' height={4} ref={ref} />
        <div className="text">All rooms</div>
        <div className='container-fluid'>
            <div className='searchbox'>
                <form onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
                    <div className='row hotelcontainer'>
            <div className="form-floating mb-3 col-md-3 col-6 p-1 ">
                <input type='text' className="form-control" id="floatingInput1" onChange={(e)=>{auth.setsearchcity(e.target.value)}} name='name' value={auth.searchcity} placeholder="name"  />
                <label htmlFor="floatingInput1">City</label>
            </div>
            <div className="form-floating mb-3 col-md-3 col-6 p-1">
                <input type='text' className="form-control" id="floatingInput1" onChange={(e)=>{auth.setsearchtype(e.target.value)}} name='name' value={auth.searchtype} placeholder="name"  />
                <label htmlFor="floatingInput1">Building Type</label>
            </div>
            <div className="form-floating mb-3 col-md-3 col-6 p-1">
                <input type='number' className="form-control" id="floatingInput1" onChange={(e)=>{setsearchmin(parseInt(e.target.value))}} name='name' value={searchmin} placeholder="name"  />
                <label htmlFor="floatingInput1">Minimum Price</label>
            </div>
            <div className="form-floating mb-3 col-md-3 col-6 p-1">
                <input type='number' className="form-control" id="floatingInput1" onChange={(e)=>{setsearchmax(parseInt(e.target.value))}} name='name' value={searchmax} placeholder="name"  />
                <label htmlFor="floatingInput1">Maximum Price</label>
            </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn  btn-primary'>Search</button>
            </div>
            </form>
            </div>
            <div className='row hotelcontainer'>
                    {
                    (()=>{
                       let rows=[];
                       console.log(roomdetail);
                       if(roomdetail){
                        for(let i=0;i<roomdetail.length;i++){
                        rows.push(
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 p-2 hotelcon'><div  className='city p-2' onClick={()=>{navigate("../"+roomdetail[i]._id)}}>
                <img src={roomdetail[i].image||boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><span className='citynamesp col'>{roomdetail[i].name}</span></div>
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