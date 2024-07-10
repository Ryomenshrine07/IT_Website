import ReactCardSlider from 'react-card-slider-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import './CaseStudyComponent.css';
import { useInView } from 'react-intersection-observer';

function CaseStudyComponent() {

    const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});
    const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});


    const slides = [
        {image:"https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/case-image3.jpg",title:"IT Management",clickEvent:'sliderClick'},
        {image:"https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/case-image2.jpg",title:"Platform Integration",clickEvent:'sliderClick'},
        {image:"https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/case-image1.jpg",title:"Web Development",clickEvent:'sliderClick'},
        {image:"https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/case-image4.jpg",title:"Network Security",clickEvent:'sliderClick'},
        {image:"https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/case-image3.jpg",title:"IT Management",clickEvent:'sliderClick'},
        {image:"https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/case-image2.jpg",title:"Platform Integration",clickEvent:'sliderClick'},
        {image:"https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/case-image1.jpg",title:"Web Development",clickEvent:'sliderClick'},
    ]
  return (
    <div>
        <div className='sliderDiv'>
        <div ref={elementRef1} className={`headAndIconSlider ${inView1?'visible':''}`}>
          <FontAwesomeIcon className='caseStudyIcon' icon={faServicestack} />
          <h3>FROM OUR CASE STUDIES</h3>
          </div>
          <div className={`slider ${inView2?'visible':''}`} ref={elementRef2} >
        <ReactCardSlider slides={slides}/>
        </div>
        </div>
    </div>
  )
}

export default CaseStudyComponent