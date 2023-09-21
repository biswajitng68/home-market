import '../App.css';
import {useState,useEffect,useRef} from 'react'
import {Outlet, Link ,useNavigate} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default function Signup(){
     const base_url="https://room-rover-app-backend-mern.onrender.com";
   //const base_url=" http://localhost:4001";
    const navigate=useNavigate();
    const [alert,setalert]=useState();
    const ref=useRef(null);
    var [alertmessage,setalm]=useState("Here is an alert");
    const [credentials, setCredentials] = useState({user:"user",name:"", mobile:"", email: "", password: ""}) 
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

    //signup api call
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials);
        ref.current.continuousStart()
        //http://localhost:3001 https://room-rover-app-backend-mern.onrender.com
        const response = await fetch(base_url+"/api/register", {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                 "Access-Control-Allow-Origin": "*",

            },
            
            body: JSON.stringify({userSellerType:credentials.user,name:credentials.name, email:credentials.email, mobile:credentials.mobile, password:credentials.password})
        });
        const json = await response.json()
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('emailtoken', json.token); 
            localStorage.setItem("usertype",credentials.user);
            setalm(json.message)
            setalert(true);
            var x=json.message.length
            

        }
        else{
            setalm(json.error)
            setalert(true);
            var x=json.error.length
        }
        setTimeout(() => {
            setalert(false);
            if(json.success)
            navigate("../otp")
        }, 150*x);
        ref.current.complete();
    }

    const onchange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return(
        <>
        <section className="home">
        <LoadingBar color='#f11946' height={4} ref={ref} />
        <div className="text">Sign up</div>
        {alert==true&&
        <div className='d-flex justify-content-end aalert-container'>
            <div className='d-flex alert rounded'><i className='bx bx-bell  mx-1'></i><span className='alerttext'>{alertmessage}</span></div>
        </div>}
        <div><form onSubmit={handleSubmit}>
        <div  style={lst}>
            <div className="wrap mx-4" style={nst}>
                {/* <h2  style={st}>Sign up</h2> */}
            <fieldset>
            <div className="form-floating mb-3">
            <select class="form-select" aria-label="Default select example" onChange={onchange} name='user' value={credentials.user} id='floatinginput0'>
                <option value="user">General User</option>
                <option value="seller">Seller</option>
            </select>
            <label htmlFor="floatingInput0">User Type</label>
            </div>
            <div className="form-floating mb-3">
  <input type='text' className="form-control" id="floatingInput1" onChange={onchange} name='name' value={credentials.name} placeholder="name" required />
  <label htmlFor="floatingInput1">Name</label>
</div>
<div className="form-floating mb-3">
  <input type='number' className="form-control" id="floatingInput2" onChange={onchange}  name='mobile' value={credentials.mobile} placeholder="mobile" required />
  <label htmlFor="floatingInput2">Mobile</label>
</div>
        <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput3" onChange={onchange} placeholder="name@example.com" name='email' value={credentials.email} required/>
  <label htmlFor="floatingInput3">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword4" onChange={onchange} placeholder="Password" name='password' value={credentials.password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
  <label htmlFor="floatingPassword4">Password</label>
</div>
<div className='d-grid gap-2 my-4'>
<button className='btn  btn-primary'>Submit</button>
</div>
<div className='d-grid gap-2 my-4'>
<button className='btn  btn-dark' onClick={()=>{navigate("../login")}}>Log in</button>
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


