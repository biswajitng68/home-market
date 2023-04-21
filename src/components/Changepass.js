import { useState ,useContext,useEffect} from 'react';
import '../App.css';
import {Outlet, Link ,useNavigate} from "react-router-dom";
import AuthContext from '../context/authContext';
export default function Changepass(){
    const navigate=useNavigate();
    const auth =useContext(AuthContext);
    const [alert,setalert]=useState();
    var [alertmessage,setalm]=useState("Here is an alert");
    const [pass,setpass]=useState();
    var lst={
        display:"flex",
        justifyContent:"center",
        position:"relative",
        top:120
    };
    var nst={
        width:400
    };
    var st={
        textAlign:"center",
        padding:4
    };

    useEffect(()=>{
        if(!localStorage.getItem("emailtoken")){
            navigate("../");
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/updatePassword", {
            method: 'PUT',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                 "Access-Control-Allow-Origin": "*",
    
            },
            
            body: JSON.stringify({userSellerType:localStorage.getItem("usertype"), token:localStorage.getItem("emailtoken"), new_Password:pass})
        });
        const json = await response.json()
        if (json.success){
            // Save the auth token and redirect 
            setalm(json.message);
            localStorage.clear();
    
        }
        else{
            setalm(json.error);
        }
        setalert(true);
        setTimeout(() => {
            setalert(false);
            if(json.success){
                navigate("../login");
            }
            
        }, 10000);
    }
    

    return(
        <>
        <section className="home">
        <div className="text">Change password</div>
        {alert==true&&
        <div className='d-flex justify-content-end alert-container'>
            <div className='d-flex alert rounded'><i className='bx bx-bell  mx-1'></i><span className='alerttext'>{alertmessage}</span></div>
        </div>}
        <div><form onSubmit={handleSubmit}>
        <div  style={lst}>
            <div className="wrap mx-4" style={nst}>
                {/* <h2  style={st}>Log in</h2> */}
            <fieldset>
            
        <div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingInput" placeholder="text" value={pass} onChange={(e)=>{setpass(e.target.value)}} name='otp' />
  <label htmlFor="floatingInput">New Password</label>
</div>
<div className='d-grid gap-2 my-4'>
<button className='btn  btn-primary'>Submit</button>
</div>
</fieldset>
</div>
</div>
<div></div>
</form></div>
</section>
<Outlet/>
        </>
    )
}


