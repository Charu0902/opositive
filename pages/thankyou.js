import React from "react";
// function Redirecthome(){
// setTimeout(function(){
//     window.location.href = "/";
// }, 3000)
// }
 function RedirectButton(){
     window.location.href = "/";
 }
const Thankyou = () =>{
    return(
        <>
        <div className="container thankyoupageparent">
            <img src="./assests/Group.webp"/>
             <h1 className="thankyouheading">Thank You for Contacting Us!</h1> 
             <p className="thankyoupara">Our team will reach out to you shortly.</p>
             <button className="thankyou-button" type="button" onClick={RedirectButton}>
                 <img src="./assests/backarrow.png"/>  Back to Homepage
             </button>
        </div>
        </>
    )
}

export default Thankyou;