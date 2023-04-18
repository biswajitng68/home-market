import {Outlet} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
export default function Hotel(){

    return(
        <>
          <section className="home hotelsp">
        <div className="text">Nag House</div>
        <div className='row hotelpage'>
        <div className='col-lg-8 col-md-6 hotelimg'>
        <img src={boximg}></img>
        </div>
        <div className='col-lg-4 col-md-6 hoteldetails'>
            <div className='d-flex justify-content-between'>
        <h3>Nag House</h3>
        <h5>Mess</h5>
        <h5>Rs.5000</h5>
        </div>
        <div className='hoteldetailtext'>
        img elements must have an alt prop, 
        either with meaningful text, 
        or an empty string for decorative image
        seither with meaningful text, 
        or an empty string for decorative images
        </div>
        <div className='hoteldetailtext'>
            <i class='bx bxs-map'></i> 
        Khatnagar, Behar, Bankura, West Bengal, 722205
        </div>
        <div className='hoteldetailtext'>Available Rooms: 3</div>
        <div className='d-grid mx-auto hoteldetailtext'>
            <button type="button" className="btn btn-primary bookbutton">Book</button>
        </div>
        <div className='hoteldetailtext ownerdetail rounded my-2'>
            <h4>Contact details</h4>
            <div className='hoteldetailtext'>Owner: Biswajit Nag</div>
            <div className='hoteldetailtext'>
                <i className='bx bx-phone p-1'></i>
                7872889107
            </div>
            <div className='hoteldetailtext'>
            <i className='bx bxl-gmail p-1'></i>
                 biswajitnag68@gmail.com
            </div>
        </div>
        </div>
       
        </div>
        </section>
        <Outlet/>
        </>
    )
}