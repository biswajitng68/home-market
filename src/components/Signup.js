import '../App.css';
import {Outlet, Link ,useNavigate} from "react-router-dom";
export default function Signup(){
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
                <h2  style={st}>Sign up</h2>
            <fieldset>
            <div className="form-floating mb-3">
  <input type='text' className="form-control" id="floatingInput"  name='name'placeholder="name" required />
  <label htmlFor="floatingInput">Name</label>
</div>
<div className="form-floating mb-3">
  <input type='number' className="form-control" id="floatingInput"  name='mobile'placeholder="mobile" required />
  <label htmlFor="floatingInput">Mobile</label>
</div>
        <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' required/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password'pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
  <label htmlFor="floatingPassword">Password</label>
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
<Outlet/>
        </>
    )
}


