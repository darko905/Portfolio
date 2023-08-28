import React from 'react'
import Instagram from '../../assets/instagram.png';
import Guthub from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';

const Social = () => {
  return (
    <div className='home__social'>
        <a href='https://www.linkedin.com/in/darko-djukic-3a54b822b' aria-label='Linkedin' className='home__social-icon' >
            <img src={Linkedin} alt="Linkeding logo" />
        </a>
        <a href='https://github.com/darko905' className='home__social-icon' aria-label='Github'>
            <img src={Guthub} alt="Github logo" />
        </a>
        <a href='https://instagram.com/djukicdarko?utm_medium=copy_link' aria-label='instagram' className='home__social-icon'>
          <img src={Instagram} alt="Instagram logo" />
        </a>
    </div>
  )
}

export default Social
