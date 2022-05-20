import React from 'react'
import expand from '../..'

const Evt = () => {
  return (
    <div className="project" id="3" onClick={() => expand(3)}>
        <div className="p">
            <img className="main-image" src={require("../../assets/ppic/x.png")} 
                style={{boxShadow:"none", objectFit:"cover", width:50+'px'}}
            />
        </div>
        <div className="a">
            <img className="main-image" src={require("../../assets/Evt.png")}/>
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
            <img className="main-image" src={require("../../assets/old.png")} style={{boxShadow: 'none'}}/>
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
            <img className="main-image" src={require("../../assets/evt-ref.png")}/>
            <h3 style={{textAlign:"center"}}>Another screenshot from the site</h3>
        </div>
        <div className="p">
            <h3 style={{textAlign:"center"}}>
                <a href="https://fritzcho.github.io/Website-evt/index.html">Tune in here to see the whole website</a>
            </h3>
        </div>
    </div> 
  )
}

export default Evt