import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceDetails.css';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import ServiceDetailsPage from './ServiceDetailsPage/ServiceDetailsPage';
import { useInView } from 'react-intersection-observer';

const ServiceDetails = () => {
  const[elementRef,inView] = useInView({threshold:0.1,triggerOnce:false});

    let serviceName = '';
    console.log(location.pathname);
    if(location.pathname === '/services/web_development')
        serviceName = 'Web Wevelopment';
    else if(location.pathname === '/services/database_management')
        serviceName = 'Database Management';
    else if(location.pathname === '/services/it_consultancy')
        serviceName = 'IT Consultancy';
    else if(location.pathname === '/services/app_developent')
        serviceName = 'App Development';
    else if(location.pathname === '/services/database_security')
        serviceName = 'Database Security';
    else if(location.pathname === '/services/it_training')
        serviceName = 'IT Training';

  return (
    <div>
        <div ref={elementRef} className={`aboutStartImgAndHead ${inView?'visible':''}`}>
        <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/banner-inner-page.jpg" alt="" />
        <div className="aboutStartInfo">
          <h1>{serviceName}</h1>
          <div className="homeNavigation">
            <button><h4>HOME</h4></button>
            <FontAwesomeIcon icon={faForward}/>
            <h4>SERVICES</h4>
          </div>
        </div>
        <div className="staticImage">
        <img src="https://wordpress.onertheme.com/gratech/wp-content/themes/gratech/assets/img/inner-banner-shape1.png" alt="" />
        </div>
        <div className="dynamicImage">
        <img src="https://wordpress.onertheme.com/gratech/wp-content/themes/gratech/assets/img/inner-banner-shape2.png" alt="" />
        </div>
    </div>
    <ServiceDetailsPage title={serviceName}/>
    </div>
  )
}

export default ServiceDetails