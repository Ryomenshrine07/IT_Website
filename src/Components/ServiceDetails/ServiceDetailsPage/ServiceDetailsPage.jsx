import { faArrowRight, faCircleCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import './ServiceDetailsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CollapseService from './CollapseService';
import {useInView} from 'react-intersection-observer'

const ServiceDetailsPage = (props) => {

  const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef3,inView3] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef4,inView4] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef5,inView5] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef6,inView6] = useInView({threshold:0.1,triggerOnce:false});


  return (
    <div className='ServiceDetailsPage'>
        <div className="mainServiceContainer">

        <div className="leftServiceBox">

        <div ref={elementRef1} className={`upperImage ${inView1?'visible':''}`}>
            <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-single-image1.jpg" alt="" />
        </div>

        <div ref={elementRef3} className={`serviceDetailHead ${inView3?'visible':''}`}>
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nesciunt enim laborum deleniti ratione sit eaque sequi, eum perspiciatis veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, expedita!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam obcaecati voluptatum laborum, maxime quisquam aliquid? Unde nesciunt praesentium est m Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione.</p>
        </div>

        <div className="benifitOfServiceMain">

        <div className={`benefits beneBox ${inView4?'visible':''}`}>

        <h1>Benefits With Our Service</h1>

        <div ref={elementRef4} style={{display:'flex',alignItems:'center',height:'3em'}}>
                <FontAwesomeIcon className='tickDivIcon' icon={faCircleCheck} />
                <h3>Technology Consultancy</h3>
                </div>

                <div style={{display:'flex',alignItems:'center',height:'3em'}}>
                <FontAwesomeIcon className='tickDivIcon' icon={faCircleCheck} />
                <h3>We Provide best services</h3>
                </div>

                <div style={{display:'flex',alignItems:'center',height:'3em'}}>
                <FontAwesomeIcon className='tickDivIcon' icon={faCircleCheck} />
                <h3>Maintenance And Support</h3>
                </div>

                <div style={{display:'flex',alignItems:'center',height:'3em'}}>
                <FontAwesomeIcon className='tickDivIcon' icon={faCircleCheck} />
                <h3>Requirements Gathering</h3>
                </div>
        </div>
        
        <div ref={elementRef5} className={`benefitImage beneBox ${inView5?'visible':''}`}>
            <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-single-image2.jpg" alt="" />
        </div>

        </div>

        <div className="serviceDetailHead">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam obcaecati voluptatum laborum, maxime quisquam aliquid? Unde nesciunt praesentium est m Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione.</p>
        </div>

        <div className="questionArea">

        <h1>Most Common Question ?</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam obcaecati voluptatum laborum, maxime quisquam aliquid? Unde nesciunt praesentium est m Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione.</p>
        <CollapseService/>
        </div>

        </div>




        <div className="rightServiceBox">

            <div ref={elementRef2} className={`allServicesMain ${inView2?'visible':''}`}>
            <h2>All Services</h2>
                <div className="allServicesDiv">

                  <div className="allServContent">
                    <p>Database Security</p>
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                  </div>  
                  <div className="allServContent">
                    <p>IT Consultancy</p>
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                  </div>  
                  <div className="allServContent">
                    <p>App Development</p>
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                  </div>  
                  <div className="allServContent">
                    <p>UI/UX Design</p>
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                  </div>  
                  <div className="allServContent">
                    <p>Cyber Security</p>
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                  </div>  
                

                </div>

            </div>


            <div ref={elementRef6} className={`openHoursMain ${inView6?'visible':''}`}>
            <h2>Opening Hours</h2>
                <div className="allServicesDiv">

                  <div className="allServContent">
                  <FontAwesomeIcon className='icon' icon={faClock} />
                    <p>Mon – Sat: 10.00 AM – 4.00 PM</p>
                    
                  </div>  
                  <div className="allServContent">
                  <FontAwesomeIcon className='icon' icon={faClock} />
                    <p>Sun: 09.00 AM – 4.00 PM</p>
                    
                  </div>  
                  <div className="allServContent">
                  <FontAwesomeIcon className='icon' icon={faClock} />
                    <p>Friday: Closed</p>
                    
                  </div>  
                  <div className="allServContent">
                  <FontAwesomeIcon className='icon' icon={faClock} />
                    <p>Emergency: 24 hours</p>    
                  </div>  
                  
                

                </div>
            </div>


        </div>


        </div>
    </div>
  )
}

export default ServiceDetailsPage