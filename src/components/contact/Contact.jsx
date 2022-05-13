import React from 'react'
import "./contact.scss"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from "react"

import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        // service_id, template_id, template_param, publickey
        emailjs.sendForm('service_wqfbtxc', 'template_n3g9pvm', form.current, 'IUjaOSa8jYS2ybQr1')

        e.target.reset()
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h4>lucnguyentu45@gmail.com</h4>
                        <a href="mailto:lucnguyentu45@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h4>Nguyen Tu Luc</h4>
                        <a href="https://m.me/laohac0511" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h4>0984160070</h4>
                        <a href="https://api.whatsapp.com/send?phone=0984160070" target="_blank">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact