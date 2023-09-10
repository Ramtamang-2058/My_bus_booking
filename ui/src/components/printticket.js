import React, { useState, useEffect } from "react";
import API from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'
import { useParams } from "react-router-dom";
import '../../static/css/print.css';

const TITLE = 'Print Ticket';
const PrintTickets = () => {
    const { userid, ticketid } = useParams();
    const [firstName, setFirstName] = useState("HamroBus");
    const [lastName, setLastName] = useState("User");
    const [email, setEmail] = useState("");
    const [userID, setUserId] = useState(userid);
    const [ticketID, setTicketId] = useState(ticketid);
    const [routeID, setRouteId] = useState(0);
    const [bookedSeat1, setBookedSeat1] = useState("");
    const [bookedSeat2, setBookedSeat2] = useState("");
    const [amount, setAmount] = useState(0);
    const [payment, setPayment] = useState(false);
    const [departureLocation, setDepartureLocation] = useState("");
    const [destinationLocation, setDestinationLocation] = useState("");
    const [vehicleID, setVehicleID] = useState("");
    const [booked_date, setBookedDate] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [departureDate, setDepartureDate] = useState("");
  
    useEffect(() => {
        getUserData();
    }, []);

   const getUserData = () => {
       API.get("users/" + userID + "/").then(res => {
           setFirstName(res.data.first_name);
           setLastName(res.data.last_name);
           setEmail(res.data.email);
           getTicketData();
       }).catch(console.error);
   };
   const getTicketData = () => {
       API.get("tickets/"+ticketid+"/").then(res => {
            setRouteId(res.data.routeId);
            setBookedSeat1(res.data.bookedSeat1);
            setBookedSeat2(res.data.bookedSeat2);
            setAmount(res.data.amount);
            setDepartureLocation(res.data.departureLocation);
            setDestinationLocation(res.data.destinationLocation);
            setVehicleID(res.data.vehicleID);
            setBookedDate(res.data.booked_date);
            setDepartureTime(res.data.departureTime);
            setDepartureDate(res.data.departureDate);
         }).catch(console.error);
   }

    return(
        <div id="invoice">
            <Helmet>
                <title> {TITLE} </title> 
            </Helmet>
            <div className="toolbar hidden-print">
                <div className="text-right d-print-none">
                    <button id="printInvoice" onClick={()=>{window.print()}} className="btn btn-info"><i className="fa fa-print"></i> Print</button>
                </div>
            </div>
            <div className="invoice overflow-auto">
                <div style={{minWidth: '600px'}}>
                    <header>
                        <div className="row">
                            <div className="col company-details">
                                <h2 className="name">
                                    <a target="_blank" href="/">
                                    Hamro Bus
                                    </a>
                                </h2>
                                <div>Kathmandu, Nepal</div>
                                <div>(+977) 9812121212</div>
                                <div>sales@hamrobus.com</div>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div className="row contacts">
                            <div className="col invoice-to">
                                <div className="text-gray-light">INVOICE TO:</div>
                                <h2 className="to">{firstName} {lastName} </h2>
                                <div className="address">Kathmandu, Nepal</div>
                                <div className="email">{email}</div>
                            </div>
                            <div className="col invoice-details">
                                <h1 className="invoice-id">INVOICE 3-2-1</h1>
                                <div className="date">Date of Invoice: {new Date().toLocaleString() + ''}</div>
                            </div>
                        </div>
                        <table border="0" cellspacing="0" cellpadding="0">
                            <thead>
                                <tr>
                                    <th>Vehicle ID</th>
                                    <th className="text-left">TICKET info</th>
                                    <th className="text-right">PRICE</th>
                                    <th className="text-right">QUANTITY</th>
                                    <th className="text-right">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="no">{vehicleID}</td>
                                    <td className="text-left">
                                        <h3 style={{textTransform:'capitalize'}}>
                                            {departureLocation} to {destinationLocation}
                                        </h3>
                                        Booked Seats: {bookedSeat1} {bookedSeat2}
                                        <br></br>Departure Date: {departureDate}
                                        <br></br>Departure Time: {departureTime}
                                    </td>
                                    <td className="unit">Rs. {amount/2}</td>
                                    <td className="qty">2</td>
                                    <td className="total">Rs. {amount}</td>
                                </tr>
                                <tr>
                                    <td className="no"></td>
                                    <td className="text-left"><br></br>
                                        <br></br></td>
                                    <td className="unit"></td>
                                    <td className="qty"></td>
                                    <td className="total"></td>
                                </tr>
                                <tr>
                                    <td className="no"></td>
                                    <td className="text-left"><br></br>
                                        <br></br></td>
                                    <td className="unit"></td>
                                    <td className="qty"></td>
                                    <td className="total"></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td colSpan="2">SUBTOTAL</td>
                                    <td>Rs. {amount}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td colSpan="2">TAX</td>
                                    <td>Rs. 0</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td colSpan="2">GRAND TOTAL</td>
                                    <td>Rs. {amount}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="thanks">Thank you!</div>
                        <div className="notices">
                            <div>NOTICE:</div>
                            <div className="notice">It is not refundable after 30 days of invoice creation.</div>
                        </div>
                    </main>
                    <footer>
                        Invoice was created on a computer and is valid without the signature and seal.
                    </footer>
                </div>
                <div></div>
            </div>
        </div>   
    )
}
export default PrintTickets;