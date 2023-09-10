import React , { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import API from "./API";
import { Button } from "react-bootstrap";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Profile");
  const [loggedin, setLoggedin] = useState(false);
  const [isadmin, setIsadmin] = useState(false);
  const [id, setId] = useState(0);
  let login = false;
  let admin = false;

  useEffect(() => {
    getUsername();
  }, []);

  const navigateToLogin = () => {
    navigate('/login/');
  }
  const navigateToSignup = () => {
    <Link to="/signup/"></Link>
  }
  const LogOutEvent = () =>{
    localStorage.removeItem("username");
  }
  const getUsername = () => {
    API.get("loggeduser/1/").then(res => {
      setUsername(res.data.username);
      setLoggedin(res.data.loggedin);
      setIsadmin(res.data.isadmin);
      setId(res.data.id);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("loggedin", res.data.loggedin);
      localStorage.setItem("isadmin", res.data.isadmin);
      if(localStorage.getItem("loggedin") === "true"){
        login = true;
      }
      if (localStorage.getItem("isadmin") === "true") {
        admin = true;
      }
      console.log(login);
      console.log(admin);
    })

  }
return (
    <Navbar style = {{ backgroundColor: '#00A3FF', }} bg = "#00A3FF" expand = "lg" variant = "dark" >
      <Container>
        <Navbar.Brand href="/home">
            <img
              alt=""
              src = "https://cdn.discordapp.com/attachments/591659008775946240/949292011624726568/Untitled_design_3.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} 
            Hamro Bus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="justify-content-end" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
            <Nav hidden={!loggedin}>
            <Nav.Link style={{margin:'4px', borderColor: "#ffffff",color:"#ffffff"}} href="/login/" className="btn btn-outline-info">Login</Nav.Link>
            <Nav.Link style={{margin: '4px', borderColor: "#ffffff",backgroundColor:"#ffffff",color:"#00A3FF"}} href="/signup/" className="btn btn-info">Signup</Nav.Link>
            </Nav>
            <Nav hidden={loggedin}>
            <NavDropdown className="d-flex" title= {username.toUpperCase()} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/'+id+'/ticket/')} >Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={LogOutEvent()} href="/logout/">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav hidden={isadmin}>
            <Button href="/admin/backend/route/" variant="outline-warning">Dashboard</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)
};

export default NavigationBar;