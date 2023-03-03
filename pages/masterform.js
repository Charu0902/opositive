import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
function sendEmailMaster(event){
  
    var bodyFormData = new FormData();
   let mastername = document.getElementById('mastername').value;
      let masteremail = document.getElementById('masteremail').value;
      let masterno = document.getElementById('masterno').value;
      let masterhidden = document.getElementById('masterhidden').value;
    //   let interest = selectedhome.toString();
  bodyFormData.append('mastername', mastername);
  bodyFormData.append('masteremail', masteremail); 
  bodyFormData.append('masterno', masterno); 
  bodyFormData.append('formname', masterhidden); 
  
  
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
const Masterform = () =>{
    return(
        <>
       
      <div className="master-form"> 
      <h2 className="masteform-haeding">Take your first step from being an Enthusiast to an Expert.</h2>
      <Form method="post" id="masterform" onSubmit={sendEmailMaster}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                            <Form.Label>Name*</Form.Label>
                      <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="mastername"
                        for ='mastername'
                        
                        required
                        id="mastername"
                        
                      />
                    </Form.Group>
                  </div>
                
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Email Address*</Form.Label>

                      <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="masteremail"
                        for ='masteremail'
                        required
                        
                        id="masteremail"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                    <Form.Label>Phone Number*</Form.Label>

                      <Form.Control
                        type="tel"
                        className="mobile-home-input"
                        name="masterno"
                        for ='masterno'
                        pattern="[0-9]{10}"
                        maxlength="10"
                        required
                        id="masterno"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                   

                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='masterhidden'
                        id="masterhidden"
                        value = "Master Page Form"
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="btn-form">
               SUBMIT
                </Button>
              </Form>

      </div>
    
        </>
    )
}

export default Masterform;