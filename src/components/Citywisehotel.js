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
    const cityimage=["https://static.toiimg.com/thumb/imgsize-123456,msid-75752152,width-600,resizemode-4/75752152.jpg","https://qph.cf2.quoracdn.net/main-qimg-c3b0ec8cf692c84ac4e7f4299b269671-lq","https://www.financialexpress.com/wp-content/uploads/2020/03/14-6.jpg","https://www.holidify.com/images/cmsuploads/compressed/Jaipur_20200503234720.jpg","https://www.financialexpress.com/wp-content/uploads/2020/05/Lockdown-Representational-4.jpg?w=660","https://qph.cf2.quoracdn.net/main-qimg-b169c4b76f0710c72384e3ae9226bcaa-lq","https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/05/27/Photos/urbanisation%202-k4t--621x414@LiveMint.jpg","https://www.thoughtco.com/thmb/eBSwH-tj1KRcdosV1k8O3Vi1k_U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mumbai-skyline-from-malabar-hill-mumbai-maharashtra-india-asia-547416209-58b9cb8b5f9b58af5ca70b8e.jpg"]
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
                                            <div className='col-lg-3 col-md-4 col-sm-6 col-12 p-2' onClick={()=>{auth.setsearchtype("");auth.setsearchcity(citydetail[i]._id);navigate("../hotellist")}}><div className='city p-2'>
                                                <img src={cityimage[i%8]}></img>
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