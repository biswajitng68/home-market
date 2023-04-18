import { useState } from 'react';

const myComponentStyle = {  
    backgroundColor: 'white', 
    
    textalign: 'center',
 } 


export default function Addroom() {
    const [counter, setCounter] = useState(1);
    const[image,setImage]=useState("");
    return (
        <>
            <div>

                <div id='addroombg'>
                    <div className="p-5">
                        <div className="room-details my-3">
                            <div className="row"><label className="lb col" >Apartment Name </label>
                                <input className="box col" name="name" />
                            </div>
                            <div className="row">
                                <label className="lb col" >
                                    City
                                </label><input className="box col" name="city" />
                            </div>
                            <div className="row"><label className="lb col" >Address </label>
                                <input className="box col" name="address" />
                            </div>
                            <div className="row">
                                <label className="lb col" >
                                    Contact
                                </label><input className="box col" name="contact" />
                            </div>
                            <div className="row">
                                <label className="lb col" >
                                    Type
                                </label><input className="box col" name="type" />
                            </div>
                            <div className="row">
                                <label className="lb col" >
                                    Description
                                </label><input className="box col" name="room-des" />
                            </div>
                            <div className="row"><label className="lb col" >Price </label>
                                <input className="box col" name="price" />
                            </div>
                            <div className="row"><label className="lb col" >No of Rooms </label>
                            <div className="box ">
                            <i className='bx bx-plus-circle col' style={{ backgroundColor: "#BCBEFA"}} onClick={()=>setCounter(counter + 1)}></i>      
                                <label style={myComponentStyle} className='col'>{counter}</label>
                             <i className='bx bx-minus-circle col' style={{ backgroundColor: "#BCBEFA"}} onClick={()=>{if(counter!==1){setCounter(counter - 1)}}}></i>
                            </div> 
                            </div>
                            <div className="row"><label className="lb col" >Room Images </label>
                             <div className=" box col">
                             <input   name="image " type="file" onChange={(e)=>setImage(e.target.files[0])} />
                             <button className="  upbtn" >Upload</button>
                             </div>
                             <div className="row" id="container">
                             <button className=" btn-sub" >Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}