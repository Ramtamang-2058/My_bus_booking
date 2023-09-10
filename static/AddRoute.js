import React, { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'
import swal from 'sweetalert';

const TITLE = 'Add Route';
const AddRoute = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [departureLocation, setDepartureLocation] = useState("kathmandu");
  const [destinationLocation, setDestinationLocation] = useState("gulmi");
  const [departureTime, setDepartureTime] = useState("06:00");
  const [arrivalTime, setArrivalTime] = useState("18:00");
  const [departureDate, setDepartureDate] = useState("");
  const [price, setPrice] = useState(400);
  const [vehicleID, setVehicleID] = useState("");
  const [routes, setRoutes] = useState([]);
  const [routeID, setRouteID] = useState(null);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    refreshRoutes();
    // document.title="Add Route";
  }, []);
  
  function clearSelect() {
    setName("");
    setDepartureLocation("kathmandu");
    setDestinationLocation("gulmi");
    setDepartureTime("06:00");
    setArrivalTime("18:00");
    setDepartureDate("");
    setPrice(400);
    setVehicleID("");
    setRouteID(null);
  }

  const refreshRoutes = () => {
    API.get("routes/")
      .then((res) => {
        setRoutes(res.data);
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { name, departureLocation, destinationLocation, departureTime, arrivalTime, departureDate, price, vehicleID };
    API.post("routes/", item).then(() => refreshRoutes());
  };

  const onUpdate = (id) => {
    let item = { name };
    swal({
        title: "Update Route",
        text: "Are you sure you want to update this route?",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.patch(`routes/${id}/`, item).then((res) => refreshRoutes());
          clearSelect();
          setDisable(false);
          swal("Route has been updated successfully!", {
            icon: "success",
          });
        } else {
          swal("Route wasn't updated!");
          clearSelect();
          setDisable(false);
        }
      });
    // API.patch(`routes/${id}/`, item).then((res) => refreshRoutes());
  };

  const onDelete = (id) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, it cannot be recovered!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          API.delete(`routes/${id}/`).then((res) => refreshRoutes());
          clearSelect();
          swal("Route has been deleted successfully!", {
            icon: "success",
          });
        } else {
          swal("Delete process cancelled!");
          clearSelect();
        }
      });
    // API.delete(`routes/${id}/`).then((res) => refreshRoutes());
  };

  function selectRoute(id) {
    let item = routes.filter((route) => route.id === id)[0];
    setName(item.name);
    setDepartureLocation(item.departureLocation);
    setDestinationLocation(item.destinationLocation);
    setDepartureTime(item.departureTime);
    setArrivalTime(item.arrivalTime);
    setDepartureDate(item.departureDate);
    setPrice(item.price);
    setVehicleID(item.vehicleID);
    setRouteID(item.id);
    setDisable(true);
  }
  function clearSelect() {
    setName("");
    setDepartureLocation("kathmandu");
    setDestinationLocation("gulmi");
    setDepartureTime("06:00");
    setArrivalTime("18:00");
    setDepartureDate("");
    setPrice(400);
    setVehicleID("");
    setRouteID(null);
  }

  return (
    <div className = "container mt-5" style={{backgroundColor}}>
      <Helmet>
        <title> {TITLE} </title> 
      </Helmet>
      <div className = "row">
        < div className = "col-md-4">
          <h3 className="float-left">Create a new Route</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{routeID}Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Departure Location</Form.Label>
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

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Arrival</Form.Label>
              <Form.Control
                type="time"
                placeholder="Arrival Time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Departure Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Departure Time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
              />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="date"
                placeholder="Departure Date"
                value={departureDate}
                required
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Fare Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Vehicle Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Vehicle Number"
                value={vehicleID}
                required
                onChange={(e) => setVehicleID(e.target.value)}
              />
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                disabled={disable}
                onClick={onSubmit}
                className="mx-2"
              >
                Add
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(routeID)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table className = "table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Company Name</th>
                <th scope="col">Departure</th>
                <th scope="col">Destination</th>
                <th scope="col">Departure</th>
                <th scope="col">Arrival</th>
                <th scope="col">Departure Date</th>
                <th scope="col">Price</th>
                {/* <th scope="col">Vehicle ID</th> */}
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => {
                return (
                  <tr key="">
                    <th scope="row">{route.vehicleID}</th>
                    <td> {route.name}</td>
                    <td> {route.destinationLocation}</td>
                    <td> {route.departureLocation}</td>
                    <td> {route.departureTime}</td>
                    <td> {route.arrivalTime}</td>
                    <td> {route.departureDate}</td>
                    <td> {route.price}</td>
                    {/* <td> {route.vehicleID}</td> */}
                    <td>
                      <i
                        className="fa fa-pencil-square text-primary d-inline"
                        aria-hidden="true"
                        onClick={() => selectRoute(route.id)}
                      ></i>
                      <i
                        className="fa fa-trash-o text-danger d-inline mx-3"
                        aria-hidden="true"
                        onClick={() => onDelete(route.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AddRoute;