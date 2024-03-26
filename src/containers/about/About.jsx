import React from 'react'
import './about.css'

export const About = () => {
  return (
    <div className='portfolio__about-col'>
        <div className='portfolio__about'>
              <h1>Who I am</h1>
              <p>
                  I am a M.Sc. student in Interaction Technology & Design at Umeå University.
                  Currently, I am studying my final term and aiming to learn as much as possible about
                  every subject that comes across. I have a great interest and experiences in both UX
                  design and full-stack development. 
              </p>
              <h1>What I do</h1>
              <p>
                  Currently writing my master thesis based on Pallang, a mobile app available on both iOS and Android that I have developed myself.
                  I am also acting as supervisor at a course at Umeå University where I supervise students in their efforts to develop their own social media applications. 
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
