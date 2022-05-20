import React from 'react'
import './about.css'

export const About = () => {
  return (
    <div className='portfolio__about-row'>
      <div className='portfolio__about'>
          <h1 className='portfolio__about-header'>Who I am</h1>
          <p>
            I am a 22 year old interaction and design student at Umeå University.
            Currently, I am studying my 6th term and aiming to learn as much as possible about
            every subject that comes across. I have a great interest and experiences in both UX
            design and frontend development. 
          </p>
          <h1 className='portfolio__about-header'>What I do</h1>
          <p>
            I currently work as a consultant and CDO at WeKnowIT. In my present roles
            I do a variety of work such as UX design, WP-development and internal work. 
          </p>
          <h1 className='portfolio__about-header'>What I am good at</h1>
          <p>
            Below are listed some, but not all, of my skills. I do always try to
            branch out further and add more to these though! <br/>
          </p>
          <span className='portfolio__about-span'>
              React <br/>
              Figma <br/>
              Elementor <br/>
              ASP.NET <br/>
              Java <br/>
              Adobe/Affinity suite <br/>
            </span>
      </div>
    </div>
  )
}

export default About
