import React from 'react'
import { Subheader } from '../../../components'

function Pallang() {
    return (
        <div className='portfolio__project'>
            <Subheader/>
            <div className='portfolio__heading'>
                <h1 data-text="Kuben">Pallang</h1>
                <h2>Athlete<span style={{color: "#87CEEB"} }> performance </span>Coach<span style={{color:"#059033"}}> based in CBT</span>.</h2>
            </div>
            <img className='portfolio__project-img' src={require("../../../assets/pallang/background.jpg")}/>
            <div className='portfolio__project-ingress'>
                <p>
                    What started as a fun hobby-project with a friend has now turned into a full developed React Native app that is currently being
                    tested on both iOS and Android as part of my master thesis.
                    <br/><br/>
                    Pallang is a service that helps players and coaches with their motivation and mental development. The application is designed based
                    on established and recognized Cognitive Behavioral Therapy methods with rational activities that produce measurable results - 
                    completely on your own. The application is aimed in the first stage at betting soccer players between the ages of 15 and 25 in Sweden. 
                    <br/><br/>
                    Pallang is part of my master thesis where I am examining how motivation theories can be combined with data visualisation to increase
                    user engagement and retention to the app, but also to the sport. 
                </p>
                <a className='project__button' href='https://www.pallang.net/'>VISIT THE WEBSITE</a>
                <a className='project__button' href='https://testflight.apple.com/join/porfoADo'>Testflight link</a>
            </div>
    
            <div className='portfolio__project-content'>
                <h1>Process</h1>
                <p>
                    Pallang started of as hobby project with a Figma draft based on ideas I found from a sport psychologist friend. The idea was to create
                    and accessible platform that integrated common CBT methods for athletes to help young, developing athletes strengthen their mentality, in short acting as a mental coach. 
                    This Figma draft was then quickly expanded upon to a full-fledged prototype which was user-tested with semi-professional 
                    football players and other athletes to test theories and hypotheses we had about the app. Extensive data was gathered based on
                    the feedback recieved from user-tests which allowed me to tweak the design further to match the supposed needs of athletes.
                    <br/><br/>
                    Based on the new, user-tested design, the app was then fully developed by me and my friend. At this point, there was a seed planted in my mind
                    that the app could be used for my master thesis this spring. The front-end of the app was developed in React Native to simplify the process of reaching out
                    to both major mobile operative systems, with an ASP.NET API as back-end combined with some Firebase functions. 
                    <br/><br/>
                    Simultaneously, I've been researching how motivation theories and data visualisation could be integrated in the app to provide users with interactive feedback
                    about their performances and personal goals. I am currently still examining and writing about this topic, currently being in the prototyping phase of such data
                    visualisations.
                </p>
                <img src={require("../../../assets/pallang/background2.jpg")}/>
            </div>
        </div>
      )
}

export default Pallang