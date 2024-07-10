import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServicePage.css';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from './Service Card/ServiceCard';
import { useInView } from 'react-intersection-observer';

let serviceData = [
  {
    id:1,
    title: 'Database Security',
    description: 'Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.',
    url:'/services/database_security',
    mainImage: 'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-image1.jpg',
    miniImage:'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-two-icon2.png'
  },
  {
    id:2,
    title: 'IT Consultancy',
    description: 'Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.',
    url:'/services/it_consultancy',
    mainImage: 'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-image2.jpg',
    miniImage:'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-two-icon1.png'
  },
  {
    id:3,
    title: 'App Development',
    description: 'Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.',
    url:'/services/app_developent',
    mainImage: 'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-image3.jpg',
    miniImage:'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-two-icon3.png'
  },
  {
    id:4,
    title: 'Database Management',
    description: 'Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.',
    url:'/services/database_management',
    mainImage: 'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-image4.jpg',
    miniImage:'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-two-icon4.png'
  },
  {
    id:5,
    title: 'IT Training',
    description: 'Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.',
    url:'/services/it_training',
    mainImage: 'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-image5.jpg',
    miniImage:'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-two-icon5.png'
  },
  {
    id:6,
    title: 'Web Development',
    description: 'Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.',
    url:'/services/web_development',
    mainImage: 'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-image6.jpg',
    miniImage:'https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/service-two-icon6.png'
  }
];


const ServicePage = () => {
  const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});
  return (
    <div>
        <div ref={elementRef1} className={`aboutStartImgAndHead ${inView1?'visible':''}`}>
        <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/banner-inner-page.jpg" alt="" />
        <div className="aboutStartInfo">
          <h1>Services</h1>
          <div className="homeNavigation">
            <button><h4>HOME</h4></button>
            <FontAwesomeIcon icon={faForward}/>
            <h4>SERVICE</h4>
          </div>
        </div>
        <div className="staticImage">
        <img src="https://wordpress.onertheme.com/gratech/wp-content/themes/gratech/assets/img/inner-banner-shape1.png" alt="" />
        </div>
        <div className="dynamicImage">
        <img src="https://wordpress.onertheme.com/gratech/wp-content/themes/gratech/assets/img/inner-banner-shape2.png" alt="" />
        </div>
    </div>

    <div className="serviceCardArea">
    <div className="serviceCardBackGround">
    {serviceData.map((data) => {
      return(
        <ServiceCard key={data.id} title={data.title} desc={data.description} bigImg={data.mainImage} smallImg={data.miniImage} url={data.url}/>
      )
    })}
    </div>
    </div>


    </div>
  )
}

export default ServicePage