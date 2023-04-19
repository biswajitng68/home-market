import '../App.css';
import {useEffect, useState} from 'react'
import {Outlet, Link ,useNavigate} from "react-router-dom";
export default function Otpverify(){
    const navigate=useNavigate();
    const [alert,setalert]=useState();
    var [alertmessage,setalm]=useState("Here is an alert");
    const [otpval,setotpval]=useState("");
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
    const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/verifyOTP", {
        method: 'POST',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
             "Access-Control-Allow-Origin": "*",

        },
        
        body: JSON.stringify({userSellerType:localStorage.getItem("usertype"), token:localStorage.getItem("emailtoken"), otp:otpval})
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
        if(json.success)
        navigate("../login")
    }, 10000);
}

    return(
        <>
        <section className="home">
        <div className="text">Verify OTP</div>
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
  <input type="number" className="form-control" id="floatingInput" placeholder="number" onChange={(e)=>{setotpval(e.target.value)}} value={otpval} name='otp' />
  <label htmlFor="floatingInput">OTP</label>
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


