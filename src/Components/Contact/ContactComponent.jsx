
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactComponent.css';
import { useInView } from 'react-intersection-observer';

function ContactComponent() {

  const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});
  

  return (
    <div className="container">
      <div ref={elementRef1} className={`left-side ${inView1?'visible':''}`}>
        <h1>Contact Information</h1>
        <p>Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis. Quisque</p>
        <div className="contact-details">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhoneVolume} className="icon-circle" />
            <div className="text">
              <p>Call Us 7/24</p>
              <p>+208-5555-0112</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon-circle" />
            <div className="text">
              <p>Make a Quote</p>
              <p>info@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faLocationDot} className="icon-circle" />
            <div className="text">
              <p>Location</p>
              <p>4517 Washington ave.</p>
            </div>
          </div>
        </div>
        <p>Follow Social</p>
        <div className="socials-icons">
          <FontAwesomeIcon icon={faFacebook} className="icon-circle" />
          <FontAwesomeIcon icon={faTwitter} className="icon-circle" />
          <FontAwesomeIcon icon={faLinkedin} className="icon-circle" />
        </div>
      </div>
      <div ref={elementRef2} className={`right-side ${inView2?'visible':''}`}>
        <div className="contact-heading">
          <p>GET IN TOUCH</p>
        </div>
        <h1>Ready To Get Started?</h1>
        <p>Nullam varius, erat quis iaculis dictum, eros urna varius eros ut blandit felis odio in turpis. Quisque rhoncus eros in auctor ultrices</p>
        <div className="form-group">
          <div className="input-group">
            
          <label htmlFor="your-name">Your Name</label>
            <input
              type="text"
              name="your-name"
              id="your-name"
              placeholder="Your Name" />
          </div>
          <div className="input-group">
            
          <label htmlFor="your-email">Your Email</label>
            <input
              type="email"
              name="your-email"
              id="your-email"
              placeholder="Your Email" />
          </div>
        </div>
        <div className="text-area">
          <label htmlFor="message">Write Message</label>
          <textarea id="message" placeholder="Write Message"></textarea>
        </div>
        <div className="button-container">
          <button type="submit"><span>Send Message <FontAwesomeIcon style={{paddingLeft:'0.5em'}} className='icon' icon={faArrowRight}/></span></button>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;