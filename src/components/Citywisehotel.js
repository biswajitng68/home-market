import { Outlet ,useNavigate} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
import { useContext, useEffect, useState,useRef } from 'react'
import AuthContext from '../context/authContext'
import LoadingBar from 'react-top-loading-bar'
export default function Citywisehotel() {
      const base_url="https://room-rover-app-backend-mern.onrender.com";
   //const base_url=" http://localhost:4001";
    const [citydetail, setcitydetail] = useState();
    const auth=useContext(AuthContext);
    const navigate=useNavigate();
    const ref=useRef(null);
    useEffect(() => {
        handleSubmit();
    }, [])

    const handleSubmit = async () => {
        ref.current.continuousStart()
        const response = await fetch(base_url+"/api/allCities_roomCount_minCost", {
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
        if (json.success) {
            console.log(json.data);
            setcitydetail(json.data);
        }
        else {
            alert(json.message);
        }
        ref.current.complete()
    }
    return (
        <>
            <section className="home">
            <LoadingBar color='#f11946' height={4} ref={ref} />
                <div className="text">Cities</div>
                <div className='container-fluid'>
                    <div className='row hotelcontainer'>
                        {
                            (() => {
                                let rows = [];
                                console.log(citydetail);
                                if (citydetail) {
                                    for (let i = 0; i < citydetail.length; i++) {
                                        rows.push(
                                            <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2' onClick={()=>{auth.setsearchtype("");auth.setsearchcity(citydetail[i]._id);navigate("../hotellist")}}><div className='city p-2'>
                                                <img src={boximg}></img>
                                                <div className='citydetails'>
                                                    <div className='citynamebox'><p className='citynamesp col'>City: {citydetail[i]._id}</p></div>
                                                    <div className='row'>
                                                        <p className='cityname col'>Rooms: {citydetail[i].roomCount}</p>
                                                        <p className='cityname col'>Min-cost: {citydetail[i].minCost}Rs</p>
                                                    </div>
                                                </div></div></div>);
                                    }
                                }
                                return rows;
                            })()
                        }
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    )
}