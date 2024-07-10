import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutZeeTee.css';
import { faArrowRight, faGear } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

function AboutZeeTee() {

  const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});

  let navigate = useNavigate();

  return (
    <div className='mainAbout'>
      <div className="aboutmainContainer">
        <div ref={elementRef1} className={`imageContainer ${inView1?'visible':''}`}>
          <img  src="https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div ref={elementRef2} className={`contentContainer ${inView2?'visible':''}`}>
          <div className="aboutIconHead">
            <h2><FontAwesomeIcon className='aboutIcon' icon={faGear} /> About ZeeTee</h2>
          </div>
          <div className="contentHeading">
            <h1>We Strive To Offer Intelligent Business Solutions</h1>
          </div>
          <div className="contentDescription">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quibusdam fugiat, blanditiis distinctio est a architecto eius neque quas quae Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="servicesDemo">

            <div className="serviceDemoBox">
              <div className="serviceImgBox">
                <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/about-icon1.png" alt="" />
              </div>
              <div className="serviceTextBox">
                <h2>Best Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
            </div>

            <div className="serviceDemoBox">
              <div className="serviceImgBox">
                <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/about-icon2.png" alt="" />
              </div>
              <div className="serviceTextBox">
                <h2>24/7 Call Support</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
          <div className="leaderSection">
            <button onClick={() => navigate('/about')}><span>Explore more <FontAwesomeIcon className='icon' icon={faArrowRight} /></span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutZeeTee