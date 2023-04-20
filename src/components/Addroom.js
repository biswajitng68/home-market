import {useState,useEffect} from 'react'

const myComponentStyle = {  
    backgroundColor: 'white', 
    
    textalign: 'center',
 } 


export default function Addroom() {
    const [alert,setalert]=useState();
    var [alertmessage,setalm]=useState("Here is an alert");
    const [counter, setCounter] = useState(1);
    const[image,setImage]=useState("");
   // add room api
   const [roominfo, setRoominfo] = useState({name:"",city:" ",address:" ", mobile:"",type:" ",roomdes:" ",price:" ",roomCount:1 }) 
     const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(roominfo);
        console.log(counter);
        //http://localhost:4000/api/addBuilding  https://room-rover-app-backend-mern.onrender.com/api/addBuilding
         const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/addBuilding", {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                 "Access-Control-Allow-Origin": "*",

            },
            
            body: JSON.stringify({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvdG9uMTIxNzVAZ21haWwuY29tIiwiaWF0IjoxNjgxOTgzNzg4fQ.toNzhN9OUFygik88R2LdVVRcmIwuU_ucs4-2WudZxu0",name:roominfo.name, city:roominfo.city,address:roominfo.address, mobile:roominfo.mobile, buildingType:roominfo.type,description:roominfo.roomdes,price:Number(roominfo.price),roomCount:Number(counter)})
        });
        const json = await response.json()
        if (json.success){
            // Save the auth token and redirect
           console.log(json.message);
            setalm(json.message)
           setalert(true);
            
            

        }
        else{
            console.log(json.error);
           setalm(json.error)
           setalert(true);
        }
         
    }
    const onchange = (e)=>{
        setRoominfo({...roominfo, [e.target.name]: e.target.value})
    }
   

    return (
        <>
            <div>

                <div id='addroombg'>
                    <div className="p-5">
                        <div className="room-details my-3">
                            <div className="row"><label className="lb col" >Apartment Name </label>
                                <input className="box col"  onChange={onchange} name='name' value={roominfo.name} placeholder="name" required  />
                            </div>
                            <div className="row">
                                <label className="lb col" >
                                    City
                                </label><input className="box col" onChange={onchange} name='city' value={roominfo.city} placeholder="city" required  />
                            </div>
                            <div className="row"><label className="lb col" >Address </label>
                                <input className="box col"  onChange={onchange} name="address" value={roominfo.address} placeholder="address" required />
                            </div>
                            <div className="row">
                                <label className="lb col" >
                                    Contact
                                </label><input className="box col" onChange={onchange}  name='mobile' value={roominfo.mobile} placeholder="mobile" required  />
                            </div>
                            <div className="row">
                                <label className="lb col" >
                                    Type
                                </label><input className="box col" onChange={onchange}  name='type' value={roominfo.type} placeholder="type" required />
                            </div>
                            <div className="row">
                                <label className="lb col" >
                                    Description
                                </label><input className="box col"   onChange={onchange}  name="roomdes" value={roominfo.roomdes} placeholder="roomdes" required/>
                            </div>
                            <div className="row"><label className="lb col" >Price </label>
                                <input className="box col"  onChange={onchange}  name="price" value={roominfo.price} placeholder="price" required  />
                            </div>
                            <div className="row"><label className="lb col" >No of Rooms </label>
                            <div className="box ">
                            <i className='bx bx-plus-circle col' style={{ backgroundColor: "#BCBEFA"}} onClick={()=>setCounter(counter + 1)}></i>      
                                <label style={myComponentStyle} className='col' >{counter}</label>
                             <i className='bx bx-minus-circle col' style={{ backgroundColor: "#BCBEFA"}} onClick={()=>{if(counter!==1){setCounter(counter - 1)}}}></i>
                            </div> 
                            </div>
                            <div className="row"><label className="lb col" >Room Images </label>
                             <div className=" box col">
                             <input   name="image " type="file" onChange={(e)=>setImage(e.target.files[0])} />
                             <button className="  upbtn" >Upload</button>
                             </div>
                             <div className="row" id="container">
                             <button className=" btn-sub" onClick={handleSubmit} >Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}