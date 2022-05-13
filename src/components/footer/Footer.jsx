import React from 'react'
import "./footer.scss"
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className="footer__logo">LUC CODE</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com/laohac0511"><FaFacebookF /></a>
                <a href="https://facebook.com/laohac0511"><FiInstagram /></a>
                <a href="https://facebook.com/laohac0511"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy;Copyright 2022. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer