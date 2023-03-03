import Link from "next/link";
import Popup from "./popup";
import $ from 'jquery' 

import React, { useState, useEffect } from 'react'



function ShowModal(){
  var modal = document.getElementById('myModal1');
  modal.style.display = 'block';
}
function Hidpopup(){
 var modal = document.getElementById('myModal1');
 modal.style.display = 'none';
}


export default function Header() {
    useEffect(() => {
        function Headerscroll(){
            var scrollPosition = window.scrollY;
          var logoContainer = document.getElementById('myhead');
          var navLinkList = document.getElementById('navLinkList');
          window.addEventListener('scroll', function() {
            var logoContainer = document.getElementById('myhead');
            var navLinkList = document.getElementById('navLinkList');
          
              scrollPosition = window.scrollY;
          
              if (scrollPosition >= 30) {
                  logoContainer.classList.add('headerscrolled');
                  navLinkList.classList.remove('navlinkslist');
                  
              } else {
                  logoContainer.classList.remove('headerscrolled');
                  navLinkList.classList.add('navlinkslist');
                 
          
              }
              
          
          })
          }
          
          Headerscroll();

          $(document).ready(function(){
            $(".dropdown-toggle").click(function(){
              $(".dropdown-menu").toggle();
            });
          });
    })
    return (
        <>
        {/* Desktop Carousel */}
         <nav className="header navbar-expand-sm" id='myhead'>
         <div className="container-fluid">
    <Link className="navbar-brand" href="/">       
    <a>
    <img className='header-logo' src='../assests/logo-red.webp' alt='Opositve Logo'/>

        </a>     
</Link>
<div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav navlinkslist" id='navLinkList'>
        <li className="nav-item">
         
          <Link href='/deliver' className="nav-link">Deliver</Link>
        </li>
        <li className="nav-item">
         
         <Link href='/automate' className="nav-link">Automate</Link>
       </li>
       <li className="nav-item">
         
         <Link href='/careers' className="nav-link">Careers</Link>
       </li>
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/share" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Share
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/blog">Blogs</a></li>
            <li><a class="dropdown-item" href="/master-class">Masterclass</a></li>
            <li><a class="dropdown-item" href="/contribute">Contribute</a></li>
          </ul>
        </li>
       <li className="nav-item contact-us-button">
        <button type = "button"className='Navbutton' id = 'navpopup' onClick={ShowModal}>
        Contact Us
        </button>
        </li>    
        
        
       
      </ul>
    </div>
</div>
</nav>
{/* Mobile craousel */}
<nav class="navbar navbar-expand-sm bg-dark navbar-dark" id="mobile-nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img className='header-logo' src='../assests/logo-red.webp' alt='Opositve Logo'/>

    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" id='Frieshamburger'>
      {/* <span class="navbar-toggler-icon"></span> */}
      <input type="checkbox" id="checkbox4" class="checkbox4 visuallyHidden"/>
        <label for="checkbox4">
            <div class="hamburger hamburger4">
                <span class="bar bar1"></span>
                <span class="bar bar2"></span>
                <span class="bar bar3"></span>
                <span class="bar bar4"></span>
                <span class="bar bar5"></span>
            </div>
        </label>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" href="/deliver">Deliver</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/automate">Automate</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/careers">Careers</Link>
        </li>    
        <li class="nav-item dropdown">
         
          <a class="nav-link dropdown-toggle" href="/share" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Share
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="dropdownmobilemenu">
            <li><a class="dropdown-item" href="/blog">Blogs</a></li>
            <li><a class="dropdown-item" href="/master-class">Master Class</a></li>
            <li><a class="dropdown-item" href="/contribute">Contribute</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="myModal1" class="modal1">


<div class="modal-content1">
  <span class="close1" onClick={Hidpopup} id = 'close'>&times;</span>
  <Popup></Popup>
</div>

</div>
        </>
    )
  }