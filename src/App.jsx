import React, {useEffect, useState} from 'react';
import { Header, Hero, Gear, Menu, MenuItem } from './components';
import './App.css';

function App() {
    return (
      <div className='App'>
		    <div className="container">
                <Header/>
                <Hero/>
            <div className="project-items">
                <Gear/>
                <h1 id="projects-heading">Selected projects</h1>
                <Menu/>
                <div className="project" id="3">
                    <div className="p">
                        <img className="main-image" src={require("./assets/ppic/x.png")} 
                            style={{boxShadow:"none", objectFit:"cover", width:50+'px'}}
                        />
                    </div>
                    <div className="a">
                        <img className="main-image" src={require("./assets/Evt.png")}/>
                        <h3 style={{textAlign: "center"}}>Evts new website.</h3>
                    </div>
                    <div className="p">
                        <p>
                            I was hired to design and develop a new website for Evt, a technology consulting company in the
                            water and sewage industry. They needed an updated website that fit todays market in design and 
                            functionality, to make it easier to present themselves and what they do to customers.
                        </p>
                        <p>
                            Their new website offers inter alia a dedicated page for presenting their earlier project, 
                            with extra focus on some of their most impressive reference projects. 
                        </p>
                    </div>
                    <div className="p">
                        <img className="main-image" src={require("./assets/old.png")} style={{boxShadow: 'none'}}/>
                        <h3 style={{textAlign: "center"}}>Concept logo</h3>
                    </div>
                    <div className="p">
                        <p>
                            I also got a chance to create concepts for a new logo, something they were also looking into.
                            This kind of logotype design is not something that i usually do so it was a great challenge.
                        </p>
                        <p>
                            I wanted to capture the identity of the company and hint at the field that the company usually
                            works in with the logo. I therefore designed a logo with a quite simple and industrial font, but
                            with water effects and colors to imitate a water tower and mirror the water industry that Evt
                            work within.
                        </p>
                    </div>
                    <div className="p">
                        <img className="main-image" src={require("./assets/evt-ref.png")}/>
                        <h3 style={{textAlign:"center"}}>Another screenshot from the site</h3>
                    </div>
                    <div className="p">
                        <h3 style={{textAlign:"center"}}>
                            <a href="http://evtumea.se">Tune in here to see the whole website</a>
                        </h3>
                    </div>
                </div> 
                {/* <div className="project" id="4">
                    <div className="p">
                        <img className="main-image" src="sources/images/ppic/x.png" 
                            style={{boxShadow:"none", objectFit:"cover", width:"50px"}}
                        />
                    </div>
                    <div className="a">
                        <img className="main-image" src="sources/images/vbpicture.png"/>
                        <h3 style={{textAlign:"center"}}>Västerbottensost</h3>
                    </div>
                    <div className="p">
                        <h3>
                            During a four week long project we collaborated with the famous Swedish cheese, Västerbottensost®,
                            to redesign their website to match their need better, based on their current branding goals. 
                            I was the project manager in my team. 
                        </h3>
                    </div>
                    <div className="p">
                        <img className="main-image" src="sources/images/vbreceptgen.PNG"/>
                        <h3 style={{textAlign:"center"}}>An image from the prototype</h3>
                    </div>
                    <div className="p">
                        <p>
                            Our goal was to redesign the website based on the brands vision of being known as a premium cheese 
                            that people are ready to pay high prices for, while also hoping to inofficially becoming the 
                            "national cheese" of Sweden. We created a baseline of three keywords that we felt defined our 
                            goal and also the Västerbottensost® brand. Those words were
                            <i>heritage</i>, <i>mystique</i> and <i>high quality</i> 
                        </p>
                    </div>
                    <div className="p">
                        <img className="main-image" src="sources/images/vbtimeline.PNG"/>
                        <h3 style={{textAlign:"center"}}>Another image from the prototype</h3>
                    </div>
                    <div className="p">
                        <p>
                            We did a lot of prototyping and user tests to finally land on a concept that we truly believed in. 
                            Our early ideas involved 
                            some very out of the box concepts, like the whole website being a 360-degree virtual tour of the 
                            cheese factory. However, we let the users
                            decide which of our concepts they liked best, and their preference based on our keywords was something 
                            we called <i>The Story</i>.
                        </p>
                        <p>
                            The story is a timeline of the heritage of Västerbottensost®, that takes the user on a intuitive 
                            step-by-step tour through the 
                            brands history. To give it all a twist by makin all the pages scroll horizontally instead of 
                            vertically, which enhances the feeling of the
                            first page being a timeline. 
                        </p>
                    </div>
                </div>  
                <div className="project" id="1">
                        <div className="p">
                            <img className="main-image" src="sources/images/ppic/x.png" style={{boxShadow:"none", objectFit:"cover", width:"50px"}}/>
                        </div>
                        <div className="a">
                            <img className="main-image" src="sources/images/biomassAnalyser.PNG"/>
                            <h3 style={{textAlign:"center"}}>The Biomass Analyser</h3>
                        </div>
                        <div className="p">
                            <h3>
                                A work in progress with Habib Ramezani.
                            </h3>
                        </div>
                        <div className="p">
                            <p>
                                This program creates a forestation map based on an input file and runs three 
                                different tests.
                                They involve randomizing locations on the map and evaluating how many trees fall 
                                into a certain radius from 
                                each random-given locations. 
                            </p>
                            <p>
                                The three tests all use a different radius but the same randomized locations. Two
                                of the tests use a dynamic radius based on a user-given variable and one test a static 
                                radius that is given by the user.
                            </p>
                            <p>
                                Input from the user tells the program hom many randomized locations should be created 
                                (samples) and how many times
                                this process should be repeated (replications). The evaluated data is then output 
                                to a .csv document.
                            </p>
                        </div>
                        <div className="p">
                            <h3>
                                Stay tuned for the article and source code!
                            </h3>
                        </div>
                    </div>
                    <div className="project" id="2">
                        <div className="p">
                            <img className="main-image" src="sources/images/ppic/x.png" 
                                style={{boxShadow:"none", objectFit:"cover", width:"50px"}}
                            />
                        </div>
                        <div className="a">
                            <img className="main-image" src="sources/images/forestfragmentation.PNG"/>
                            <h3 style={{textAlign:"center"}}>Forest Fragmentation Assessment</h3>
                        </div>
                        <div className="p">
                            <h3>
                                An article together with Habib Ramezani.


                                <a href="sources/misc/Forest fragmentation assessment using field based sampling data from forest inventories.pdf">
                                    Click here to read the article
                                </a>
                            </h3>
                        </div>
                        <div className="p">
                            <p>
                                The work consisted of writing several programs in Matlab for the assessments that were needed for the article.
                                The program was made for esitmating an aggregation index,  based on sampling data that is gained from user input,
                                and to estimate the degree of the clumping of forestation landscape based on this gained index. 
                                Fortunately the article is open access, so you can click the link below to read it!
                            </p>
                        </div>
                    </div> */}
            </div>
            <footer>
                <h2>hello@alirezarm.one</h2>
            </footer>  
        </div>
      </div>
    );
}

export default App;
