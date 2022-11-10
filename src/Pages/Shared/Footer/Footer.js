import React from 'react';
import logo from '../../../Assets/banner/logo.jpg';


const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
        <div>
                <img className='w-16' src={logo} alt='' />
          <p>Immigration $ Consultancy <br/>Providing reliable Information </p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
        <a href="/" className="link link-hover">Education</a> 
        <a href="/" className="link link-hover">Jobs</a> 
        <a href="/" className="link link-hover">Conference</a> 
        <a href="/" className="link link-hover">Medical</a>
        <a href="/" className="link link-hover">Travel</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
        <a href="/" className="link link-hover">About us</a> 
        <a href="/" className="link link-hover">Contact</a> 
        <a href="/" className="link link-hover">Jobs</a> 
        <a href="/" className="link link-hover">Email</a>
        </div> 
        <div>
          <span className="footer-title">Rules</span> 
        <a href="/" className="link link-hover">Terms of use</a> 
        <a href="/" className="link link-hover">Privacy policy</a> 
        </div>
      </footer>
    );
};

export default Footer;