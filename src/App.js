
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';


function App() {
  const [lodaing, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])
  return (
    <>
      {lodaing ? (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
      ):
      (
        <>
          <Header/>
          <main className='main'>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            
          </main>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
