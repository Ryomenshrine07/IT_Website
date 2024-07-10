import './ServiceDemo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

function ServiceDemo() {
  let navigate = useNavigate();

  const[elementRef1,inView1] = useInView({threshold:0.2,triggerOnce:false});
  const[elementRef2,inView2] = useInView({threshold:0.2,triggerOnce:false});
  const[elementRef3,inView3] = useInView({threshold:0.01,triggerOnce:false});
  console.log("Heading in view:", inView1);
  console.log("Button in view:", inView2);

  return (
    <div className='main'>
      <div className="whatWeOfferDiv">
        <div ref={elementRef1} className={`heading ${inView1?'visible':''}`}>
          <FontAwesomeIcon icon={faServicestack} />
          <h4>WHAT WE OFFER</h4>
        </div>
        <div ref={elementRef2} className={`headWithButton ${inView2?'lateVisible':''}`}>
          <h1>Excellent It Services</h1>
          <button onClick={() => navigate('/services')}><span>View All Services<FontAwesomeIcon className='icon' icon={faArrowRight} /></span></button>
        </div>

        <div className="serviceCardDiv">

          <div ref={elementRef3} className={`serviceCard ${inView3?'visible':''}`}>
            <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-icon1.png" alt="" />
            <h2>IT Management</h2>
            <p>Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.</p>
          </div>

          <div ref={elementRef3} className={`serviceCard ${inView3?'visible':''}`}>
            <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-icon2.png" alt="" />
            <h2>App Development</h2>
            <p>Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.</p>
          </div>
          <div ref={elementRef3} className={`serviceCard ${inView3?'visible':''}`}>
            <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-icon3.png" alt="" />
            <h2>Database Management</h2>
            <p>Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.</p>
          </div>
          <div ref={elementRef3} className={`serviceCard ${inView3?'visible':''}`}>
            <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-icon1.png" alt="" />
            <h2>Web Development</h2>
            <p>Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.</p>
          </div>


        </div>

        
      </div>

    </div>
  )
}

export default ServiceDemo