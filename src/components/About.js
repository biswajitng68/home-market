import {Outlet,useParams,useNavigate} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
import { useEffect, useState,useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
export default function About(){

    return(
        <>
        
          <section className="home" >
<div className="text">About Us</div>
        
       <div className='about'>
       <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-description">
        <p>
          Welcome to our website! We are a team of dedicated professionals passionate about creating a seamless experience for individuals looking to rent or advertise their properties.
        </p>
        <p>
        <h4>Frontend Developers:</h4>
<ul>
<li>Ramkrishna Sarkar</li>
<li>Biswajit Nag</li>
</ul>
<h4>Backend Developer:</h4>
<ul>Rajib Thakur</ul>

With our combined expertise in frontend and backend development, we have created a user-friendly interface that serves as a platform connecting homeowners offering their properties for rent and individuals seeking rental accommodations. Our website aims to simplify the process and make it convenient for both parties involved.
        </p>
        <ul>
          <li>Booking Rooms:We provide a hassle-free room booking system that enables users to find and reserve the perfect accommodation that suits their needs. Whether you're looking for a single room or multiple rooms, our website offers a diverse range of options to choose from.</li>
          <li>Wishlists: Our wishlist feature allows users to curate a personalized list of their favorite properties. You can add properties to your wishlist as you browse through the available options, making it easier to compare and finalize your choices.</li>
          <li>Room Types and Citywise Search: We understand that everyone has unique preferences when it comes to selecting a rental property. Our website offers a comprehensive search functionality, allowing users to filter their results based on room types and specific cities. This ensures that you find the ideal accommodation that meets your specific requirements.</li>
          <li>Advertise Your Rooms: If you are a homeowner looking to rent out your property, our website provides a simple and effective platform to advertise your rooms. Reach a wider audience and connect with potential tenants by showcasing the features, amenities, and rental details of your property.</li>
        </ul>
        <p>
          If you have any questions or feedback, please don't hesitate to reach out to us.
        </p>
      </div>
    </div>
       </div>
        </section>
        <Outlet/>
        </>
    )
}