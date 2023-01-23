import {React, useState} from 'react'
import './footer.css'
import {send} from 'emailjs-com'

const Footer = () => {
    const [toSend, setToSend] = useState({
        from_mail: '',
        message: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_0uzd47k',
          'template_syvcbjk',
          toSend,
          'nzG3124MktubstWdF'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    };
    return (
      <footer>
        <div className='portfolio__footer'>
          <div className='portfolio__footer-text'>
              <h1>Contact me!</h1>
              <div className='footer_icons'>
                <a href="https://github.com/Fritzcho/"><img className='footer__icon' src={require("../../assets/icons/github-mark.png")}/></a>
                <a href="https://www.linkedin.com/in/alireza-ramezani-1a935417b/"><img className='footer__icon' src={require("../../assets/icons/linkdin.png")}/></a>
              </div>
          </div>
          <form id="contact-form" className='portfolio__form' onSubmit={onSubmit}>
              <input type="text" placeholder='your email*' name='from_mail' value={toSend.from_mail} onChange={handleChange}/>
              <textarea type="text" rows="4" name="message" form="contact-form" placeholder='message*' 
                  value={toSend.message}
                  onChange={handleChange}>
              </textarea>
              <input type="submit" value="Send"/>
          </form>
        </div>
      </footer>  
    )
}

export default Footer