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

let disableScroll = false;

export default function expand(id) {
  //Set default open/close settings
      $('.logo').css('color', 'black !important');
      $('#'+id).toggleClass('active');
      $('#'+id+'.p').toggleClass('display');
      $('html, body').animate({
        scrollTop: $('#'+id).offset().top-70
      }, 500);
      var TopScroll = $('#'+id).offset().top-70;
      var LeftScroll = window.pageXOffset;

      // if scroll happens, set it to the previous value
      if (disableScroll === false) {
        window.onscroll = function() {
          window.scrollTo(LeftScroll, TopScroll);
        };
        disableScroll = true;
      } else {
        window.onscroll = function() {};
        disableScroll = false;
      }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);