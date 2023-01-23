import React from 'react'
import './about.css'

export const About = () => {
  return (
    <div className='portfolio__about-col'>
        <div className='portfolio__about'>
              <h1>Who I am</h1>
              <p>
                  I am a 22 year old interaction and design student at Umeå University.
                  Currently, I am studying my 8th term and aiming to learn as much as possible about
                    every subject that comes across. I have a great interest and experiences in both UX
                  design and frontend development. 
              </p>
              <h1>What I do</h1>
              <p>
                  I currently work as a consultant and CDO at WeKnowIT. In my present role I mainly do UX-design
                  but also some front-end development.
              </p>
              <h1>My skills</h1>
              <p>
                  I posess experience in several frameworks, softwares and programming languages, 
                  including but not limited to: Figma, ReactJS, .NET, Java, Android Studios (Kotlin) and Adobe Suite.
              </p>
        </div>
        <div className="portfolio__about-img hero image">
            <img src={require("../../assets/ppic/me.jpg")} alt=" "/>
        </div>
    </div>
  )
}

export default About
