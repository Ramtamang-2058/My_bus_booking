import React , {useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import API from './API';
import { Helmet } from 'react-helmet';
import { getRadioUtilityClass } from '@mui/material';

const TITLE = 'Payment Verify';
const Success = () => {
  const [searchParams] = useSearchParams();
  let payment = true;
  const navigate = useNavigate();
  let id = searchParams.get('oid');
  const [uid, setUid] = React.useState(0);
  const updatePayment = () => {
      let item = { payment }
      getUsername();
      API.patch(`tickets/${id}/`, item).then((res) => navigate('/'))
      .catch((err) => console.log(err));
      navigate('/');  
  };
  const navigateTo = () => {
      navigate('/'+uid+'/ticket');
  }
  useEffect(() => {
    getUsername();
    }, []);
  useEffect(() => {
        updatePayment();
    }, []);
    const getUsername = () => {
      API.get("loggeduser/1/").then(res => {
        setUsername(res.data.username);
        setUid(res.data.id);
        console.log("Username" + username);
      }).catch(console.error);

    }
  console.log(searchParams.get('oid')); // ▶ URLSearchParams {}
    return (
      <div style={{minHeight:'400px',marginTop:'30px'}}>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div className="container"> 
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h1>Payment Successful</h1>
                <h3>Your payment has been verified</h3>
                <h3>Your ticket is being processed</h3>
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            </div>
          </div>
      </div>
      </div>
    );

};
export default Success; 