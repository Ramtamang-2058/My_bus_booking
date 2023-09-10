import React, { useState, useEffect } from "react";
import '../../static/css/aboutus.css';
import { Helmet } from 'react-helmet'
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
import API from './API';
import { Button, Card } from "react-bootstrap";

const TITLE = 'Email Verify';
export default function EmailVerify() {

    const { id, uid, token } = useParams();
    const [verifyId, setVerifyId] = useState(id);
    const [verifyUid, setVerifyUid] = useState(uid);
    const [verifyToken, setVerifyToken] = useState(token);
   
//    Database Data
    const [userid, setUserID] = useState('');
    const [tokend, setToken] = useState('');
    const [username, setUsername] = useState(0);

    //user data
    const [dataUsername, setDataUsername] = useState('');
    const [dataEmail, setDataEmail] = useState('');
    const [is_active, setIsActive] = useState(false);

     useEffect(() => {
         getVerifyData();
     }, []);
     const getVerifyData = () => {
         API.get("emailverify/?username="+id+"/")
             .then((res) => {
                setUserID(res.data[res.data.length-1].userid);
                setToken(res.data[res.data.length-1].token);
                setUsername(res.data[res.data.length-1].username);
                 getUserData();
             })
             .catch(console.error);

     };
     const getUserData = () => {
            API.get("users/"+id+"/")
                .then((res) => {
                    console.log(res.data);
                    setIsActive(res.data.is_active);
                    setDataEmail(res.data.email);
                    setDataUsername(res.data.username);
                })
                .catch(console.error);
        };
    const verifyEmail = () => {
        let item = {
            username: dataUsername,
            email: dataEmail,
            is_active: true
        }
    
        if(verifyId == username && verifyUid === userid && verifyToken === tokend){
            API.patch(`users/${id}/`, item)
                .then((res) => {
                    window.location = "http://127.0.0.1:8000/login/";
                    setIsActive(true);
                }).catch(console.error)
        }
        else{
            swal("Error", "Your email is not verified", "error");
        }
        
    }
    
  return (
    <div style={{minHeight:'500px'}}>
        <Helmet>
            <title> {TITLE} </title> 
        </Helmet>
        
        <Card className="d-flex justify-content center">
            <Card.Header>Email Confimation</Card.Header>
            <Card.Body>
                <Card.Title>Verify your email now</Card.Title>
                <Card.Text>
                Click the button below to start the verification process!
                </Card.Text>
                <Button variant="danger" onClick={verifyEmail}>Verify</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

