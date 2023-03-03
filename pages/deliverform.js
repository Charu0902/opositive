import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
function sendEmailDeliver(event){
  
    var bodyFormData = new FormData();
   let deliverdomain = document.getElementById('deliverdomain').value;
      let deliverno = document.getElementById('deliverno').value;
      let deliveremail = document.getElementById('deliveremail').value;
      let deliverhidden = document.getElementById('deliverhidden').value;
    //   let interest = selectedhome.toString();
  bodyFormData.append('deliverdomain', deliverdomain);
  bodyFormData.append('deliverno', deliverno); 
  bodyFormData.append('deliveremail', deliveremail); 
  bodyFormData.append('formname', deliverhidden); 
  
  axios({
    method: "post",
    url: "https://opositive.io/PHPMailer-master/opositive/common-sender.php",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
     
      window.location.href = "thankyou";
  
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
    event.preventDefault();
  }
const Deliverform = () =>{
    return(
        <>
        <section className="map-background">
        <div className="container">
            <h2>Want to grow your business with us?  </h2>
            <p>Fill out the form above and download a comprehensive guide to SEO Essentials for DIY Growth!</p>
          <div className="row">
            <div className="col-lg-5 col-12">
              <Form method="post" id="deliverform" onSubmit={sendEmailDeliver}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="deliverdomain"
                        for ='deliverdomain'
                        placeholder="Enter your Domain Name *"
                        
                        required
                        id="deliverdomain"
                        
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="tel"
                        className="mobile-home-input"
                        name="deliverno"
                        for ='deliverno'
                        pattern="[0-9]{10}"
                        maxlength="10"
                        required
                        id="deliverno"
                        placeholder="Enter your Contact Number *"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="deliveremail"
                        for ='deliveremail'
                        required
                        placeholder="Enter your email ID *"
                        id="deliveremail"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='deliverhidden'
                        id="deliverhidden"
                        value = 'Deliver Page Form'
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form">
                GET STARTED
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Deliverform;