import {Outlet} from 'react-router-dom'
import "../App.css"
export default function Citywisehotel(){

    return(
        <>
            <section className="home">
        <div className="text">Cities</div>
        <div className='container-fluid'>
            <div className='row p-2'>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-2'><div  className='city p-2'><div className='citydetails'>
                    <p className='cityname'>City: Kolkata</p>
                    <p className='cityname'>Rooms: 5000</p>
                    <p className='cityname'>Min-cost: 1000Rs</p>
                    </div></div></div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-2'><div className='city p-2'><div className='citydetails'>
                    <p className='cityname'>City: Kolkata</p>
                    <p className='cityname'>Rooms: 5000</p>
                    <p className='cityname'>Min-cost: 1000Rs</p>
                    </div></div></div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-2'><div className='city p-2'><div className='citydetails'>
                    <p className='cityname'>City: Kolkata</p>
                    <p className='cityname'>Rooms: 5000</p>
                    <p className='cityname'>Min-cost: 1000Rs</p>
                    </div></div></div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-2'><div className='city p-2'><div className='citydetails'>
                    <p className='cityname'>City: Kolkata</p>
                    <p className='cityname'>Rooms: 5000</p>
                    <p className='cityname'>Min-cost: 1000Rs</p>
                    </div></div></div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-2'><div className='city p-2'><div className='citydetails'>
                    <p className='cityname'>City: Kolkata</p>
                    <p className='cityname'>Rooms: 5000</p>
                    <p className='cityname'>Min-cost: 1000Rs</p>
                    </div></div></div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-2'><div className='city p-2'><div className='citydetails'>
                    <p className='cityname'>City: Kolkata</p>
                    <p className='cityname'>Rooms: 5000</p>
                    <p className='cityname'>Min-cost: 1000Rs</p>
                    </div></div></div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-2'><div className='city p-2'><div className='citydetails'>
                    <p className='cityname'>City: Kolkata</p>
                    <p className='cityname'>Rooms: 5000</p>
                    <p className='cityname'>Min-cost: 1000Rs</p>
                    </div></div></div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-2'><div className='city p-2'><div className='citydetails'>
                    <p className='cityname'>City: Kolkata</p>
                    <p className='cityname'>Rooms: 5000</p>
                    <p className='cityname'>Min-cost: 1000Rs</p>
                    </div></div></div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 p-2'><div className='city p-2'><div className='citydetails'>
                    <p className='cityname'>City: Kolkata</p>
                    <p className='cityname'>Rooms: 5000</p>
                    <p className='cityname'>Min-cost: 1000Rs</p>
                    </div></div></div>
            </div>
        </div>
        </section>
        <Outlet/>
        </>
    )
}