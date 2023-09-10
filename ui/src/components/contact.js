import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
import '../../static/css/contact.css';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import Helmet from 'react-helmet';
import API from "./API";

const TITLE = 'Contact Us';
const Contact = () => {
    const SERVICE_ID = "service_sfv7ilo";
    const TEMPLATE_ID = "hamrobus_contact";
    const USER_ID = "sZWlIOLOz4fTiSzmR";
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const [systemEmail, setSystemEmail] = React.useState('');
    const [systemPhone, setSystemPhone] = React.useState('');
    const [systemAddress, setSystemAddress] = React.useState('');

    const ViewContact = () => {
      
        API.get("systeminfo/1/").then(res => {
          Swal.fire({
            title: 'Contact Information',
            text: "Email: " + res.data.email + "\n" + "Phone: " + res.data.phone + "\n" + "Address: " + res.data.address,
          })
        });
    }
    
    const handleOnSubmit = (e) => {
    e.preventDefault();
    let item = {name, email, message}
    Swal.fire({
         title: 'Please Wait...',
         html: 'Sending your message to admin!',
         timerProgressBar: true,
         didOpen: () => {
             Swal.showLoading()
         }
        }
   )
   function clearSelect() {
     setName("");
     setEmail("");
    setMessage("");
   }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        Swal.close();
        API.post("contacts/", item);
        clearSelect();
        console.log(result.text);
        swal({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        swal({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
      <div style={{padding: '30px'}} className="Contact">
        <Helmet>
          <title> {TITLE} </title> 
        </Helmet>
        <h2>Contact Us</h2>
        <Form onSubmit={handleOnSubmit}>
          < Form.Group className = "mb-3"
          controlId = "form-input-control-email" name="from_email" >
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} name="from_email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@gmail.com" required />
        </Form.Group>
        < Form.Group className = "mb-3"
        controlId = "form-input-control-last-name" name="from_name" >
          <Form.Label>Your Name</Form.Label>
          <Form.Control value={name} name="from_name" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name..." required/>
        </Form.Group>
        
        < Form.Group className = "mb-3"
        controlId = "form-textarea-control-opinion" name="message" >
          <Form.Label>Message for Admin</Form.Label>
          <Form.Control value={message} onChange={(e) => setMessage(e.target.value)} name="message" as="textarea"/>
        </Form.Group>
          <Button type='submit' className='btn-danger'>Submit</Button>
          <Button type='button' className='btn-info m-1' onClick={()=>ViewContact()}>Contact Info</Button>
        </Form>
      </div>
  );
}
export default Contact;