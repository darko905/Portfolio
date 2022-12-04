import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        <a href='https://www.linkedin.com/in/darko-djukic-3a54b822b' aria-label='Linkedin' className='home__social-icon' target="_blank">
            <i className="uil uil-linkedin"></i>
        </a>
        <a href='https://github.com/darko905' className='home__social-icon' aria-label='Github' target="_blank">
            <i className="uil uil-github"></i>
        </a>
        <a href='https://instagram.com/djukicdarko?utm_medium=copy_link' aria-label='instagram' className='home__social-icon' target="_blank">
            <i className="uil uil-instagram-alt"></i>
        </a>
    </div>
  )
}

export default Social
