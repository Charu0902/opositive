import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
function sendEmailShare(event){
  
    var bodyFormData = new FormData();

      let shareemail = document.getElementById('shareemail').value;
      let sharehidden = document.getElementById('sharehidden').value;

    //   let interest = selectedhome.toString();
 
  bodyFormData.append('shareemail', shareemail); 
  bodyFormData.append('formname', sharehidden); 
  
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
const Shareform = () => {
    return (
        <>
        <section className="">
        <div className="container">
        <p>
                      Tell us what else we can share with you to help you grow.   
                      </p>
          <div className="row">
            <div className="col-lg-12 col-12">
              <Form method="post" id="shareform" onSubmit={sendEmailShare}>
                <div className="row">
                 
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="shareemail"
                        for = "shareemail"
                        required
                        placeholder="Enter your email ID *"
                        id="shareemail"
                      />
                    </Form.Group>
                    <Form.Group className="form-bgd popupform">
                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for = "sharehidden"
                         value = 'Share Page Form'
                        id="sharehidden"
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

export default Shareform;    