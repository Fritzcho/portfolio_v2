import React, {useEffect, useState} from 'react';
import { Header, Hero, Gear, Menu } from './components';
import $ from 'jquery';
import './App.css';

function App() {
    $(document).ready(function(){       
        var scroll_pos = 0;
        $(document).scroll(function() { 
          scroll_pos = $(this).scrollTop();
            if(scroll_pos > $(".project-items").offset().top) {
              $(".logo").css('color', 'white');
            } else {
              $(".logo").css('color', 'rgb(0,0,0,0)');
            }
        });
      });
    return (
      <div className='App'>
            <Header/>
            <Hero/>
            <div className="project-items">
                <Menu/>
            </div>
      </div>
    );
}

export default App;
