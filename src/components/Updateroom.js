import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from "react-router-dom";

const myComponentStyle = {
    backgroundColor: 'white',

    textalign: 'center',
}

export default function Updateroom() {
    const params = useParams();
    const navigate = useNavigate();
    const base_url = "https://room-rover-app-backend-mern.onrender.com";


    console.log(localStorage.getItem("sellerauthtoken"));
    const [alert, setalert] = useState();
    var [alertmessage, setalm] = useState("Here is an alert");
    const [counter, setCounter] = useState(1);
    const [image, setImage] = useState("");
    // add room api
    const [roominfo, setRoominfo] = useState([{ name: "", city: "", address: "", mobile: "", buildingType: "", description: "", price: "", roomCount: 1, image: "" }]);
  
    //--------------------------------------------------------  
   
    function convertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setRoominfo([{ ...roominfo[0], [e.target.name]: reader.result }]);
            reader.onerror = error => {
                console.log("Error : ", error);
            }
        }
    };

    useEffect(() => {
        fetchroom();
    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (window.confirm("Are you want to update the Building Info") == true) {
            const response = await fetch(base_url + "/api/updateBuilding", {

                method: 'POST',
                crossDomain: true,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
    
                },
    
                body: JSON.stringify({ token: localStorage.getItem("sellerauthtoken"), building_id: params.detail, name: roominfo[0].name, city: roominfo[0].city, address: roominfo[0].address, mobile: roominfo[0].mobile, buildingType: roominfo[0].buildingType, description: roominfo[0].description, price: Number(roominfo[0].price), roomCount: Number(counter), base64: roominfo[0].image })
            });
            const json = await response.json()
            if (json.success) {
                // Save the auth token and redirect
                console.log(json.message);
                setalm(json.message)
                setalert(true);
    
    
    
    
            }
            else {
                console.log(json.error);
                setalm(json.error)
                setalert(true);
            }
    
            setTimeout(() => {
                setalert(false);
                if (json.success) {
                    navigate("../selhome");
                }
    
            }, 3000);
        }
        
        //http://localhost:4000/api/addBuilding  https://room-rover-app-backend-mern.onrender.com/api/addBuilding
     

    }

    //-------------------------------------
    const fetchroom = async () => {


        //http://localhost:4000/api/addBuilding  https://room-rover-app-backend-mern.onrender.com/api/addBuilding
        const response = await fetch(base_url + "/api//building_Details", {

            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",

            },

            body: JSON.stringify({ building_id: params.detail })
        });
        const json = await response.json()
        if (json.success) {
            // Save the auth token and redirect
            //console.log(json.data);
            //console.log(json.message);
            setalm(json.message)
            //setalert(true);

            // setval(json.data);
            setRoominfo(json.data);
            console.log(json.data);

        }
        else {
            console.log(json.error);
            setalm(json.error)
            setalert(true);
        }



    }
    const onchange = (e) => {
        setRoominfo([{ ...roominfo[0], [e.target.name]: e.target.value }])
        console.log(roominfo);
    }

    console.log(roominfo.length);
    for (let i = 0; i < roominfo.length; i++)
        console.log(roominfo[i]);
    return (
        <>
            <section className="home">
                <div className="text">Add room</div>

                {alert === true &&
                    <div className='d-flex justify-content-end aalert-container'>
                        <div className='d-flex alert rounded'><i className='bx bx-bell  mx-1'></i><span className='alerttext'>{alertmessage}</span></div>
                    </div>}
                <div>
                    <div id='addroombg'>
                        <div className="p-5">
                            <div className="room-details my-3 " >
                                <div className=" addhomecont">
                                    <div className='left' style={{height:"100%"}}>
                                        
                                       <label  htmlFor='update-upload' style={{height:"100%",width:'100%'}} ><img className="hotel-image"  src={roominfo[0].image} alt='home' /> </label>
                                           
                                                <input type="file" accept='.jpeg, .png, .jpg' name="image" id='update-upload' style={{display:"none"}} onChange={convertToBase64} />

                                    </div>
                                    <div className='right'>
                                        <div className="row" >
                                            <label className="lb col" >Apartment Name </label>
                                            <input className="box col"  onChange={onchange} name='name' value={roominfo[0].name} placeholder="name" required />
                                        
                                        </div>
                                           
                                        <div className="row">
                                            <label className="lb col" > City</label>
                                            <input className="box col" onChange={onchange} name='city' value={roominfo[0].city} placeholder="city" required />
                                        </div>
                                        <div className="row">
                                            <label className="lb col" >Address </label>
                                            <input className="box col" onChange={onchange} name="address" value={roominfo[0].address} placeholder="address" required />
                                        </div>
                                        <div className="row">
                                            <label className="lb col" >
                                                Contact
                                            </label><input className="box col" onChange={onchange} name='mobile' value={roominfo[0].mobile} placeholder="mobile" required />
                                        </div>
                                        <div className="row">
                                            <label className="lb col" >
                                                Type
                                            </label><input className="box col" onChange={onchange} name='buildingType' value={roominfo[0].buildingType} placeholder="type" required />
                                        </div>
                                        <div className="row">
                                            <label className="lb col" >
                                                Description
                                            </label><input className="box col" onChange={onchange} name="description" value={roominfo[0].description} placeholder="roomdes" required />
                                        </div>
                                        <div className="row">
                                            <label className="lb col" >Price </label>
                                            <input className="box col" onChange={onchange} name="price" value={roominfo[0].price} placeholder="price" required />
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="row" id="container">
                                                <button className=" btn-sub" onClick={handleSubmit}  >Update</button>
                                            </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

//------------------
