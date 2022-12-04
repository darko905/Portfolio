import React from 'react'

const Frontend = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>Frontend developer</h3>
            <div className='skills__box'>
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i className='bx bxl-html5'></i>
                        <div>
                            <h3 className='skills__name'>Html5</h3>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i className='bx bxl-css3'></i>
                        <div>
                            <h3 className='skills__name'>Css3</h3>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i className='bx bxl-javascript'></i>
                        <div>
                            <h3 className='skills__name'>JavaScript</h3>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i className='bx bxl-react' ></i>
                        <div>
                            <h3 className='skills__name'>React JS</h3>
                        </div>
                    </div>
                </div>

                <div className='skills__group'>
                    <div className='skills__data'>
                        <i className='bx bxl-typescript' ></i>
                        <div>
                            <h3 className='skills__name'>TypeScript</h3>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i className='bx bxl-bootstrap' ></i>
                        <div>
                            <h3 className='skills__name'>Bootstrap</h3>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i className='bx bxl-git'></i>
                        <div>
                            <h3 className='skills__name'>Git/Github</h3>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i className='bx bxl-figma'></i>
                        <div>
                            <h3 className='skills__name'>Figma</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
