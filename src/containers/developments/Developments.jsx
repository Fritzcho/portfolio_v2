import React from 'react'
import BiomassAnalyser from './BiomassAnalyser'
import Fragmentation from './Fragmentation'
import './developments.css'

const Developments = () => {
  return (
    <div className='developments'>
        <BiomassAnalyser/>
        <Fragmentation/>
    </div>
  )
}

export default Developments