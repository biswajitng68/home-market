import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,Routes,BrowserRouter} from 'react-router-dom';


import Home from './components/Home';
import Selprofile from './components/Selprofile';
import Addroom from './components/Addroom';
import Genprofile from './components/Genprofile';
import Hotel from './components/Hotel';
import Hotellist from './components/Hotellist';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Selhome from './components/Selhome';
import Selnav from './components/Selnav';
import Citywisehotel from './components/Citywisehotel';
import Otpverify from './components/Otpverify';
import Forgotpassword from './components/Forgotpassword';
import Changepass from './components/Changepass';
import Authstate from './context/Authstate';
import Typewisehotel from './components/Typewisehotel';
import Detail from './components/Detail';

import Upadateroom from './components/Updateroom';

import About from './components/About';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Authstate>
    <Routes>
        <Route element={<Nav/>}>
          <Route path="/" element={<Home />} />
          <Route path="genprofile" element={<Genprofile />} />
          <Route path=":hotel" element={<Hotel />} />
          <Route path="hotellist" element={<Hotellist />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup/>} />
          <Route path="cityhotels" element={<Citywisehotel/>} />
          <Route path="typehotels" element={<Typewisehotel/>} />
          <Route path="otp" element={<Otpverify/>} />
          <Route path="forgotpass" element={<Forgotpassword/>} />
          <Route path="changepass" element={<Changepass/>} />
          <Route path="about" element={<About/>} />
        </Route>
        <Route element={<Selnav/>}>
        <Route path="selprofile" element={<Selprofile />} />
        <Route path="addroom" element={<Addroom />} />
        <Route path="selhome" element={<Selhome />} />
        <Route path="seller/:detail" element={<Detail />} />
        <Route path="update/:detail" element={<Upadateroom />} />   
        <Route path="about" element={<About/>} />    
        </Route>
        

    </Routes>
    </Authstate>
    </BrowserRouter>
  </React.StrictMode>
);

