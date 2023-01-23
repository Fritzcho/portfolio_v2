import React from 'react'
import './projects.css'
import Object from './Object'

const Design = () => {
  return (
    <div className='portfolio__dev'>
        <Object path={"aim/aim-cover.png"} title={"AI Medtech"} link="/portfolio_v2/aim"/>
        <Object path={"boujt/boujt-cover.jpg"} title={"Boujt"} link="/portfolio_v2/boujt"/>
        <Object path={"Ledigajobb.se/lj-cover.png"} title={"Ledigajobb.se - Coming Soon"} link="/portfolio_v2"/>
    </div>
  )
}

export default Design