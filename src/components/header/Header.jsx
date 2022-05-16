import React, { useState } from 'react'

function Header() {
  const [color, setColor] = useState('black');

  function scrollTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <header>
        <p className="logo" style={{color: color}} onClick={scrollTop}>Alireza Ramezani</p>
    </header>
  )
}

export default Header