import React from 'react'
import "./projects.css"
import  Works from './Works'
const projects = () => {
    return (
        <section className='projects section' id='projects'>
            <h2 className='section__title'>Projects</h2>
            <span className='section__subtitle'>Here you can find some of the projects that i created recently</span>
            
            <Works/>
        </section>
    )
}

export default projects
