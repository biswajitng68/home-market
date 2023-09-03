import { useState, useEffect,useRef } from "react";
import {  useParams} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
// import ToggleSwitch from '../components/ToggleSwitch';

export default function Detail () {
    const params = useParams();
    const [book, Setbook] = useState();
    const ref = useRef(null);
    
    const base_url = "https://room-rover-app-backend-mern.onrender.com";
    useEffect(() => {
        fetchbooking();
    }, []);

    
    const handleChange = (event, param1) => {

        if (window.confirm("Are you sure to checkout the User") === true) {
          
            checkout(param1);
            fetchbooking();
           
        } else {
           
        }

    };

    const checkout = async (value) => {
        //console.log(value);
        const response = await fetch(base_url + "/api//checkOut_User", {
            method: 'PUT',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({ token: String(localStorage.getItem("sellerauthtoken")), booking_id: value })
        });
        const json = await response.json()
        if (json.success) {
        }
        else {
            alert(json.message);
        }
        window.location.reload();
    };




    //-----------------------------------------------
    const fetchbooking = async () => {
        ref.current.continuousStart();
        const response = await fetch(base_url + "/api//seller_booking_Details", {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({ token: String(localStorage.getItem("sellerauthtoken")), building_id: params.detail })
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
        ref.current.complete();
    }
    return (
        <>

            <section className="home">
            <LoadingBar color='#0ff0f9' height={4} ref={ref} />
                
                    <div className="tab-con">
                    <h4 id="heading">Current Booking</h4>

                            <table className="table" id="table1">

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
                                        (() => {
                                            let rows = [];
                                            console.log("try");
                                            console.log(book);
                                            if (book) {
                                                let c = 0;
                                                for (let i = 0; i < book.length; i++) {
                                                    if (book[i].status === "booked") {
                                                       
                                                        rows.push
                                                            (
                                                                <tr>
                                                                    <td>{100 + c}</td>
                                                                    <td>{book[i].user.name}</td>
                                                                    <td>{book[i].user.email}</td>
                                                                    <td>{book[i].user.mobile}</td>
                                                                    <td><button  onClick={event => handleChange(event, book[i]._id)} >booked</button> </td>
                                                                </tr>
                                                            );
                                                        c++;

                                                    }

                                                }
                                            }
                                            return rows;
                                        })()
                                    }
                                   
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
                                            (() => {
                                                let rows = [];

                                                if (book) {
                                                    for (let i = 0; i < book.length; i++) {
                                                        if (book[i].status !== "booked") {
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