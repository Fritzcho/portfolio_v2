import React, {useEffect, useState} from 'react'
import './hero.css'
import { Icon } from '@iconify/react';


export const Hero = () => {
    const [h1Border, setH1Border] = useState('solid');
    const [h2Opacity, setH2Opacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setH1Border('none')
        }, 2000);
        setTimeout(() => {
            setH2Opacity(1)
        }, 1500);
    });

    return (
        <div className='hero__outer'>
            <div className="hero">
              <div className="hero text">
                  <h1 id="hero-h1" style={{borderRight: h1Border}}>Hi there, I'm Alireza</h1>
                  <h2 id="hero-h2" style={{opacity: h2Opacity, transition: "1s"}}>Come see my portfolio . . .</h2>
              </div>
            </div>
            <div className='hero__arrow-container'>
                <a className='hero__arrow' href="#menu"><Icon width={"75"} icon="ic:baseline-arrow-back-ios-new" rotate={3} /></a>
            </div>
        </div>
    )
}

export default Hero