import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Selhome() {
    //const base_url = "https://room-rover-app-backend-mern.onrender.com";
     const base_url=" http://localhost:4001";
    const navigate = useNavigate();
    useEffect(() => {

        if (!localStorage.getItem("sellerauthtoken"))
            navigate("../login")


    }, [])

    async function fetchcity() {

        const response = await fetch(base_url + "/api/seller_Cities_List", {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({ token: String(localStorage.getItem("sellerauthtoken")) })
        });
        const json = await response.json()
        if (json.success) {
            console.log(json.data);
            setCity(json.data);
        }
        else {
            alert(json.message);
        }
    }

    async function fetchtype() {

        const response = await fetch(base_url + "/api/seller_BuildingTypes_List", {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({ token: String(localStorage.getItem("sellerauthtoken")) })
        });
        const json = await response.json()
        if (json.success) {
            console.log(json.data);
            setTyp(json.data);
        }
        else {
            alert(json.message);
        }
    }

    const [sel, setSel] = useState("");
    const [sel1, setSel1] = useState("");
    const [des, setDes] = useState();
    const [cit, setCity] = useState();
    const [typ, setTyp] = useState();
    useEffect(() => {
        fetchcity();
        fetchtype();
    }, [])

    useEffect(() => {
        handleSubmit();
    }, [sel1, sel])

    const handleSubmit = async () => {

        // http://localhost:6000  https://room-rover-app-backend-mern.onrender.com/api/seller_buildingDetails_type_City
        const response = await fetch(base_url + "/api/seller_buildingDetails_type_City", {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",

            },

            body: JSON.stringify({ token: String(localStorage.getItem("sellerauthtoken")), city: sel, buildingType: sel1 })
        });
        const json = await response.json()
        if (json.success) {

            setDes(json.data);
        }
        else {
            alert(json.message);
        }
    }



    return (
        <>
            <section className="home">
                <div className="row">
                    <div className="dropdown col">
                        <div className="form-floating mb-3 dropdown col">

                            <select class="form-select" value={sel} defaultValue="Choose here" onChange={(e) => { console.log("prev sel : " + sel); setSel(e.target.value) }}  >
                                <option selected disabled value="">Choose here</option>
                                {
                                    (() => {
                                        let rows = [];

                                        if (cit) {
                                            for (let i = 0; i < cit.length; i++) {
                                                console.log(cit[i]);
                                                rows.push(<option value={cit[i]}>{cit[i]}</option>);
                                            }
                                        }
                                        return rows;
                                    })()
                                }

                            </select>
                            <label htmlFor="floatingInput0">CITY</label>
                        </div>
                    </div>
                    <div className="dropdown col">
                        <div className="form-floating mb-3 dropdown col">
                            <select class="form-select" value={sel1} onChange={(e) => { console.log("prev sel : " + sel1); setSel1(e.target.value) }}  >
                                <option selected disabled value="">Choose here</option>
                                {
                                    (() => {
                                        let rows = [];

                                        if (typ) {
                                            for (let i = 0; i < typ.length; i++) {
                                                console.log(typ[i]);
                                                rows.push(<option value={typ[i]}>{typ[i]}</option>);
                                            }
                                        }
                                        return rows;
                                    })()
                                }

                            </select>
                            <label htmlFor="floatingInput0">BUILDING-TYPE</label>
                        </div>
                    </div>

                </div>
                <div className='row hoteldetcontainer'>
                    {
                        (() => {
                            let rows = [];
                            console.log(des);
                            if (des) {
                                for (let i = 0; i < des.length; i++) {
                                    rows.push(
                                        <div className="contain">

                                            <div className="row">
                                                <div className="hotel-con col row ">
                                                    <label className="lab-btn p-2  " >Apartment Name : {des[i].name} </label>
                                                    <label className="lab-btn p-2  " >City :    {des[i].city} </label>
                                                    <label className="lab-btn p-2  " >Building-Type :{des[i].buildingType} </label>
                                                    <label className="lab-btn p-2  " >Address :    {des[i].address} </label>
                                                    <label className=" lab-btn p-2  " >Room Description : {des[i].description}</label>
                                                    <label className=" lab-btn p-2  " >Contact No : {des[i].mobile} </label>
                                                    <label className=" lab-btn p-2  " >No of Rooms :  {des[i].roomCount} </label>
                                                </div>
                                                
                                                   <img className="hotel-image col" style={{ objectFit: 'contain' }} src={des[i].image}/>
                                                    
                                                   
                                               
                                            </div>


                                            <div className="table-responsive row">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Room No</th>
                                                            <th>Customer Name</th>
                                                            <th>Contact No</th>
                                                            <th>Price</th>
                                                            <th>Room status</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>101</td>
                                                            <td>Ramkrishna Sarkar</td>
                                                            <td>9923456789</td>
                                                            <td>8000</td>
                                                            <td>Booked</td>

                                                        </tr>
                                                        <tr>
                                                            <td>102</td>
                                                            <td>Biswajit Nag</td>
                                                            <td>9923456789</td>
                                                            <td>8000</td>
                                                            <td>Booked</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    );
                                }
                            }
                            return rows;
                        })()
                    }
                </div>


            </section>
        </>
    )
}