import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OurTeam.css';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

function OurTeam() {

  const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef3,inView3] = useInView({threshold:0.1,triggerOnce:false});


  return (
    <div className="Main-div">
      <div ref={elementRef1} className={`leaderHeadWithIcon ${inView1?'visible':''}`} style={{display:'flex',alignItems:'center',justifyContent:'center',color:'#3c72fc'}}>
        <FontAwesomeIcon icon={faServicestack}/>
        <h3>OUR TEAM</h3>
      </div>
      <h1>Our Leadership Team</h1>
      <div className="full-container-image">
        <div ref={elementRef2} className={`first-card card leftLeaderCard ${inView2?'visible':''}`}>
          <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/team-image1.jpg" alt="Kawser Ahmed" />
          <div className="Mini-div">
            <h3>Kawser Ahmed</h3>
            <p>Web Designer</p>
          </div>
        </div>
        <div className="second-card card">
          <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/team-image2.jpg" alt="Karniz Fatema" />
          <div className="Mini-div">
            <h3>Karniz Fatema</h3>
            <p>Customer Support</p>
          </div>
        </div>
        <div ref={elementRef3} className={`third-card card rightLeaderCard ${inView3?'visible':''}`}>
          <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/team-image3.jpg" alt="Alexo Pranto" />
          <div className="Mini-div">
            <h3>Alexo Pranto</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam