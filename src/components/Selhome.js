
export default function Selhome() {

    return (
        <>
            <section className="home">
                <div className="row">
                    <div className="dropdown col">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Cities
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Kolkata</a></li>
                            <li><a className="dropdown-item" href="#">Mumbai</a></li>
                            <li><a className="dropdown-item" href="#">Gurugao</a></li>
                        </ul>
                    </div>
                    <div className="dropdown col">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Type
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Hotel</a></li>
                            <li><a className="dropdown-item" href="#">Mess</a></li>
                            <li><a className="dropdown-item" href="#">Villa</a></li>
                        </ul>
                    </div>
                </div>
                <div className="hotel-con row">
                    <label className="lab-btn p-2  " >Apartment Name : Goyel Residency </label>
                    <label className="lab-btn p-2  " >Address :    New Rajibgandhi Nagar </label>
                    <label className=" lab-btn p-2  " >Room Description : 2BHK ROOM </label>
                    <label className=" lab-btn p-2  " >Contact No : 9932528811 </label>
                    <label className=" lab-btn p-2  " >No of Rooms : 10 </label>
                </div>


            </section>
        </>
    )
}