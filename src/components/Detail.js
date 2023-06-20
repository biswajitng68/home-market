export default function (){

    const base_url = "https://room-rover-app-backend-mern.onrender.com";

    async function fetchbooking() {

        const response = await fetch(base_url + "/api//seller_booking_Details", {
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
            
        }
        else {
            alert(json.message);
        }
    }
    return(
        <>
        
        <section className="home">
        <div>
     
       <h2>now</h2>
                                                <table className="table" id="table1">
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
       <h2>prev</h2>
                                                <table className="table"  id="table2">
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
        
     
       
    
        </section>
        </>
    )
}