import {useState,useEffect} from 'react'

const myComponentStyle = {  
    backgroundColor: 'white', 
    
    textalign: 'center',
 } 


export default function Addroom() {

     const base_url="https://room-rover-app-backend-mern.onrender.com";
   //const base_url=" http://localhost:4001";


//    const base_url=" http://localhost:4001";

    console.log(localStorage.getItem("sellerauthtoken"));
    const [alert,setalert]=useState();
    var [alertmessage,setalm]=useState("Here is an alert");
    const [counter, setCounter] = useState(1);
    const[image,setImage]=useState("");
   // add room api
   const [roominfo, setRoominfo] = useState({name:"",city:" ",address:" ", mobile:"",type:" ",roomdes:" ",price:" ",roomCount:1 }) 
  //--------------------------------------------------------   
  function convertToBase64(e){
    console.log(e);
     var reader=new FileReader();
     reader.readAsDataURL(e.target.files[0]);
     reader.onload=()=>{
        console.log(reader.result);
        setImage(reader.result);
        reader.onerror=error=>{
            console.log("Error : ",error);
        }
     }
  };
   
 

 

   //-------------------------------------
   const handleSubmit = async (e) => {
   
        e.preventDefault();
      
        console.log(roominfo);
        console.log(counter);
        //http://localhost:4000/api/addBuilding  https://room-rover-app-backend-mern.onrender.com/api/addBuilding
         const response = await fetch( base_url+"/api/addBuilding", {
            
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                 "Access-Control-Allow-Origin": "*",

            },
            
            body: JSON.stringify({token:localStorage.getItem("sellerauthtoken"),name:roominfo.name, city:roominfo.city,address:roominfo.address, mobile:roominfo.mobile, buildingType:roominfo.type,description:roominfo.roomdes,price:Number(roominfo.price),roomCount:Number(counter),base64:image})
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

        setTimeout(() => {
            setalert(false);
        }, 10000);
         
    }
    const onchange = (e)=>{
        setRoominfo({...roominfo, [e.target.name]: e.target.value})
    }
   

    return (
        <>
        <section className="home">
        <div className="text">Add room</div>
        {alert==true&&
        <div className='d-flex justify-content-end aalert-container'>
            <div className='d-flex alert rounded'><i className='bx bx-bell  mx-1'></i><span className='alerttext'>{alertmessage}</span></div>
        </div>}
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
                             <input   type="file" accept='.jpeg, .png, .jpg'   onChange={convertToBase64} />
                             
                             
                                                      <img width={100} hieght={100} src={image}/>
                                                    
                             </div>
                             <div className="row" id="container">
                             <button className=" btn-sub" onClick={handleSubmit} >Submit</button>
                                </div>
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
