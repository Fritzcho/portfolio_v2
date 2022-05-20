import React from 'react'
import expand from '../..'

const BiomassAnalyser = () => {
  return (
    <div className="project" id="1" onClick={()=>expand(1)}>
        <div className="p">
            <img className="main-image" src={require("../../assets/ppic/x.png")} 
            style={{boxShadow:"none", objectFit:"cover", width:"50px"}}/>
        </div>
        <div className="a">
            <img className="main-image"  src={require("../../assets/biomassAnalyser.PNG")}/>
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
  )
}

export default BiomassAnalyser