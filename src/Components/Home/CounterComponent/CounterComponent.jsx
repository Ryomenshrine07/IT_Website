import { useInView } from 'react-intersection-observer';
import './CounterComponent.css';

function CounterComponent() {
    const[elementRef,inView] = useInView({threshold:0.1,triggerOnce:false});
  return (
    <div ref={elementRef} className={`mainCounterBox ${inView?'visible':''}`}>
        <div className="counterDivHolder">

            <div className="counterDiv">
                <div className="countImgBox">
                    <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/counter-icon1.png" alt="" />
                </div>
                <div className="counteNumBox">
                <h3>0+</h3>
                <h4>Satisfied Clients</h4>
                </div>
            </div>

            <div className="counterDiv">
                <div className="countImgBox">
                    <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/counter-icon2.png" alt="" />
                </div>
                <div className="counteNumBox">
                <h3>0+</h3>
                <h4>Finished Projects</h4>
                </div>
            </div>

            <div className="counterDiv">
                <div className="countImgBox">
                    <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/counter-icon3.png" alt="" />
                </div>
                <div className="counteNumBox">
                <h3>0+</h3>
                <h4>Skilled Experts</h4>
                </div>
            </div>

            <div className="counterDiv">
                <div className="countImgBox">
                    <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/counter-icon4.png" alt="" />
                </div>
                <div className="counteNumBox">
                <h3>0+</h3>
                <h4>Media Posts</h4>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CounterComponent