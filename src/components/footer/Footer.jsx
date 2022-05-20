import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <h1 className='portfolio__footer-head'>Let's create something together</h1>
      <div className='portfolio__footer-content'>
        <h3>&#097;&#108;&#105;&#114;&#101;&#122;&#097;&#114;&#109;&#057;&#056;&#064;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#046;&#099;&#111;&#109;</h3>
        <a href="https://github.com/fritzcho">
          <img src={require("../../assets/icons/github.png")} height="30px"/>
        </a>
        <a href="https://www.linkedin.com/in/alireza-ramezani-1a935417b/">
          <img src={require("../../assets/icons/linkdin.png")} height="30px"/>
        </a>
      </div>
    </footer>  
  )
}

export default Footer