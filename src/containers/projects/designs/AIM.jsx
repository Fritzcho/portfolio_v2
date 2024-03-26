import React from 'react'
import { Subheader } from '../../../components'

function AIM() {
    return (
        <div className='portfolio__project'>
            <Subheader/>
            <div className='portfolio__heading'>
                <h1 data-text="Kuben">AI Medtech</h1>
                <h2>AI<span style={{color: "#87CEEB"} }> powered </span>diagnostic<span style={{color:"#059033"}}> solutions</span>.</h2>
            </div>
            <img className='portfolio__project-img' src={require("../../../assets/aim/aim-cover.png")}/>
            <div className='portfolio__project-ingress'>
                <p>
                    I had the pleasure to work with AI Medical Technology through my employer WeKnowIT.

                    AI Medical is a medtech company dedicated to developing AI powered diagnostic solutions that enables easier, 
                    faster and more reliable diagnoses, mainly for skincancers.

                </p>
                <a className='project__button' href='https://www.aimedtech.com/'>VISIT THE WEBSITE</a>
            </div>
    
            <div className='portfolio__project-content'>
                <h1>Process</h1>
                <p>
                    AI Medical hired us at WeKnowIT to create a new webpage that could replace their old one, which they thought was too
                    much "medical" and less so "medtech". They wanted a site that was experienced as more modern and technologically 
                    advanced than their previous one. Meanwhile, they wanted to keep their current logotype and branding material
                    as they were quite happy with it. 

                    I was assigned to find a solution and create a design protoype that fully fit their needs that my colleagues could
                    later develop. 
                </p>
                <img src={require("../../../assets/aim/aim-img2.png")}/>
                <p>
                    We started off with defining a moodboard based on other websites and companies that they found inspiration in. It 
                    became clear that they wanted a medically inspired website but with animations, graphics and a deeper UX focus
                    that created a more modern atmosphere.

                    Based on these requirements, I was able to go on and create a mockup to define a style in which the pages would be
                    built in. Once this style was approved by the customers, I could go on and create full-on Figma prototypes.
                </p>
                <img src={require("../../../assets/aim/aim-img3.png")}/>
                <p>
                    Having weekly standups with AI Medical to keep them updated with our progress at each stage assured us that we 
                    were always heading in the right direction. This enabled me to create a more advanced protoype for each weekly
                    standup which we could tweak together until it was approved and I could go on to a more advanced stage of the prototyping.

                    The first week I presented lo-fi prototypes, the second week mid-fi, third week hi-fi and the final two weeks I could
                    focus on animations, iconography, images and other graphics. 

                    In the end, AI Medical were very happy with the results. 
                </p>
                <a className='project__button' href='https://www.figma.com/file/MfiuRf4Rr2WzxMumcDt8Xj/Webpage?node-id=1133%3A1613&t=Qc4lpBntrNNhNr61-1'>SEE FIGMA PROTOTYPE</a>
            </div>
        </div>
      )
}

export default AIM