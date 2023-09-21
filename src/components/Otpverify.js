import '../App.css';
import {useEffect, useState,useContext,useRef} from 'react'
import {Outlet, Link ,useNavigate} from "react-router-dom";
import AuthContext from '../context/authContext';
import LoadingBar from 'react-top-loading-bar'
export default function Otpverify(){
     const base_url="https://room-rover-app-backend-mern.onrender.com";
   //const base_url=" http://localhost:4001";
    const navigate=useNavigate();
    const ref=useRef(null);
    const auth =useContext(AuthContext);
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
    ref.current.continuousStart()
    const response = await fetch(base_url+"/api/verifyOTP", {
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
        if(!auth.forgotpass)
        localStorage.clear();
        var x=json.message.length
    }
    else{
        setalm(json.error);
        var x=json.error.length
    }
    setalert(true);
    setTimeout(() => {
        setalert(false);
        if(json.success){
            if(auth.forgotpass){
            navigate("../changepass");
            auth.setforgotpass(false);
            }
            else
            navigate("../login");
        }
        
    }, 100*x);
    ref.current.complete()
}

    return(
        <>
        <section className="home">
        <LoadingBar color='#f11946' height={4} ref={ref} />
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


