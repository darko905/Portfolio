import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_qxmw5m8', 
        'template_93ekmev', 
        form.current, 'OOrxN05Xj4k8c73WX')
    e.target.reset();
    }
    return (
        <section className='section contact' id='contact'>
            <h2 className='section__title'><span>Contact</span></h2>
            <span className='section__subtitle'>Submit the form below so i can get back to you as soon as possible</span>
            
            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Talk to me</h3>

                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i className='bx bx-mail-send contact__card-icon'></i>

                            <h3 className='contact__card-title'>E-mail address:</h3>
                            <span className='contact__card-data'>djukicdarko58@gmiail.com</span>

                        </div>

                        <div className='contact__card'>
                            <i className='bx bx-phone contact__card-icon'></i>

                            <h3 className='contact__card-title'>Phone number:</h3>
                            <span className='contact__card-data'>+381669051258</span>

                        </div>

                        <div className='contact__card'>
                            <i className='bx bx-street-view contact__card-icon'></i>

                            <h3 className='contact__card-title'>Postall address:</h3>
                            <span className='contact__card-data'>Uzice, Serbia</span>

                        </div>
                    </div>
                </div>
                <div className='contact__content'>
                    <h3 className='contact__title'>Say Hello</h3>

                    <form ref={form} onSubmit={sendEmail} className='contact__form'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Name</label>
                            <input 
                            type="text" 
                            name='name' 
                            className='contact__form-input' 
                            placeholder='Insert your name'/>
                        </div>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Mail</label>
                            <input 
                            type="email" 
                            name='email' 
                            className='contact__form-input' 
                            placeholder='Insert your email'/>
                        </div>
                        <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag'>Message</label>
                            <textarea 
                            name='message' 
                            cols="30" 
                            rows="10"
                            className='contact__form-input' 
                            placeholder='Write your message'
                            ></textarea>
                        </div>
                        <button className='button button-flex'>Send Message<i className="uil uil-message"></i></button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
