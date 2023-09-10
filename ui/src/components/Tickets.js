import React, { useRef, useState, useEffect } from "react";
import { ListGroup, Card, Button, Form, Row, Col } from "react-bootstrap";
import API from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'
import { Redirect, useParams } from "react-router-dom";
import swal from 'sweetalert';
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";
import KhaltiCheckout from "khalti-checkout-web";

const TITLE = 'Your Tickets';
const Tickets = () => {
  const [name, setName] = useState("");
  const { id } = useParams();
  const [departureTime, setDepartureTime] = useState("06:00");
  const [arrivalTime, setArrivalTime] = useState("18:00");
  const [departureDate, setDepartureDate] = useState("");
  const [price, setPrice] = useState(400);
  const [vehicleID, setVehicleID] = useState("");
  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
  const [firstName, setFirstName] = useState("HamroBus");
  const [lastName, setLastName] = useState("User");
  const [email, setEmail] = useState("");
  const [userID, setUserId] = useState(id);
  const [departureLocation, setDepartureLocation] = useState("Kathmandu");
  const [destinationLocation, setDestinationLocation] = useState("Gulmi");
  const [dateOfJourney, setDateOfJourney] = useState("2022-05-27");
  const [username, setUsername] = useState("");
  const [publicurl, setPublicurl] = useState("");
  let payment = true;
  let routeData = [];
  let ticketData = [];
  const firstUpdate = useRef(true);
  const [disable, setDisable] = useState(false);
  const [productID, setProductID] = useState(0);
  const [productamount, setProductAmount] = useState(1000);
  let loaded = true;
  const onSubmit = (e) => {
      e.preventDefault();
          window.location.href = '/result/' + departureLocation + '/' + destinationLocation + '/' + dateOfJourney;
  };

  useEffect(() => {
    refreshRoutes();
  }, []);
  useEffect(() => {
    API.get("systeminfo/1/").then(res => {
      setPublicurl(res.data.paymentapi);
    }).catch(console.error);
  }, []);
  
  const onKhalti=(id,amount)=> {

    console.log(id);
    setProductID(id);
    setProductAmount(amount);
    let config = {
      // replace this key with yours
      "publicKey": publicurl,
      "productIdentity": id,
      "productName": "Hamro Bus Ticket",
      "productUrl": "http://127.0.0.1:8000/",
      "eventHandler": {
        onSuccess(payload) {
          // hit merchant api for initiating verfication
           let item = {
             payment
           }
           getUsername();
           API.patch(`tickets/${payload.product_identity}/`, item).then((res) => window.location.reload())
             .catch((err) => console.log(err));
          console.log(payload);
        },
        // onError handler is optional
        onError(error) {
          // handle errors
          swal("Error!", error, "error");
          console.log(error);
        },
        onClose() {
          console.log('widget is closing');
        }
      },
      "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };
    let checkout = new KhaltiCheckout(config);
    console.log(amount);
    checkout.show({
      amount: 1000,
    });
  };
  const refreshRoutes = () => {
        API.get("tickets/")
        .then((res) => {
           setRoutes(res.data);
            getUsername();
            getUserData();
            getURL();
        })
        .catch(console.error);
      
  };
  const getUserData = () => {
    API.get("users/"+id+"/").then(res => {
      setFirstName(res.data.first_name);
      setLastName(res.data.last_name);
      setEmail(res.data.email);
    }).catch(console.error);
  };
  const getURL = () => {
    API.get("systeminfo/1/").then(res => {
      setPublicurl(res.data.paymentapi);
    }).catch(console.error);
  };

  const onUpdate = () => {
    let item = {
      username: username,
      email: email,
      first_name: firstName,
      last_name: lastName,
    };
    API.patch("users/"+id+"/", item).then(res => {
      swal("Success!", "Your profile has been updated!", "success");
    }).catch(console.error);
  };
  const getUsername = () => {
       API.get("loggeduser/1/").then(res => {
           setUsername(res.data.username);
           console.log("Username" + username);
       }).catch(console.error);

   }
   const changePassword = ( ) => {
     window.href="127.0.0.1:8000/password/change/";
   }
  const onDelete = (id) => {
    swal({
            title: "Are you sure?",
            text: "Once cancelled, it cannot be recovered!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                API.delete(`tickets/${id}/`).then((res) => refreshRoutes());
                swal("Your ticket has been successfully cancelled!", {
                    icon: "success",
                });
            } else {
                swal("Cancel process cancelled!");
            }
        });
};
  return (
    <div style={{minHeight:'500px'}} className = "container mt-5 resultContainer mw-100 mh-100">
      <Helmet>
        <title> {TITLE} </title> 
      </Helmet>
      <div className = "row d-flex justify-content-center result-rows" >
        <div className="col-md-4">
          <Form className="">
              <h3 className="mb-3">Your Details</h3>
            <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder={username} disabled />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Row className="mb-3">
            <Col>
              <Form.Control value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First name" />
            </Col>
            <Col>
              <Form.Control value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last name" />
            </Col>
          </Row>
            <div className="float-right">
              <Button
                variant="outline-info"
                class="btn btn-outline-info"
                type="submit"
                onClick={onUpdate}
                className="mx-2"
              >
                Update Details
              </Button>
              <Button
                variant="warning"
                class="btn-warning"
                type="button"
                onClick={() => changePassword()}
                className="mx-2"
                href="/password/change/"
              >
                Change Password
              </Button>
            </div>
          </Form>
          <Form onSubmit={onSubmit} className="mt-4">
          <h3 className="mb-3">Search ticket for next travel</h3>
            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Departure Location </Form.Label>
              <Form.Control as="select"
                placeholder="Enter Departure Location"
                value={departureLocation}
                onChange={(e) => setDepartureLocation(e.target.value)}>
                  <option value="achham">Achham</option>

                  <option value="arghakhanchi">Arghakhanchi</option>

                  <option value="baglung">Baglung</option>

                  <option value="baitadi">Baitadi</option>

                  <option value="bajhang">Bajhang</option>

                  <option value="bajura">Bajura</option>

                  <option value="banke">Banke</option>

                  <option value="bara">Bara</option>

                  <option value="bardiya">Bardiya</option>

                  <option value="bhaktapur">Bhaktapur</option>

                  <option value="bhojpur">Bhojpur</option>

                  <option value="chitwan">Chitwan</option>

                  <option value="dadeldhura">Dadeldhura</option>

                  <option value="dailekh">Dailekh</option>

                  <option value="dang deukhuri">Dang deukhuri</option>

                  <option value="darchula">Darchula</option>

                  <option value="dhading">Dhading</option>

                  <option value="dhankuta">Dhankuta</option>

                  <option value="dhanusa">Dhanusa</option>

                  <option value="dholkha">Dholkha</option>

                  <option value="dolpa">Dolpa</option>

                  <option value="doti">Doti</option>

                  <option value="gorkha">Gorkha</option>

                  <option value="gulmi">Gulmi</option>

                  <option value="humla">Humla</option>

                  <option value="ilam">Ilam</option>

                  <option value="jajarkot">Jajarkot</option>

                  <option value="jhapa">Jhapa</option>

                  <option value="jumla">Jumla</option>

                  <option value="kailali">Kailali</option>

                  <option value="kalikot">Kalikot</option>

                  <option value="kanchanpur">Kanchanpur</option>

                  <option value="kapilvastu">Kapilvastu</option>

                  <option value="kaski">Kaski</option>

                  <option value="kathmandu">Kathmandu</option>

                  <option value="kavrepalanchok">Kavrepalanchok</option>

                  <option value="khotang">Khotang</option>

                  <option value="lalitpur">Lalitpur</option>

                  <option value="lamjung">Lamjung</option>

                  <option value="mahottari">Mahottari</option>

                  <option value="makwanpur">Makwanpur</option>

                  <option value="manang">Manang</option>

                  <option value="morang">Morang</option>

                  <option value="mugu">Mugu</option>

                  <option value="mustang">Mustang</option>

                  <option value="myagdi">Myagdi</option>

                  <option value="nawalparasi">Nawalparasi</option>

                  <option value="nuwakot">Nuwakot</option>

                  <option value="okhaldhunga">Okhaldhunga</option>

                  <option value="palpa">Palpa</option>

                  <option value="panchthar">Panchthar</option>

                  <option value="parbat">Parbat</option>

                  <option value="parsa">Parsa</option>

                  <option value="pyuthan">Pyuthan</option>

                  <option value="ramechhap">Ramechhap</option>

                  <option value="rasuwa">Rasuwa</option>

                  <option value="rautahat">Rautahat</option>

                  <option value="rolpa">Rolpa</option>

                  <option value="rukum">Rukum</option>

                  <option value="rupandehi">Rupandehi</option>

                  <option value="salyan">Salyan</option>

                  <option value="sankhuwasabha">Sankhuwasabha</option>

                  <option value="saptari">Saptari</option>

                  <option value="sarlahi">Sarlahi</option>

                  <option value="sindhuli">Sindhuli</option>

                  <option value="sindhupalchok">Sindhupalchok</option>

                  <option value="siraha">Siraha</option>

                  <option value="solukhumbu">Solukhumbu</option>

                  <option value="sunsari">Sunsari</option>

                  <option value="surkhet">Surkhet</option>

                  <option value="syangja">Syangja</option>

                  <option value="tanahu">Tanahu</option>

                  <option value="taplejung">Taplejung</option>

                  <option value="terhathum">Terhathum</option>

                  <option value="udayapur">Udayapur</option>

            </Form.Control>
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Destination Location</Form.Label>
              <Form.Control as="select"
                placeholder="Enter Destination Location"
                value={destinationLocation}
                onChange={(e) => setDestinationLocation(e.target.value)}>
                  <option value="achham">Achham</option>

                  <option value="arghakhanchi">Arghakhanchi</option>

                  <option value="baglung">Baglung</option>

                  <option value="baitadi">Baitadi</option>

                  <option value="bajhang">Bajhang</option>

                  <option value="bajura">Bajura</option>

                  <option value="banke">Banke</option>

                  <option value="bara">Bara</option>

                  <option value="bardiya">Bardiya</option>

                  <option value="bhaktapur">Bhaktapur</option>

                  <option value="bhojpur">Bhojpur</option>

                  <option value="chitwan">Chitwan</option>

                  <option value="dadeldhura">Dadeldhura</option>

                  <option value="dailekh">Dailekh</option>

                  <option value="dang deukhuri">Dang deukhuri</option>

                  <option value="darchula">Darchula</option>

                  <option value="dhading">Dhading</option>

                  <option value="dhankuta">Dhankuta</option>

                  <option value="dhanusa">Dhanusa</option>

                  <option value="dholkha">Dholkha</option>

                  <option value="dolpa">Dolpa</option>

                  <option value="doti">Doti</option>

                  <option value="gorkha">Gorkha</option>

                  <option value="gulmi">Gulmi</option>

                  <option value="humla">Humla</option>

                  <option value="ilam">Ilam</option>

                  <option value="jajarkot">Jajarkot</option>

                  <option value="jhapa">Jhapa</option>

                  <option value="jumla">Jumla</option>

                  <option value="kailali">Kailali</option>

                  <option value="kalikot">Kalikot</option>

                  <option value="kanchanpur">Kanchanpur</option>

                  <option value="kapilvastu">Kapilvastu</option>

                  <option value="kaski">Kaski</option>

                  <option value="kathmandu">Kathmandu</option>

                  <option value="kavrepalanchok">Kavrepalanchok</option>

                  <option value="khotang">Khotang</option>

                  <option value="lalitpur">Lalitpur</option>

                  <option value="lamjung">Lamjung</option>

                  <option value="mahottari">Mahottari</option>

                  <option value="makwanpur">Makwanpur</option>

                  <option value="manang">Manang</option>

                  <option value="morang">Morang</option>

                  <option value="mugu">Mugu</option>

                  <option value="mustang">Mustang</option>

                  <option value="myagdi">Myagdi</option>

                  <option value="nawalparasi">Nawalparasi</option>

                  <option value="nuwakot">Nuwakot</option>

                  <option value="okhaldhunga">Okhaldhunga</option>

                  <option value="palpa">Palpa</option>

                  <option value="panchthar">Panchthar</option>

                  <option value="parbat">Parbat</option>

                  <option value="parsa">Parsa</option>

                  <option value="pyuthan">Pyuthan</option>

                  <option value="ramechhap">Ramechhap</option>

                  <option value="rasuwa">Rasuwa</option>

                  <option value="rautahat">Rautahat</option>

                  <option value="rolpa">Rolpa</option>

                  <option value="rukum">Rukum</option>

                  <option value="rupandehi">Rupandehi</option>

                  <option value="salyan">Salyan</option>

                  <option value="sankhuwasabha">Sankhuwasabha</option>

                  <option value="saptari">Saptari</option>

                  <option value="sarlahi">Sarlahi</option>

                  <option value="sindhuli">Sindhuli</option>

                  <option value="sindhupalchok">Sindhupalchok</option>

                  <option value="siraha">Siraha</option>

                  <option value="solukhumbu">Solukhumbu</option>

                  <option value="sunsari">Sunsari</option>

                  <option value="surkhet">Surkhet</option>

                  <option value="syangja">Syangja</option>

                  <option value="tanahu">Tanahu</option>

                  <option value="taplejung">Taplejung</option>

                  <option value="terhathum">Terhathum</option>

                  <option value="udayapur">Udayapur</option>
              </Form.Control>
              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date of Journey</Form.Label>
              <Form.Control type="date"
                placeholder="Enter Date of Journey"
                value={dateOfJourney}
                onChange={(e) => setDateOfJourney(e.target.value)}
              />

            </Form.Group>
    
            <div className="float-right">
              <Button
                variant="outline-danger"
                className="btn btn-outline-danger mx-1"
                type="submit"
                onClick={onSubmit}
              >
                Search
              </Button>
            </div>
          </Form>
        </div>
       
        <div style={{color: '#001845'}} className="col-md-8 m">
          <Card>
            <Card.Header>
              <h3>Your Tickets</h3>
            </Card.Header>
          </Card>
              {routes.map((ticket, index) => {
                return (
                  ticket.username === username ?
                  <div className="card mb-3" key={ticket.id}>
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 style={{textTransform:"capitalize"}}>Journey: {ticket.departureLocation} to {ticket.destinationLocation}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5>Departure Date: {ticket.departureDate}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Username: {ticket.username}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5>Booked Seats: {ticket.bookedSeat1}, {ticket.bookedSeat2}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Departure Time: {ticket.departureTime}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5>Amount: Rs {ticket.amount}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Arrival Time: {ticket.arrivalTime}</h5>
                            </div>
                            <div className="col-md-6">
                                < form hidden={ticket.payment} className="btn" action = "https://uat.esewa.com.np/epay/main"
                                method = "POST" >
                                    <input value={ticket.amount} name="tAmt" type="hidden" />
                                    <input value={ticket.amount} name="amt" type="hidden" />
                                    <input value="0" name="txAmt" type="hidden" />
                                    <input value="0" name="psc" type="hidden" />
                                    <input value="0" name="pdc" type="hidden" />
                                    <input value="EPAYTEST" name="scd" type="hidden" />
                                    <input value={ticket.id} name="pid" type="hidden" />
                                    <input value="http://127.0.0.1:8000/success" type="hidden" name="su" />
                                    <input value="http://127.0.0.1:8000" type="hidden" name="fu" />
                                    <input hidden={ticket.payment} className="btn btn-success" value="Pay with eSewa" type="submit" disabled={ticket.payment} />
                                    {/* <input hidden={ticket.payment} onClick={()=>onKhalti(ticket.id,ticket.amount*100)} className="btn btn-warning" disabled={ticket.payment} value="Pay with Khalti"/> */}
                                </form>
                                 <button hidden={ticket.payment} onClick={()=>onKhalti(ticket.id,ticket.amount*100)} className="btn btn-warning">Pay with Khalti</button>
                            </div>
                            <Button hidden={!ticket.payment} className="btn btn-info" onClick={() => {window.location.href='/printticket/'+userID+'/'+`${ticket.id}`} }> Print Ticket </Button>
                            <Button style={{marginTop: '5px'}} variant="danger" className="btn" onClick={() => onDelete(ticket.id)}>Cancel Ticket</Button>
                        </div>
                    </div>    
                </div>
                : null
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default Tickets;