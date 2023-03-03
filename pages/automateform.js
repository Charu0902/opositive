import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
function sendEmailAutomate(event){
  
    var bodyFormData = new FormData();
    let automatetext = document.getElementById('automatetext').value;
      let automateemail = document.getElementById('automateemail').value;
      let hiddenautomate = document.getElementById('hiddenautomate').value;
    //   let interest = selectedhome.toString();

    bodyFormData.append('automatetext', automatetext); 
  bodyFormData.append('automateemail', automateemail); 
  bodyFormData.append('formname', hiddenautomate); 
  
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
const Automateform = () => {
    return (
        <>
        <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <Form method="post" id="shareform" onSubmit={sendEmailAutomate}>
                <div className="row">
                 
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                    <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="automatetext"
                        for ='automatetext'
                        required
                        placeholder="Tell us your Idea"
                        id="automatetext"
                      />
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="automateemail"
                        for ='automateemail'
                        required
                        placeholder="Enter your email ID *"
                        id="automateemail"
                      />
                    </Form.Group>
                    <Form.Group className="popupform">
                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='hiddenautomate'
                        id="hiddenautomate"
                        value="Automate Page Form"
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

export default Automateform;    