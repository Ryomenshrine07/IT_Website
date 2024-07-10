import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'antd';
import './TalkAndReview.css';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer';

function TalkAndReview() {
   const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});
   const[elementRef3,inView3] = useInView({threshold:0.1,triggerOnce:false});

   return (
      <div className={`talkAndReviewMain`}>

         <div className="talkAndReviewContent">

            <form ref={elementRef2} className={`${inView2?'visible':''}`} action="">

               <div className="formHeadAndIcon">
                  <FontAwesomeIcon icon={faServicestack} />
                  <h3>TALK TO US</h3>
               </div>

               <div className="formHead">
                  <h1>How May We Help You!</h1>
               </div>

               <div className="formInputs">

                  <div className="inputPart1">

                     <div className='inputText'>
                        <label htmlFor="NameInput">Your Name*</label>
                        <input type="text" required placeholder='Enter Your Name' id="NameInput" />
                     </div>

                     <div className='inputText'>
                        <label htmlFor="SubBox">Subject*</label>
                        <input type="text" placeholder='Enter Your Subject' required id="SubBox" />
                     </div>

                  </div>

                  <div className="inputPart2">

                     <div className='inputText'>
                        <label htmlFor="EmailBox">Your Email*</label>
                        <input type="email" placeholder='Enter Your Email' required id="EmailBox" />
                     </div>

                     <div className='inputText'>
                        <label htmlFor="PhoneBox">Your Phone*</label>
                        <input type="tel" maxLength={10} placeholder='Enter Your Number' required id="PhoneBox" />
                     </div>

                  </div>
               </div>

               <div className="formTextarea">
                  <label htmlFor="MessageArea">Your Message*</label>
                  <textarea required placeholder='Enter Your Message' id="MessageArea" />
               </div>
               <button>Submit</button>
            </form>



            <div ref={elementRef3} className={`reviewContent ${inView3?'visible':''}`}>

               <div className="headWithIcon">
                  <FontAwesomeIcon icon={faServicestack} />
                  <h3>CLIENT REVIEWS</h3>
               </div>

               <div className="headReview">
                  <h1>What They Say About Our</h1>
               </div>

               <div className="reviewContentDesc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, provident! Temporibus magnam repellendus fuga voluptatum? Itaque praesentium sunt ullam nam nostrum distinctio, placeat mollitia expedita. Veritatis molestiae necessitatibus cupiditate deleniti.</p>
               </div>

               <div className="reviewCarausal">
                  <Carousel className='cardSlider' autoplay>
                     <div className='cardSliderCard'>
                        
                        <div className="cardUpper">
                           
                           <div className="cardUpDesc">
                           <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/testimonial-image1.png" className='cardImg' alt="" />
                           <div className='photoDesc'>
                              <h2>Suborna Tarchera</h2>
                              <h4>Web Developer</h4>
                              <div className="cardStarDiv">
                              <div className="coloredStar">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              </div>
                              <FontAwesomeIcon icon={faStar} />
                              </div>
                              </div>
                           </div>


                           <div className='noteDivMain'>
                           <div className="noteDiv"></div>
                           <div className="noteDiv"></div>
                           </div>

                        </div>

                        <div className="cardLower">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus necessitatibus perspiciatis molestias veniam, deleniti repellendus autem quod, optio, id maxime quas. Quam ipsa autem, commodi quos debitis repellat. Quos, iure.</p>
                        </div>

                     </div>


                     <div className='cardSliderCard'>
                     <div className="cardUpper">
                           
                           <div className="cardUpDesc">
                           <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/testimonial-image2.png" className='cardImg' alt="" />
                           <div className='photoDesc'>
                              <h2>Alex Roni</h2>
                              <h4>Web Designer</h4>
                              <div className="cardStarDiv">
                              <div className="coloredStar">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              </div>
               
                              </div>
                              </div>
                           </div>


                           <div className='noteDivMain'>
                           <div className="noteDiv"></div>
                           <div className="noteDiv"></div>
                           </div>

                        </div>
                        
                        <div className="cardLower">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus necessitatibus perspiciatis molestias veniam, deleniti repellendus autem quod, optio, id maxime quas. Quam ipsa autem, commodi quos debitis repellat. Quos, iure.</p>
                        </div>
                     </div>


                     <div className='cardSliderCard'>
                         <div className="cardUpper">
                           
                           <div className="cardUpDesc">
                           <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/testimonial-image1.png" className='cardImg' alt="" />
                           <div className='photoDesc'>
                              <h2>Suborna Tarchera</h2>
                              <h4>Web Developer</h4>
                              <div className="cardStarDiv">
                              <div className="coloredStar">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              </div>
                              <FontAwesomeIcon icon={faStar} />
                              </div>
                              </div>
                           </div>


                           <div className='noteDivMain'>
                           <div className="noteDiv"></div>
                           <div className="noteDiv"></div>
                           </div>

                        </div>
                        
                        <div className="cardLower">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus necessitatibus perspiciatis molestias veniam, deleniti repellendus autem quod, optio, id maxime quas. Quam ipsa autem, commodi quos debitis repellat. Quos, iure.</p>
                        </div>

                     </div>

                     <div className='cardSliderCard'>
                     <div className="cardUpper">
                           
                           <div className="cardUpDesc">
                           <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/testimonial-image2.png" className='cardImg' alt="" />
                           <div className='photoDesc'>
                              <h2>Alex Roni</h2>
                              <h4>Web Designer</h4>
                              <div className="cardStarDiv">
                              <div className="coloredStar">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              </div>
                              <FontAwesomeIcon icon={faStar} />
                              </div>
                              </div>
                           </div>


                           <div className='noteDivMain'>
                           <div className="noteDiv"></div>
                           <div className="noteDiv"></div>
                           </div>

                        </div>
                        
                        <div className="cardLower">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus necessitatibus perspiciatis molestias veniam, deleniti repellendus autem quod, optio, id maxime quas. Quam ipsa autem, commodi quos debitis repellat. Quos, iure.</p>
                        </div>
                     </div>

                  </Carousel>
               </div>


            </div>

         </div>


      </div>
   )
}

export default TalkAndReview