import { faForward } from '@fortawesome/free-solid-svg-icons';
import './AboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aboute from './Aboute/Aboute';
import CaseStudyComponent from '../Home/CaseStudy/CaseStudyComponent';
import OurOffering from '../Home/OurOfferring/OurOffering';
import OurTeam from '../Home/Our Team/OurTeam';
import TalkAndReview from '../Home/TalkAndReview/TalkAndReview';
import { useInView } from 'react-intersection-observer';
function AboutPage() {

  const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});

  return (
    <div className='AboutPage'>

    <div ref={elementRef1} className={`aboutStartImgAndHead ${inView1?'visible':''}`}>
        <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/banner-inner-page.jpg" alt="" />
        <div className="aboutStartInfo">
          <h1>About</h1>
          <div className="homeNavigation">
            <button><h4>HOME</h4></button>
            <FontAwesomeIcon icon={faForward}/>
            <h4>ABOUT</h4>
          </div>
        </div>
        <div className="staticImage">
        <img src="https://wordpress.onertheme.com/gratech/wp-content/themes/gratech/assets/img/inner-banner-shape1.png" alt="" />
        </div>
        <div className="dynamicImage">
        <img src="https://wordpress.onertheme.com/gratech/wp-content/themes/gratech/assets/img/inner-banner-shape2.png" alt="" />
        </div>
    </div>

    <Aboute/>
    <OurOffering/>
    <CaseStudyComponent/>
    <TalkAndReview/>
    <OurTeam/>
    </div>
  )
}

export default AboutPage