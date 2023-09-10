import React, { useRef, useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import API from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const TITLE = 'Your Results';
const Result = () => {

  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
  const { from, destination, date } = useParams();
  const [departureLocation, setDepartureLocation] = useState(from);
  const [destinationLocation, setDestinationLocation] = useState(destination);
  const [departureDate, setDepartureDate] = useState(date);
  const [dateOfJourney, setDateOfJourney] = useState(date);
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    getUsername();
      e.preventDefault();
          window.location.href='/result/' + departureLocation + '/' + destinationLocation+'/'+dateOfJourney;
  };
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
     refreshRoutes();
  }, []);

  const getUsername = () => {
      API.get("loggeduser/1/").then(res => {
        setUsername(res.data.username);
      })
    }
  var i =0;
  const OnBook = (e) => {
    getUsername();
    console.log(username);
    if(username === ""){
       swal({
         title: "Error!",
         text: "Please login to book ticket!",
         icon: "error",
       });
    }
    if(username !== ""){
      navigate('/book/' + username + '/' + e)
    }
  }
  const refreshRoutes = () => {
    API.get("routes/")
    .then((res) => {
        setRoutes(res.data);
        getUsername();
        for(i=0;i<res.data.length;i++){
            if(res.data[i].departureLocation === departureLocation && res.data[i].destinationLocation === destinationLocation && res.data[i].departureDate === departureDate){
                setError(true);
                console.log(error);
            }
        }
        if(res.data.departureLocation == departureLocation && res.data.destinationLocation == destinationLocation && res.data.departureDate == departureDate){
            setError(false);
            setIsLoaded(true);
        }
    })
    .catch(console.error); 
  };

  return (
    <div style={{minHeight:'500px'}}className = "container mt-5 resultContainer mw-100 mh-100">
      <Helmet>
        <title> {TITLE} </title> 
      </Helmet>
      <div className = "row d-flex justify-content-center result-rows" >
        <div className="col-md-4">
          <Form onSubmit={onSubmit} className="mt-4">
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
                variant="btn-danger"
                className="btn btn-danger"
                type="submit"
                // disabled={disable}
                onClick={onSubmit}
              >
                Search
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table hidden={isLoaded} className="table table-dark table-striped table-borderless table-hover">
            <thead className="thead-dark">
              <tr>
                <th className="table-light" scope="col">ID</th>
                <th className="table-light" scope="col">Company Name</th>
                <th className="table-light" scope="col">Departure</th>
                <th className="table-light" scope="col">Destination</th>
                <th className="table-light" scope="col">Departure</th>
                <th className="table-light" scope="col">Arrival</th>
                <th className="table-light" scope="col">Departure Date</th>
                <th className="table-light" scope="col">Price</th>
                <th className="table-light" scope="col">Book Now</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => {
                return (
                  route.departureLocation === from && route.destinationLocation === destination && route.departureDate === departureDate ?
                  <tr key={index}>
                    <th className="table-light" scope="row">{route.vehicleID}</th>
                    <td className="table-light"> {route.name}</td>
                    <td style={{textTransform:'capitalize'}} className="table-light"> {route.destinationLocation}</td>
                    <td style={{textTransform:'capitalize'}} className="table-light"> {route.departureLocation}</td>
                    <td className="table-light"> {route.departureTime}</td>
                    <td className="table-light"> {route.arrivalTime}</td>
                    <td className="table-light"> {route.departureDate}</td>
                    <td style={{color:'#FF4062'}}className="table-light"> Rs {route.price}</td>
                    <td className="table-light" style={{cursor: "pointer"}}>
                      <i
                        className="fa fa-ticket text-danger d-inline mx-3"
                        aria-hidden="true"
                        onClick = {
                          // () => navigate('/book/' + username + '/' + route.id)
                          ()=>OnBook(route.id)
                        }
                      ></i>
                    </td>
                  </tr>
                  : null
                );
              })}
            </tbody>
          </table>
          <div hidden={error} class="alert alert-warning" role="alert">
            No results found! Sorry, we couldn't find any buses that match your search.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;