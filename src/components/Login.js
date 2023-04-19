import { useEffect,useState } from 'react';
import '../App.css';
import {Outlet, Link ,useNavigate} from "react-router-dom";
export default function Login(){
    const navigate=useNavigate();
    const [alert,setalert]=useState();
    var [alertmessage,setalm]=useState("Here is an alert");
    const [credentials, setCredentials] = useState({user:"user", email: "", password: ""}) 
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
    if(localStorage.getItem("authtoken"))
    navigate("../")
},[])

    //Login api call

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials);
        const response = await fetch("https://room-rover-app-backend-mern.onrender.com/api/login", {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                 "Access-Control-Allow-Origin": "*",

            },
            
            body: JSON.stringify({userSellerType:credentials.user, email:credentials.email, password:credentials.password})
        });
        const json = await response.json()
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('authtoken', json.token); 
            // localStorage.setItem("usertype",credentials.user);
            setalm(json.message)
            setalert(true);
            
            

        }
        else{
            setalm(json.error)
            setalert(true);
        }
        setTimeout(() => {
            setalert(false);
            if(json.success)
            navigate("../home")
        }, 10000);
    }

    const onchange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return(
        <>
        <section className="home">
        <div className="text">Log in</div>
        {alert==true&&
        <div className='d-flex justify-content-end aalert-container'>
            <div className='d-flex alert rounded'><i className='bx bx-bell  mx-1'></i><span className='alerttext'>{alertmessage}</span></div>
        </div>}
        <div><form onSubmit={handleSubmit}>
        <div  style={lst}>
            <div className="wrap mx-4" style={nst}>
                {/* <h2  style={st}>Log in</h2> */}
            <fieldset>
            <div className="form-floating mb-3">
            <select className="form-select" aria-label="Default select example" onChange={onchange} name='user' value={credentials.user} id='floatinginput0'>
                <option value="user">General User</option>
                <option value="seller">Seller</option>
            </select>
            <label htmlFor="floatingInput0">User Type</label>
            </div>
        <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" onChange={onchange} value={credentials.email} placeholder="name@example.com" name='email' />
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" onChange={onchange} value={credentials.password} placeholder="Password" name='password' />
  <label htmlFor="floatingPassword">Password</label>
  <p onClick={()=>{navigate("../forgotpass")}}>Forget Password?</p>
</div>
<div className='d-grid gap-2 my-4'>
<button className='btn  btn-primary'>Submit</button>
</div>
<div className='d-grid gap-2 my-4'>
<button className='btn  btn-dark' onClick={()=>{navigate("../signup")}}>Sign up</button>
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


