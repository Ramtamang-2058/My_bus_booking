import React , { useEffect, useState } from "react";
import '../../static/css/aboutus.css';
import API from './API';

export default function AboutUs() {
   
    const [about, setAbout] = React.useState('Loading...');

     useEffect(() => {
        getAboutUs();
     }, []);

    const getAboutUs = () => {
        API.get("systeminfo/1/").then(res => {
            setAbout(res.data.about);
        });
    }
  return (
        <main className="about-us">
            <div className="container">
                <div className="about-us-title">
                    <h1>About Us</h1>
                </div>
                <div className="about-us-para">
                    <p> {about} </p>
                </div>
            </div>
        </main>
  );
}

