import '../App.css';
import {Outlet, Link ,useNavigate} from "react-router-dom";
export default function Login(){
    const navigate=useNavigate();
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
    return(
        <>
        <div><form >
        <div  style={lst}>
            <div className="wrap" style={nst}>
                <h2  style={st}>Log in</h2>
            <fieldset>
            
        <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' />
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' />
  <label htmlFor="floatingPassword">Password</label>
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
<Outlet/>
        </>
    )
}


