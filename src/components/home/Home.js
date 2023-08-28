import React from 'react';
import Data from './Data';
import './home.css';
import Social from './Social';
import Js from '../../assets/JavaScript.png'
import Html from '../../assets/html.svg';
import ReactJs from '../../assets/ReactJS.png'
import Sass from '../../assets/Sass.png'
import Css from '../../assets/css.svg'
import Git from '../../assets/Git.png'


const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
            <Social/>
            <div className='home__img'>
              <div className='circle app__flex'>
                <img src={Html} alt="Html-logo" />
              </div>
              <div className='circle app__flex'>
                <img src={Css} alt="Css-logo" />
              </div>
              <div className='circle app__flex'>
                <img src={Js} alt="JavaScript-logo" />
              </div>
              <div className='circle app__flex'>
                <img src={Sass} alt="Sass-logo" />
              </div>
              <div className='circle app__flex'>
                <img src={ReactJs} alt="React-logo" />
              </div>
              <div className='circle app__flex'>
                <img src={Git} alt="-logo" />
              </div>
            </div>
            <Data/>
            
        </div>
      </div>
    </section>
  )
}

export default Home
