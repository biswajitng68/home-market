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
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

