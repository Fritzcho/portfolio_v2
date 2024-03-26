import React from 'react'
import { Subheader } from '../../../components'

function Kuben() {
  return (
    <div className='portfolio__project'>
        <Subheader/>
        <div className='portfolio__heading'>
            <h1 data-text="Kuben">Kuben</h1>
            <h2>Keep<span style={{color: "#87CEEB"} }> calm </span>and take another<span style={{color:"#059033"}}> bite</span>.</h2>
        </div>
        <img className='portfolio__project-img' src={require("../../../assets/kuben/cover.jpg")}/>
        <div className='portfolio__project-ingress'>
            <p>
                Daniel Malca, a close friend of mine, was opening a new restaurant and was in need of a logotype, website
                and brand material. I designed and developed a website for him in ReactJS, and together with a graphic designer 
                brought forth a logotype, menu and other necessary branding material. 
            </p>
            <a className='project__button' href='https://kubenumea.se/'>VISIT THE WEBSITE</a>
        </div>

        <div className='portfolio__project-content'>
            <h1>Process</h1>
            <p>Our goal was to not only create a generic restaurant but also a strong brand. We wanted the brand to be easily recognizable and fitting for merchandise and other expansions in the future. So taking inspiration from the shape and location of the restaurant we created Kuben. Meaning Cube in Swedish it felt relevant since it was a container-restaurant located at a street called Formvägen, meaning Shape-street. 
            </p>
            <img src={require("../../../assets/kuben/img2.jpg")}/>
            <p>I then went on to design the website in Figma based on the brand material and colors decided. In this particular project, Daniel gave me completely free hands and trusted my judgement, therefore he was not at all involved during the design or development but rather just handed me list of requirements and expected content. Based on the Figma prototype, I also then built the website in ReactJS.
            </p>
            <a className='project__button' href='https://github.com/Fritzcho/kubenumea'>SEE GIT REPO</a>
        </div>
    </div>
  )
}

export default Kuben