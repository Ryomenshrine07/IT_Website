import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="main-div">
      <div className="footerImageArea">
      <div className="all-content-div">
      <div className="first-container">
        <div className="first-div">
          <h1>ZeeTee</h1>
          <p>Phasellus ultricies aliquam volutpat<br></br> ullamcorper laoreet neque, a lacinia<br></br> curabitur lacinia mollis</p>
          <div className="social">
            <FontAwesomeIcon className="social-icons" icon={faFacebookF} />
            <FontAwesomeIcon className="social-icons"icon={faTwitter} />
            <FontAwesomeIcon className="social-icons"icon={faLinkedin} />
            <FontAwesomeIcon className="social-icons"icon={faYoutube} />
          </div>
        </div>
        <div className="second-div">
          <h2>IT Solution</h2>
          <ul>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> IT Management</li>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> SEO Optimization</li>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> Web Development</li>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> Cyber Security</li>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> Data Security</li>
          </ul>
        </div>
        <div className="third-div">
          <h2>Quick Link</h2>
          <ul>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> About Gratech</li>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> Our Service</li>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> Pricing Plan</li>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> Our Size</li>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> Our Projects</li>
            <li><FontAwesomeIcon className="leftarrow"icon={faForward} /> Our Team</li>
          </ul>
        </div>
        <div className="fourth-div">
          <h2>Contact us</h2>
          <p>4517 Washington Ave. Manchester,<br></br> Kentucky 39495</p>
          <ul>
            
              <FontAwesomeIcon className="leftarrow"icon={faClock} /> Opening Hours
              <p>Mon-Sat: 10.00 AM - 4.00 PM</p>
            
            
              <FontAwesomeIcon className="leftarrow"icon={faPhone} /> Phone Call:
              
              <p>208-6666-0112, 308-5555-0113</p>
            
          </ul>
        </div>
      </div>
    </div>
    <hr />
<div className="footer">
  <p>2024 By Gratech. All Rights Reserved.</p>
  <p>
    <a href="#" className="footer-link" aria-label="Terms and Conditions">Terms & Conditions</a> | 
    <a href="#" className="footer-link" aria-label="Privacy Policy">Privacy Policy</a>
  </p>
</div>
</div>
    </div>
  );
}

export default Footer;