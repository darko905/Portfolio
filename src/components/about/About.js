import React from 'react'
import './about.css';
import CV from '../../assets/Darko Djukic.pdf'
import AboutImg  from '../../assets/Darko Djukic.webp'
import Potpis from '../../assets/Potpis.webp'
const About = () => {
    
    return (
        <section className='about section' id='about'>
            <h2 className='section__title'>About me</h2>
            <span className='section__subtitle'>Personal Info</span>
            <div className='about__container container grid'>
                <img src={AboutImg} className='about__img' alt='Darko Djkic'/>

                <div className='about__data'>
                    <h3 className='about__title'>Get to know about more</h3>
                    <p className='about__descritpion'>
                        Hello, my name is Darko Djukic and I'm a passionate Front End Developer using web technologies to build amazing products and focusing on solving problems for differnt niches and different industries using the power of technology.
                        Good interpersonal skills to build good working relationships. Excellent team player with global mindset.
                        I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.
                    </p>
                    <div>
                        <img src={Potpis} className='about__img-signature' alt='Potpis'/>

                    </div>
                    <a href={CV} download='Darko Djukic Cv'>
                        <button href={CV} className='button button--flex'>Resume <i className="uil uil-file"></i></button>
                    </a>
                </div>
            </div>


        </section>
    )
}

export default About
