import React, {useState} from 'react'
import './menu.css'

function MenuItem(props) {
    return (
      <div className='portfolio__MenuItem'>
          <h3>{props.text}</h3>
      </div>
    )
}

export default MenuItem