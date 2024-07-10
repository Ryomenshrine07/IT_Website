import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceCard.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const ServiceCard = (props) => {

  const[elementRef,inView] = useInView({threshold:0.1,triggerOnce:false});

  let navigate = useNavigate();
  
  return (
    <div ref={elementRef} className={`serviceCardMain ${inView?'visible':''}`}>
        <div className="serviceImg">
          <img src={props.bigImg} alt="" />
        </div>

        <div className="serviceHead cardText">
        <h2>{props.title}</h2>
        </div>

        <div className="serviceDesc cardText">
        <p>{props.desc}</p>
        </div>
        <div className="serviceCardIcon">
          <img src={props.smallImg} alt="" />
        </div>

        <button onClick={() => navigate(props.url)}><span>Read More</span><FontAwesomeIcon className='serviceBtn' icon={faArrowRight}/></button>
    </div>
  )
}

export default ServiceCard