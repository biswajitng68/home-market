import {Outlet} from 'react-router-dom'
import "../App.css"
import boximg from '../homebg.png'
export default function Home(){

    return(
        <>
            <section className="home">
        <div className="text">Home</div>
    
        <div id='homebg'>
            <div>
                Welcome to <br></br> RoomRover
            </div>
        </div>
        <div className='container-fluid'>
            <h3 className='text'>Check citywise</h3>
            <div className='row p-2'>
                <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                        <div className='citynamebox'><p className='citynamesp col'>City: Kolkata</p></div>
                    
                    <div className='row'>
                    <p className='cityname col'>Rooms: 5000</p>
                    <p className='cityname col'>Min-cost: 1000Rs</p>
                    </div>
                    </div></div></div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>City: Kolkata</p></div>
                    <div className='row'>
                    <p className='cityname col'>Rooms: 5000</p>
                    <p className='cityname col'>Min-cost: 1000Rs</p>
                    </div>
                    </div></div></div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>City: Kolkata</p></div>
                    <div className='row'>
                    <p className='cityname col'>Rooms: 5000</p>
                    <p className='cityname col'>Min-cost: 1000Rs</p>
                    </div>
                    </div></div></div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>City: Kolkata</p></div>
                    <div className='row'>
                    <p className='cityname col'>Rooms: 5000</p>
                    <p className='cityname col'>Min-cost: 1000Rs</p>
                    </div>
                    </div></div></div>
            </div>
            
            <h3 className='text'>Room types</h3>
            <div className='row p-2'>
            <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>City: Kolkata</p></div>
                    <div className='row'>
                    <p className='cityname col'>Rooms: 5000</p>
                    <p className='cityname col'>Min-cost: 1000Rs</p>
                    </div>
                    </div></div></div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>City: Kolkata</p></div>
                    <div className='row'>
                    <p className='cityname col'>Rooms: 5000</p>
                    <p className='cityname col'>Min-cost: 1000Rs</p>
                    </div>
                    </div></div></div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>City: Kolkata</p></div>
                    <div className='row'>
                    <p className='cityname col'>Rooms: 5000</p>
                    <p className='cityname col'>Min-cost: 1000Rs</p>
                    </div>
                    </div></div></div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 p-2'><div  className='city p-2'>
                <img src={boximg}></img>
                    <div className='citydetails'>
                    <div className='citynamebox'><p className='citynamesp col'>City: Kolkata</p></div>
                    <div className='row'>
                    <p className='cityname col'>Rooms: 5000</p>
                    <p className='cityname col'>Min-cost: 1000Rs</p>
                    </div>
                    </div></div></div>
            </div>
        </div>
        </section>
        <Outlet/>
        </>
    )
}