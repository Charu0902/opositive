import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import axios from "axios";
function sendEmailJob(event){
  
    var bodyFormData = new FormData();
   let fullname = document.getElementById('fullname').value;
      let candidateemail = document.getElementById('candidateemail').value;
      let candidateno = document.getElementById('candidateno').value;
      let linkdinurl = document.getElementById('linkdinurl').value;
      let careerresume = document.getElementById('careerresume');
      let jobrole = document.getElementById('jobrole').value;
      // let jobapplyhidden = document.getElementById('jobapplyhidden').value;

    //   let interest = selectedhome.toString();
  bodyFormData.append('fullname', fullname);
  bodyFormData.append('candidateemail', candidateemail); 
  bodyFormData.append('candidateno', candidateno); 
  bodyFormData.append('linkdinurl', linkdinurl); 
  bodyFormData.append('careerresume', careerresume); 
  bodyFormData.append('jobrole', jobrole); 
  // bodyFormData.append('formname', jobapplyhidden); 
  
  
  axios({
    method: "post",
    url: "https://opositive.io/PHPMailer-master/opositive/carrer-sender.php",
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
const Jobapplyform = () =>{
  useEffect(() => {
    const fileUploader = document.getElementById('careerresume');

fileUploader.addEventListener('change', (event) => {
  const files = event.target.files;
  console.log('files', files);
  
  const feedback = document.getElementById('feedback');
  const msg = `File ${files[0].name} uploaded successfully!`;
  feedback.innerHTML = msg;
});

  });
    return(
        <>
       
      <div className="job-apply-form"> 
      <h2 className="job-detail-form-haeding">APPLY FOR JOB</h2>
      <Form method="post" id="jobapplyform" onSubmit={sendEmailJob}  enctype="multipart/form-data">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row ">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>Full Name*</Form.Label>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                        <Form.Control
                        type="text"
                        className="mobile-home-input"
                        name="fullname"
                        for ='fullname'
                        
                        required
                        id="fullname"
                        
                      />
                        </div>
                         
                     
                    </Form.Group>
                  </div>
                
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>Email*</Form.Label>
                        </div>
                        <div className="col-lg-8 col-sm-12">

                        <Form.Control
                        type="email"
                        className="mobile-home-input"
                        name="candidateemail"
                        for ='candidateemail'
                        required
                        
                        id="candidateemail"
                      />
                        </div>
                   

                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>Phone*</Form.Label>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                        <Form.Control
                        type="tel"
                        className="mobile-home-input"
                        name="candidateno"
                        for ='candidateno'
                        pattern="[0-9]{10}"
                        maxlength="10"
                        required
                        id="candidateno"
                      />
                        </div>
                   

                      
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>LinkedIn Profile*</Form.Label>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                        <Form.Control
                        type="url"
                        className="mobile-home-input"
                        name="linkdinurl"
                        for ='linkdinurl'
                        pattern="https://.*"
                       
                        id="linkdinurl"
                      />
                        </div>
                   

                      
                    </Form.Group>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd row job-apply-input-row">
                        <div className="col-lg-4 col-sm-12">
                        <Form.Label>Resume/CV*</Form.Label>
                        </div>
                        <div className="col-lg-8  col-sm-12">
                        <Form.Control
                      type="file"
                      className="mobile-home-input"
                      name="careerresume"
                      for ='careerresume'
                      required
                      id="careerresume"
                    />
                        </div>
                   

                      
                    </Form.Group>
                    <p id="feedback"></p>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                   

                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="jobrole"
                        for ='jobrole'
                        id="jobrole"
                        value = ""
                      />
                    </Form.Group>
                  </div>
                  {/* <div className="col-lg-12 col-sm-12">
                    <Form.Group className="form-bgd ">
                   

                      <Form.Control
                        type="hidden"
                        className="mobile-home-input"
                        name="formname"
                        for ='jobapplyhidden'
                        id="jobapplyhidden"
                        value = "Job apply Form"
                      />
                    </Form.Group>
                  </div> */}
                </div>

                <Button variant="primary" type="submit" className="btn-form">
                APPLY NOW
                </Button>
              </Form>

      </div>
    
        </>
    )
}

export default Jobapplyform;