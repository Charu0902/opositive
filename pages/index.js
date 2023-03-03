import Head from 'next/head'

import { getEvents, getPosts } from '../utils/wordpress';
import Link from "next/link";


import "../styles/Home.module.css";
import $ from 'jquery';
import React, { useState, useEffect } from 'react'
import HomePage from './home';

export default function Home() {

 

  return (
    
    <>
      <HomePage></HomePage>
    </>
  )

}

