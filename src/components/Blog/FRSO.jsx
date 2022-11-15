import React from 'react'
import BackToTopButton from '../BackToTopButton';
import Footer from '../Footer';
import Template from '../Template';
import './FRSO.css';

const FRSO = () => {
  return (
    <div>
        <Template name = "Blog" fname = "/Freight Rail Supply Optimization"/>
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default FRSO