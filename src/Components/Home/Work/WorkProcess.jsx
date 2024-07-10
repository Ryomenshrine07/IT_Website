import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WorkProcess.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

function WorkProcess() {

  const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef3,inView3] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef4,inView4] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef5,inView5] = useInView({threshold:0.1,triggerOnce:false});

  return (
    <div ref={elementRef1} className={`workProcess ${inView1?'visible':''}`}>
        
        <div className="workProcessContent">

        <div ref={elementRef2} className={`headWithIconWork ${inView2?'visible':''}`}>
        <FontAwesomeIcon className='' icon={faCheckCircle} />
        <h2>Work Process</h2>
        </div>

        <div ref={elementRef3} className={`headWork ${inView3?'visible':''}`}>
          <h1>Our Development Process</h1>
        </div>

        <div className="circleBoxMain">
        
        <div ref={elementRef4} className={`circleBox leftCircle ${inView4?'visible':''}`}>
        <div className="outerDottedCircle">
        <div className="numberCircle">1</div>
        <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/process-image1.png" alt="" />
        </div>
        <h2>Define Requirements</h2>
        <p>In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur</p>
        </div>


        <div className="imageBox">
        <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/process-arry.png" alt="" />
        </div>


        <div className="circleBox">
        <div className="outerDottedCircle">
        <div className="numberCircle">2</div>
        <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/process-image2.png" alt="" />
        </div>
        <h2>Design & Prototyping</h2>
        <p>In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur</p>
        </div>


        <div className="imageBox">
        <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/process-arry.png" alt="" />
        </div>


        <div ref={elementRef5} className={`circleBox RightCircle ${inView5?'visible':''}`}>
        <div className="outerDottedCircle">
        <div className="numberCircle">3</div>
        <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/process-image3.png" alt="" />
        </div>
        <h2>Finial Solution</h2>
        <p>In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur</p>
        </div>

        </div>



        </div>
    </div>
  )
}

export default WorkProcess