import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Selprofile from './components/Selprofile';
import Genprofile from './components/Genprofile';
import Hotel from './components/Hotel';
import Hotellist from './components/Hotellist';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Citywisehotel from './components/Citywisehotel';
import Otpverify from './components/Otpverify';
import Forgotpassword from './components/Forgotpassword';
import Changepass from './components/Changepass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
    <Routes>
        <Route element={<Nav/>}>
          
        <Route path="/" element={<Home />} />
        <Route path="selprofile" element={<Selprofile />} />
        <Route path="genprofile" element={<Genprofile />} />
        <Route path="hotel" element={<Hotel />} />
        <Route path="hotellist" element={<Hotellist />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup/>} />
        <Route path="cityhotels" element={<Citywisehotel/>} />
        <Route path="otp" element={<Otpverify/>} />
        <Route path="forgotpass" element={<Forgotpassword/>} />
        <Route path="changepass" element={<Changepass/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

