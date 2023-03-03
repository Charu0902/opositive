import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
function sendEmailContribute(event){
  
    var bodyFormData = new FormData();

      let contributeemail = document.getElementById('contributeemail').value;
      let hiddencontribute = document.getElementById('hiddencontribute').value;
    //   let interest = selectedhome.toString();
 
  bodyFormData.append('contributeemail', contributeemail); 
  bodyFormData.append('formname', hiddencontribute); 
  
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
const Contributeform = () => {
    return (
        <>
        <section className="">
        <div className="container">
        <p>
                      Tell us what else we can share with you to help you grow.   
                      </p>
          <div className="row">
            <div className="col-lg-12 col-12">
              <Form method="post" id="shareform" onSubmit={sendEmailContribute}>
                <div className="row">
                 
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="contributeemail"
                        for ='contributeemail'
                        required
                        placeholder="Enter your email ID *"
                        id="contributeemail"
                      />
                    </Form.Group>
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='hiddencontribute'
                        id="hiddencontribute"
                        value="Contribute Page Form"
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form">
                SUBMIT
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
        </>
        );
    };

export default Contributeform;    