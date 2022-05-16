import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from 'jquery';

$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
      if(scroll_pos > $(".project-items").offset().top) {
        $(".logo").css('color', 'white');
      } else {
        $(".logo").css('color', 'black');
      }
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);