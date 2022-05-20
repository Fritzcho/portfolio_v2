import React, {useEffect, useState} from 'react';
import { Header, Hero, Gear, Menu, Footer, Scrollingtext } from './components';
import './App.css';

function App() {
    return (
      <div className='App'>
		    <div className="container">
                <Header/>
                <Hero/>
            <div className="project-items">
                {/* <Gear/> */}
                {/* <Scrollingtext/> */}
                <Menu/>
            </div>
            <Footer/>
        </div>
      </div>
    );
}

export default App;
