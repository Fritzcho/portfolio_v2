import React, {useState, useEffect} from 'react'
import './scrollingtext.css'

const Scrollingtext = () => {
  return (
    <div className='portfolio__scrollingtext'>
      <div className="portfolio__scroll-container">
        <div className="portfolio__scroll-text">
          <h2 className='portfolio__scrolling--bordered scroller'> 
            <span>  • UX Design •  </span>
            React •
            <span>  Code • </span>
            Programming •
            <span>  Figma • </span>
            Java • 
            <span>  ASP.NET </span>
            {/* <span>
              UX Design <br/>
              React <br/>
              Code <br/>
              Programming <br/>
              Figma <br/>
              Java  <br/>
              ASP.NET 
            </span> */}
          </h2>
        </div>
      </div>
      {/* <div className="portfolio__scroll-container-left">
        <div className="portfolio__scroll-text-left">
          <h2 className='portfolio__scrolling--bordered'> 
            <span>  ASP.NET </span>
            Java • 
            <span>  Figma • </span>
            Programming •
            <span>  Code • </span>
            React •
            <span>  • UX Design •  </span>
          </h2>
        </div>
      </div> */}
    </div>
  )
}

export default Scrollingtext