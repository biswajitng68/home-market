import { useState, useEffect } from "react";
import {Outlet,useParams,useNavigate} from 'react-router-dom';
import ToggleSwitch from '../components/ToggleSwitch';

export default function (){
    const params =useParams();
    const[book,Setbook]=useState();
    const [items, setItems] = useState([]);
    //console.log(params.detail);
    const base_url = "https://room-rover-app-backend-mern.onrender.com";
    useEffect(() => {
        fetchbooking();
    }, [book]);
    
    const [checked, setChecked] = useState([]);
    const handleChange = (event, param1) => {
 
        if ( window.confirm("Press a button!") == true)
        {
          //setChecked(true);
         // checkout(param1);
            //fetchbooking();
            setChecked(false);
        } else {
          setChecked(true);
        } 
        
      };
     
    const checkout =async(value) => {
     //console.log(value);
        const response = await fetch(base_url + "/api//checkOut_User", {
        method: 'PUT',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },

        body: JSON.stringify({ token: String(localStorage.getItem("sellerauthtoken")), booking_id:value })
    });
    const json = await response.json()
    if (json.success) {
          }
    else {
        alert(json.message);
    }
      };

     

     
     //-----------------------------------------------
   const fetchbooking = async () => {

        const response = await fetch(base_url + "/api//seller_booking_Details", {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({ token: String(localStorage.getItem("sellerauthtoken")),building_id:params.detail })
        });
        const json = await response.json()
        if (json.success) {
           console.log(json.data);
            Setbook(json.data);
            //console.log(book);
        }
        else {
            alert(json.message);
        }
    }
    return(
        <>
        
        <section className="home">
        
     <div className="tab-con">
        <h4 id="heading">Current Booking</h4>

     <table className="table" >
                                                    <thead>
                                                        <tr>
                                                            <th>Room No</th>
                                                            <th>Customer Name</th>
                                                            <th>Email</th>
                                                            <th>Contact No</th>
                                                            <th>Room status</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                       {
                                                        (()=>{
                                                            let rows = [];
                                                            console.log("try");
                                                            console.log(book);
                                                            if(book)
                                                            {
                                                                let c=0;
                                                                for (let i = 0; i < book.length; i++)
                                                                {
                                                                    if(book[i].status=="booked")
                                                                    {
                                                                        checked.push(true);
                                                                        items.push({ id: c, isOn: true });
                                                                        rows.push
                                                                        (
                                                                            <tr>
                                                                            <td>{100+c}</td>
                                                                            <td>{book[i].user.name}</td>
                                                                            <td>{book[i].user.email}</td> 
                                                                            <td>{book[i].user.mobile}</td>                                                        
                                                                            <td>booked <input type="checkbox" checked={checked[c]} onChange={event => handleChange(event,book[i]._id)}/></td>            
                                                                            </tr>
                                                                        );
                                                                        c++;

                                                                    }
                                                                  
                                                                }
                                                            }
                                                            return rows;
                                                        })()
                                                       } 
                                                      {
                                                       (()=>{checked.push(true);checked.push(true);}) 
                                                      }
                                                      <tr>
                                                                            <td>100</td>
                                                                            <td>Arko</td>
                                                                            <td>ram@13mgmail.com</td> 
                                                                            <td>9991234567</td>                                                        
                                                                            <td>booked <input type="checkbox" checked={checked[0]} onChange={event => handleChange(event,1000011)}/></td>            
                                                                            </tr> 
                                                                            <tr>
                                                                            <td>100</td>
                                                                            <td>Rajo</td>
                                                                            <td>sam@13mgmail.com</td> 
                                                                            <td>9991234567</td>                                                        
                                                                            <td>booked <input type="checkbox" checked={checked[1]} onChange={event => handleChange(event,1000011)}/></td>            
                                                                            </tr> 
                                                    </tbody>
                                                </table>
                                            
     </div>
       
                                              
       <div className="tab-con">
       <h4 id="heading">Previous Booking</h4>
       <table className="table"  >
       <thead>
                                                        <tr>
                                                    
                                                            <th>Customer Name</th>
                                                            <th>Email</th>
                                                            <th>Contact No</th>
                                                            <th>Room status</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                       {
                                                        (()=>{
                                                            let rows = [];
                                                    
                                                            if(book)
                                                            {
                                                                for (let i = 0; i < book.length; i++)
                                                                {
                                                                    if(book[i].status!="booked")
                                                                    {
                                                                        rows.push
                                                                        (
                                                                            <tr>
                                                                          
                                                                            <td>{book[i].user.name}</td>
                                                                            <td>{book[i].user.email}</td> 
                                                                            <td>{book[i].user.mobile}</td>                                                        
                                                                            <td>Checked Out</td>            
                                                                            </tr>
                                                                        );

                                                                    }
                                                                  
                                                                }
                                                            }
                                                            return rows;
                                                        })()
                                                       } 
                                                      
                                                        
                                                    </tbody>
                                                </table>
        
     
       </div>
                                               
       
    
        </section>
        </>
    )
}