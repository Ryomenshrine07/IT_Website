import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Aboute.css';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import {faArrowRight, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer';

function Aboute() {

    const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});
    const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});

  return (
    <div className='mainAboute'>
        
        <div className="mainAbouteContentMain">

        <div ref={elementRef1} className={`contentDiv1 ${inView1?'visible':''}`}>
        <img id='Image1' src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/about-two-image1.jpg" alt="" />
        <img id='Image2' src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/about-two-image2.png" alt="" />
        <img id='Image3' src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/about-two-circle.png" alt="" />
        <img id='Image4' src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/about-circle-helper.png" alt="" />
        <img id='Image5' src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/about-two-dot.png" alt="" />
        </div>

        <div ref={elementRef2} className={`contentDiv2 ${inView2?'visible':''}`}>

        <div className="headWithIcon">
        <FontAwesomeIcon className='abouteIcon' icon={faServicestack} />
        <h3>ABOUT ZEETEE</h3>
        </div>

        <div className="headAboute">
            <h1>We Strive To Offer Intelligent Business Solutions</h1>
        </div>

        <div className="abouteDesc">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quibusdam fugiat, blanditiis distinctio est a architecto eius neque quas quae Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ipsam!</p>
        </div>

        <div className="tickDivMain">

            <div className="tickDiv">
                <div style={{display:'flex',alignItems:'center',height:'3em'}}>
                <FontAwesomeIcon className='tickDivIcon' icon={faCircleCheck} />
                <h3>Technology Consultancy</h3>
                </div>

                <div style={{display:'flex',alignItems:'center',height:'3em'}}>
                <FontAwesomeIcon className='tickDivIcon' icon={faCircleCheck} />
                <h3>We Provide best services</h3>
                </div>
                
            </div>

            <div className="tickDiv">

            <div style={{display:'flex',alignItems:'center',height:'3em'}}>
                <FontAwesomeIcon className='tickDivIcon' icon={faCircleCheck} />
                <h3>Maintenance And Support</h3>
                </div>

                <div style={{display:'flex',alignItems:'center',height:'3em'}}>
                <FontAwesomeIcon className='tickDivIcon' icon={faCircleCheck} />
                <h3>Requirements Gathering</h3>
                </div>

            </div>
        </div>

        <button><span>Explore More <FontAwesomeIcon className='btnIcon' icon={faArrowRight}/></span></button>

        </div>
        </div>
        

    </div>
  )
}

export default Aboute