import AuthContext from "./authContext";
import {useState} from 'react';

const Authstate=(props)=>{

    const [userlogin,setuserlogin]=useState(localStorage.getItem("userauthtoken")?true:false);
    const [sellerlogin,setsellerlogin]=useState(localStorage.getItem("sellerauthtoken")?true:false);
    const [forgotpass,setforgotpass]=useState(false);
    return(
        <AuthContext.Provider value={{userlogin,setuserlogin,sellerlogin,setsellerlogin,forgotpass,setforgotpass}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default Authstate;