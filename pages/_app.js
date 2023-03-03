import Head from 'next/head'

import '../styles/globals.css'
import '../styles/desktop.css'
import '../styles/mobile.css'
import Footer from './footer'
import Header from './header'
import '../utils/script.js'
import React from "react";
import $ from 'jquery' 
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {

    //chatbot code
    if(window.innerWidth > 500){
      // document.querySelector('.iticks-pop-button').style.display = 'none';
      (function(I, L, T, i, c, k, s) {if(I.iticks) return;I.iticks = {host:c, settings:s, clientId:k, cdn:L, queue:[]};var h = T.head || T.documentElement;var e = T.createElement(i);var l = I.location;e.async = true;e.src = (L||c)+'/client/inject-v2.min.js';h.insertBefore(e, h.firstChild);I.iticks.call = function(a, b) {I.iticks.queue.push([a, b]);};})(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', 'yAQY5LdYrT8Xot8KA_c', {});

    }

    function popupScroll(){
      var popuoPosition = window.scrollY;
      var modal = document.getElementById('myModal1');
    var popuplimit = false;
    window.addEventListener('scroll', function() {
      var modal = document.getElementById('myModal1');
      popuoPosition = window.scrollY;
    
        if (popuoPosition >= 1000 && popuoPosition <= 2000 ) {
          // modal.style.display = 'block';
          if(popuplimit!= true){
            popuplimit = true;
              setTimeout(function(){
                modal.style.display = 'block';
    
              }, 3000 )
          }
        } 
      
        
    
    })
    }
    
    popupScroll();
 });
 const schema =   { 
  
  "@context": "https://schema.org/", 

  "@type": "WebSite", 

  "name": "Opositive", 

  "url": "https://opositive.io/", 

  "potentialAction": { 

    "@type": "SearchAction", 

    "target": "https://opositive.io/{search_term_string}", 

    "query-input": "required name=search_term_string" 

  } 

} 
const organizationschema =   { 
  "@context": "https://schema.org", 
  "@type": "Organization", 
  "name": "Opsotive", 
  "alternateName": "Obbserv", 
  "url": "https://opositive.io/", 
  "logo": "https://opositive.io/assets/logo-red.png", 
  "sameAs": [ 
    "https://www.instagram.com/opositive.io/", 

    "https://www.linkedin.com/company/o-positive/" 
  ] 
} 
  return (

    <>
    <Header></Header>
      <Head>
      <link rel="icon" href="/favicon.png"/>
        {/* you can add metadata here, for all pages */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
      </Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationschema) }}
        />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
    
}

export default MyApp
