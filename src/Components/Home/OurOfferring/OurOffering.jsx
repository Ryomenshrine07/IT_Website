import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import './OurOffering.css';
import { faAndroid, faApple, faServicestack, faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faGlobe, faRocket, faTv } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function OurOffering() {

  let navigate = useNavigate();
  const[elementRef1,inView1] = useInView({threshold:0.01,triggerOnce:false});
  const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef3,inView3] = useInView({threshold:0.1,triggerOnce:false});
  return (
    <div ref={elementRef1} className={`ourOfferMain ${inView1?'visible':''}`}>
      <div className="ourofferMainContentBox">

      <div ref={elementRef2} className={`headWithIconOffer ${inView2?'visible':''}`}>
      <FontAwesomeIcon icon={faServicestack} />
      <h3>OUR OFFERING</h3>
      </div>

      <div ref={elementRef3} className={`headWithBtnOffer ${inView3?'visible':''}`}>
        <h1>Enhance And Pioneer Using Technology Trends</h1>
        <button onClick={() => navigate('/contact')}><span>Explore More <FontAwesomeIcon className='iconOffer' icon={faArrowRight} /></span></button>
      </div>

      <div className="devicesBoxMain">

        <div className="divicesBox">
          <div className="deviceIconDiv">
          <FontAwesomeIcon className='deviceIcon' icon={faGlobe} />
          </div>
          <h2>Website</h2>
        </div>

        <div className="divicesBox">
          <div className="deviceIconDiv">
          <FontAwesomeIcon className='deviceIcon' icon={faAndroid} />
          </div>
          <h2>Android</h2>
        </div>

        <div className="divicesBox">
          <div className="deviceIconDiv">
          <FontAwesomeIcon className='deviceIcon' icon={faApple} />
          </div>
          <h2>IOS</h2>
        </div>

        <div className="divicesBox">
          <div className="deviceIconDiv">
          <FontAwesomeIcon className='deviceIcon' icon={faWatchmanMonitoring} />
          </div>
          <h2>Watch</h2>
        </div>

        <div className="divicesBox">
          <div className="deviceIconDiv">
          <FontAwesomeIcon className='deviceIcon' icon={faTv} />
          </div>
          <h2>TV</h2>
        </div>

        <div className="divicesBox">
          <div className="deviceIconDiv">
          <FontAwesomeIcon className='deviceIcon' icon={faRocket} />
          </div>
          <h2>IOT</h2>
        </div>

      </div>

      </div>
    </div>
  )
}

export default OurOffering