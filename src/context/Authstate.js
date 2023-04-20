import AuthContext from "./authContext";
import {useState} from 'react';

const Authstate=(props)=>{

    const [login,setlogin]=useState(localStorage.getItem("authtoken")?true:false);

    return(
        <AuthContext.Provider value={{login,setlogin}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default Authstate;