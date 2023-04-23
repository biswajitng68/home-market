import AuthContext from "./authContext";
import {useState} from 'react';

const Authstate=(props)=>{

    const [userlogin,setuserlogin]=useState(localStorage.getItem("userauthtoken")?true:false);
    const [sellerlogin,setsellerlogin]=useState(localStorage.getItem("sellerauthtoken")?true:false);
    const [forgotpass,setforgotpass]=useState(false);
    const [searchcity,setsearchcity]=useState("");
    const [searchtype,setsearchtype]=useState("");
    return(
        <AuthContext.Provider value={{searchtype,setsearchtype,searchcity,setsearchcity,userlogin,setuserlogin,sellerlogin,setsellerlogin,forgotpass,setforgotpass}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default Authstate;