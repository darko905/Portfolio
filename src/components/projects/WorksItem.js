import React from 'react'

const WorksItem = ({item}) => {
   
    return ( 
        <div className='work__card' key={item.id}>
            <img src={item.image} alt={item.title} className='work__img'/>
            <h3 className='work__title'>{item.title}</h3>
            <p className='work__description'>{item.description}</p>
            <div className='work__btn'>
                <a href={item.link1}>
                    <button className='work__button'>
                        Demo <i className="uil uil-eye work__button-icon" ></i>
                    </button>
                </a>
                <a href={item.link2}>
                    <button className='work__button'>
                        Code <i className="uil uil-github work__button-icon"></i>
                    </button>
                </a>
                
            </div>

        </div>
       
    )
}

export default WorksItem
