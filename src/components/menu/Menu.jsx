import React, {useState, useEffect} from 'react'
import './menu.css'
import { About, Designs, Developments } from '../../containers'

var styling = {
  selected: {
    textShadow: "0px 0px 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)",
    color: "transparent",
    WebkitTextStroke:"1px #f69000", 
    TextStroke:"1px #f69000",
  },
  button: { 
    color: "#53b1b1"
  }
}


function Menu() {
  const [about, setAbout] = useState(true)
  const [dev, setDev] = useState(false)
  const [design, setDesign] = useState(false)

  const selectItem = (s) => {
    setAbout(false);
    setDev(false);
    setDesign(false);

    if (s === 'a') {
      setAbout(true)
    }
    if (s === 'u') {
      setDev(true)
    }
    if (s === 'd') {
      setDesign(true)
    }
  }

  return (
    <div className='portfolio__menu-container'>
      <div className='portfolio__menu'>
        <div className='portfolio__MenuItem' 
        style={dev ? styling.selected : styling.button} 
        onClick={() => selectItem('u')}>
            <p>Development</p>
        </div>
        <div className='portfolio__MenuItem' 
        style={about ? styling.selected : styling.button} 
        onClick={() => selectItem('a')}>
            <p>About Me</p>
        </div>
        <div className='portfolio__MenuItem' 
      style={design ? styling.selected : styling.button} 
      onClick={() => selectItem('d')}>
          <p>Design</p>
        </div>
      </div>
      {design ? <Designs/> : ''}
      {dev ? <Developments/> : ''}
      {about ? <About /> : ''}
    </div>
  )
}


export default Menu