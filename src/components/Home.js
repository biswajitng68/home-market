import {Outlet} from 'react-router-dom'
import "../App.css"
export default function Home(){

    return(
        <>
        <div id='homebg'>
       <div className='d-flex justify-content-start mx-4 my-4 '>
        <div className='features'>
        <h3>Main feature</h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Ullam et, nulla atque quis perspiciatis eveniet reprehenderit 
         praesentium aliquam, aut hic vel minima dolorum incidunt dolorem 
         cupiditate sint sit accusamus doloribus!
         </div>
         </div>
       <div className='d-flex justify-content-start mx-4 my-4 '>
        <div className='features'>
        <h3>Main feature</h3>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Ullam et, nulla atque quis perspiciatis eveniet reprehenderit 
         praesentium aliquam, aut hic vel minima dolorum incidunt dolorem 
         cupiditate sint sit accusamus doloribus!
         </div>
       </div>
        </div>
        <div className='container-fluid'>
            <h3>Check citywise</h3>
            <div className='row p-2'>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 '><div  className='city p-2'><p className='cityname'>Kolkata</p></div></div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 '><div className='city p-2'><p className='cityname'>Kolkata</p></div></div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 '><div className='city p-2'><p className='cityname'>Kolkata</p></div></div>
            </div>
            <h3>Room types</h3>
            <div className='row p-2'>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 '><div className='city p-2'><p className='cityname'>Kolkata</p></div></div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 '><div className='city p-2'><p className='cityname'>Kolkata</p></div></div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 '><div className='city p-2'><p className='cityname'>Kolkata</p></div></div>
            </div>
        </div>
        <Outlet/>
        </>
    )
}