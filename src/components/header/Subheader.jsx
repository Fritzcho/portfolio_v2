import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Subheader() {
  const [color, setColor] = useState('#87CEEB');

  return (
    <header>
        <Link style={{ textDecoration: 'none', color: color, paddingTop:"25px" }} 
        to="/portfolio_v2" 
        className="sub-logo">
            Alireza Ramezani
        </Link>
    </header>
  )
}

export default Subheader