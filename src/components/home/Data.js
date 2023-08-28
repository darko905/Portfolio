import React from 'react'
import Hi from '../../assets/Hi.gif'
import Loacation from '../../assets/pin.png'


const Data = () => {
  
  return (
    <div className='home__data'>
        <h1 className='home__title'>Front-End <span>React</span> Developer <img src={Hi} alt='Hi' className='hi'/></h1>
        
        <p className='home__descritpion'>I'm Darko Đukić. A passionate Front-end React Developer based in Uzice, Serbia. <img src={Loacation} className='home__description-location' alt="Loaction logo" /></p>
        <a href='#contact'><button className='button button-flex'>Contact Me <i className="uil uil-message"></i></button></a>
    </div>
  )
}

export default Data
