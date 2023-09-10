import React, { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "./API";

const AddRoute = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [departureLocation, setDepartureLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [price, setPrice] = useState(400);
  const [vehicleID, setVehicleID] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [routes, setRoutes] = useState([]);
  const [routeID, setRouteID] = useState(null);

  useEffect(() => {
    refreshRoutes();
  }, []);

  const refreshRoutes = () => {
    API.get("/")
      .then((res) => {
        setRoutes(res.data);
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { name, departureLocation, destinationLocation, departureTime, arrivalTime, departureDate, price, vehicleID, vehicleType };
    API.post("/", item).then(() => refreshRoutes());
  };

  const onUpdate = (id) => {
    let item = { name };
    API.patch(`/${id}/`, item).then((res) => refreshRoutes());
  };

  const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshRoutes());
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
    setVehicleType(item.vehicleType);
    setRouteID(item.id);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Create a new Route</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{routeID}Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Departure Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Departure Location"
                value={departureLocation}
                onChange={(e) => setDepartureLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Destination Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Destination Location"
                value={destinationLocation}
                onChange={(e) => setDestinationLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Arrival</Form.Label>
              <Form.Control
                type="text"
                placeholder="Arrival Time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Departure Time</Form.Label>
              <Form.Control
                type="text"
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
                onChange={(e) => setVehicleID(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Vehicle Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Vehicle Type"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              />
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
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
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Company Name</th>
                <th scope="col">Departure</th>
                <th scope="col">Destination</th>
                <th scope="col">Departure Time</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Departure Date</th>
                <th scope="col">Price</th>
                <th scope="col">Vehicle ID</th>
                <th scope="col">Vehicle Type</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => {
                return (
                  <tr key="">
                    <th scope="row">{route.id}</th>
                    <td> {route.name}</td>
                    <td> {route.destinationLocation}</td>
                    <td> {route.departureLocation}</td>
                    <td> {route.departureTime}</td>
                    <td> {route.arrivalTime}</td>
                    <td> {route.departureDate}</td>
                    <td> {route.price}</td>
                    <td> {route.vehicleID}</td>
                    <td> {route.vehicleType}</td>  
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