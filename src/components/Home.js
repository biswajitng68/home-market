import {Outlet,useNavigate} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
import { useContext, useEffect,useState ,useRef} from 'react';
import AuthContext from '../context/authContext';
import LoadingBar from 'react-top-loading-bar';
export default function Home(){
    const base_url="https://room-rover-app-backend-mern.onrender.com";
//    const base_url=" http://localhost:4001";
    const [citydetail,setcitydetail]=useState();
    const [typedetail,settypedetail]=useState();
    const auth=useContext(AuthContext);
    const navigate=useNavigate();
    const ref = useRef(null)
    useEffect(()=>{
    cityhandleSubmit();
    typehandleSubmit();
    },[])
    
    const typehandleSubmit = async () => {
        const response = await fetch(base_url+"/api/allBuildingTypes_roomCount_minCost", {
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
    }
    
    const cityhandleSubmit = async () => {
        ref.current.continuousStart()
        const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/allCities_roomCount_minCost", {
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
            setcitydetail(json.data);
        }
        else{
            alert(json.message);
        }
        ref.current.complete();
    }

    return(
        <>
            <section className="home">
            <LoadingBar color='#0ff0f9' height={4} ref={ref} />
        <div className="text">Home</div>
    
        <div id='homebg'>
            <div>
                Welcome to <br></br> RoomRover
            </div>
        </div>
        <div className='container-fluid'>
            <h3 className='text'>Check citywise</h3>
            <div className='row p-2 hotelcontainer'>
                    {
                    (()=>{
                       let rows=[];
                       console.log(citydetail);
                       if(citydetail){
                        for(let i=0;i<4;i++){
                        rows.push(
                        <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2' onClick={()=>{auth.setsearchtype("");auth.setsearchcity(citydetail[i]._id);navigate("./hotellist")}}><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>City: {citydetail[i]._id}</p></div>
                    <div className='row hotelcontainer'>
                    <p className='cityname col'>Rooms: {citydetail[i].roomCount}</p>
                    <p className='cityname col'>Min-cost: {citydetail[i].minCost}Rs</p>
                    </div>
                    </div></div></div>);}}
                    return rows;
                    })()
                    }
            </div>
            
            <h3 className='text'>Room types</h3>
            <div className='row p-2 hotelcontainer'>
                    {
                    (()=>{
                       let rows=[];
                       console.log(typedetail);
                       if(typedetail){
                        for(let i=0;i<4;i++){
                        rows.push(
                        <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'onClick={()=>{auth.setsearchcity("");auth.setsearchtype(typedetail[i]._id);navigate("./hotellist")}}><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>Type: {typedetail[i]._id}</p></div>
                    <div className='row hotelcontainer'>
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