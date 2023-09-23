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
        
<div class="container">
        <h1 class="text-center">Welcome to Our Property Rental Website</h1>
        <div class="row">
            <div class="col-md-4">
                <h3>Meet the Team</h3>
                <ul class="team-members">
                    <li class="team-member">Ramkrishna Sarkar</li>
                    <li class="team-member">Biswajit Nag</li>
                    <li class="team-member">Rajib Thakur</li>
                </ul>
            </div>
            <div class="col-md-8">
                <h3>Features</h3>
                <h4>Booking Rooms</h4>
                <p>We provide a hassle-free room booking system that enables users to find and reserve the perfect accommodation that suits their needs. Whether you're looking for a single room or multiple rooms, our website offers a diverse range of options to choose from.</p>
                <h4>Wishlists</h4>
                <p>Our wishlist feature allows users to curate a personalized list of their favorite properties. You can add properties to your wishlist as you browse through the available options, making it easier to compare and finalize your choices.</p>
                <h4>Room Types and Citywise Search</h4>
                <p>We understand that everyone has unique preferences when it comes to selecting a rental property. Our website offers a comprehensive search functionality, allowing users to filter their results based on room types and specific cities. This ensures that you find the ideal accommodation that meets your specific requirements.</p>
                <h4>Advertise Your Rooms</h4>
                <p>If you are a homeowner looking to rent out your property, our website provides a simple and effective platform to advertise your rooms. Reach a wider audience and connect with potential tenants by showcasing the features, amenities, and rental details of your property.</p>
            </div>
        </div>
        <h3>Contact Us</h3>
        <p>If you have any questions or feedback, please don't hesitate to reach out to us.</p>
        <ul>
            <li><strong>Email:</strong> <a href="mailto:contact@ourpropertyrentalwebsite.com">contact@ourpropertyrentalwebsite.com</a></li>
            <li><strong>Phone:</strong> +1-555-123-4567</li>
        </ul>
    </div>
        </section>
        <Outlet/>
        </>
    )
}