import './projects.css'
import React from 'react'
import { Link } from "react-router-dom";

function Object(props) {
    var Background = require(`../../assets/${props.path}`)
    var styling = {
        style: {
            backgroundColor: "#FFFFFF",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: 'url('+Background+')',
            textDecoration: 'none'
        }
    }
    return (
      <Link to={props.link} className="portfolio__object" style={styling.style}>
        <h1>{props.title}</h1>
      </Link>
    )
}

export default Object