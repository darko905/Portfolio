import React from 'react'
import './footer.css'
import Logo from '../../assets/logo.png'
import Instagram from '../../assets/instagram.png';
import Guthub from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h2 className='footer__title'>
                    <img src={Logo} alt="Logo" />
                </h2>
                
                <ul className='footer__list'>
                    <li>
                        <a href='#home' className='footer__link'>Home</a>
                    </li>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href='#projects' className='footer__link'>Projects</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href='https://instagram.com/djukicdarko?utm_medium=copy_link' aria-label='instagram' className='footer__social-link' >
                        {/* <i className="bx bxl-instagram"></i> */}
                        <img src={Instagram} alt="Instagram logo" />
                    </a>
                    <a href='https://www.linkedin.com/in/darko-djukic-3a54b822b' aria-label='Linkedin' className='footer__social-link' >
                    <img src={Linkedin} alt="Linkedin logo" />
                    </a>
                    <a href='https://github.com/darko905' aria-label='Github' className='footer__social-link' >
                    <img src={Guthub} alt="Github logo" />
                    </a>                    
                </div>
                <span className='footer__copy'>
                    &#169; 2022 Copyrights All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer
