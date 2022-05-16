import React from 'react'
import './menu.css'
import MenuItem from './MenuItem'

const SelectedStyle = {
    textDecorationLine: 'underline'
}

function Menu() {
  return (
    <div className='portfolio__menu'>
        <MenuItem style={SelectedStyle} text='About Me'/>
        <MenuItem text='Development'/>
        <MenuItem text='Design'/>
    </div>
  )
}

export default Menu