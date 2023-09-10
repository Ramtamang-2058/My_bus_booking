import * as React from 'react';
import '../../static/css/logos.css';

export default function LogosBox() {
 
  return (
    <section className="logo-list d-print-none">
        <div className="container" classNam="d-flex justify-content-center">
            <div className="row">
                <div className="col-lg-2 col-md-4 col-6">
                    <a href="https://esewa.com.np/#/home"><img src="https://developer.esewa.com.np/_images/esewa_logo.png" class="img-fluid" alt="eSewa logo"/></a>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <a href="htttps://google.com"><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_dark_color_272x92dp.png" class="img-fluid" alt="Google logo"/></a>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <a href="https://ntb.gov.np/"><img src="../../static/images/ilovenepal.png" class="img-fluid" alt="I love Nepal"/></a>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <a href="https://nepallife.com.np/en/home"><img src="https://www.nepallife.com.np/storage/settings/nepallife-logo_1.jpg" class="img-fluid" alt="Nepal Life Insurance logo"/></a>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <a href="https://amadeus.com/en"><img src="https://www.namastenepaltravels.com/themes/images/amadeus-training-in-nepal.png" class="img-fluid" alt="Amadeus Training in Nepal logo"/></a>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <a href="https://www.imepay.com.np/"><img src="https://www.imepay.com.np/assets/logo/ime-main.svg" class="img-fluid" alt="IME Pay logo"/></a>
                </div>
            </div>
        </div>
    </section>
  
  );
}
