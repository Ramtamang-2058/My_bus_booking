import '../../static/css/faq.css';
import React, { useEffect, useState } from "react";
import { Accordion } from 'react-bootstrap';
import API from './API'
import { Helmet } from 'react-helmet';

const TITLE = 'FAQ - Hamro Bus';
const FAQ = () => {

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        getFaq();
    }, []);
    
    const getFaq = () => {
        API.get("faq/").then(res => {
            setFaq(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    };
    
    return (
        <div style={{minHeight:'500px',padding:30}} className="faq-container">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="faq-header">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-body">
            {faq.map((faq, index) => {
                    return (
                    <Accordion defaultActiveKey="0" className="m-4">
                    <Accordion.Item key={faq.id} eventKey={''+index}>
                        <Accordion.Header>
                            {faq.question}
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;