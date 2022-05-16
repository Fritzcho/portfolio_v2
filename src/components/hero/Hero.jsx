import React, {useEffect, useState} from 'react'

export const Hero = () => {
    const [h1Border, setH1Border] = useState('solid');
    const [h2Opacity, setH2Opacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setH1Border('none')
        }, 2000);
        setTimeout(() => {
            setH2Opacity(1)
        }, 2500);
    });

    return (
        <div className="hero">
          <div className="hero text">
              <h1 id="hero-h1" style={{borderRight: h1Border}}>Hi there, I'm Alireza</h1>
              <h2 id="hero-h2" style={{opacity: h2Opacity}}>I'm a UX designer and developer</h2>
          </div>
          <div className="hero image">
              <img src={require("../../assets/ppic/20220213_141135.jpg")} alt=" "/>
          </div>
        </div>
    )
}

export default Hero