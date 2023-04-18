import '../App.css';
import {Outlet, Link ,useNavigate} from "react-router-dom";
export default function Changepass(){
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
        <section className="home">
        <div className="text">Change password</div>
    
        <div><form >
        <div  style={lst}>
            <div className="wrap mx-4" style={nst}>
                {/* <h2  style={st}>Log in</h2> */}
            <fieldset>
            
        <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput" placeholder="text" name='otp' />
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


