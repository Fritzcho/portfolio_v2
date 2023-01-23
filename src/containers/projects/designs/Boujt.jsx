import React from 'react'
import { Subheader } from '../../../components'

function Boujt() {
  return (
    <div className='portfolio__project'>
        <Subheader/>
        <div className='portfolio__heading'>
            <h1 data-text="Kuben">Boujt</h1>
            <h2>Helping<span style={{color: "#87CEEB"} }> kids </span>in<span style={{color:"#059033"}}> sign language</span>.</h2>
        </div>
        <img className='portfolio__project-img' src={require("../../../assets/boujt/boujt-cover.jpg")}/>
        <div className='portfolio__project-ingress'>
            <p>
                Boujt is a children and youth care for deaf. They strive to help children with everyday problems concerning friendships,
                relationships, school or even problems with their family at home. They needed a new website better adapted to children
                that have not yet fully lerant to read or write. To design this website was an extremely meaningful and special
                task to be assigne to at WeKnowIT and I am very greatful for getting a chance to help children that need assistance.

                <br/><br/>

                Stay tuned for more information about the process behind this project! In the meanwhile you can visit their website
                to see the final results.  
            </p>
            <a className='project__button' href='https://www.boujt.se/'>VISIT THE WEBSITE</a>
        </div>
    </div>
  )
}

export default Boujt