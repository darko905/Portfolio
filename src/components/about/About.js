import React from "react";
import "./about.css";
import CV from "../../assets/Darko Djukic.pdf";
import AboutImg from "../../assets/Darko Djukic.png";
import Potpis from "../../assets/Potpis.png";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">
        <span>About me</span>
      </h2>
      <span className="section__subtitle">Personal Info</span>
      <div className="about__container container grid">
        <img src={AboutImg} className="about__img" alt="Darko Djkic" />

        <div className="about__data">
          <h3 className="about__title">
            A dedicated Front-end Developer based in Uzice, Serbia
          </h3>
          <p className="about__descritpion">
            As a frontend React developer, I am passionate about creating
            user-friendly web applications. With expertise in React, JavaScript,
            HTML, and CSS, I specialize in building dynamic interfaces that
            enhance the user experience. Moreover, I am proficient in
            version control systems like Git, which allows me to effectively
            collaborate with teams and manage code repositories. My portfolio
            showcases projects that demonstrate my skills in developing
            responsive web applications with clean and sustainable code. I
            emphasize the importance of design and user experience to create
            intuitive interfaces that are easy to navigate. I am always ready
            for teamwork and collaboration with designers and backend
            developers.
          </p>
          <div>
            <img src={Potpis} className="about__img-signature" alt="Potpis" />
          </div>
          <a href={CV} download="Darko Djukic Cv">
            <button href={CV} className="button button--flex">
              Resume <i className="uil uil-file"></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
