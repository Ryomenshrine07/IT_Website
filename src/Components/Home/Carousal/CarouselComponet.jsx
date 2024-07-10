import { useInView } from 'react-intersection-observer';
import './CarouselComponet.css';
import { Carousel } from 'antd';
function CarouselComponet() {

    const [inViewRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });

  return (
    <div ref={inViewRef} className={`carousel-container ${inView ? 'visible' : 'hidden'}`}>
        <Carousel autoplay className='caraousal'>
                <div>
                    <div >
                        <img src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7682340.jpg&fm=jpg" alt="" />
                        <div className='contentStyle'>
                            <h3>Best IT Solution Provider</h3>
                            <h1>Excellent IT Service For You Success</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iusto facere, qui necessitatibus distinctio nemo provident deleniti, impedit ipsam vero blanditiis iure voluptates aperiam earum, aliquid eum ab placeat adipisci quas sint. Suscipit, cupiditate quas.</p>
                        </div>
                        <button >Explore</button>
                    </div>
                </div>
                <div>
                <div>
                        <img src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7682340.jpg&fm=jpg" alt="" />
                        <div className='contentStyle'>
                            <h3>Best IT Solution Provider</h3>
                            <h1>Excellent IT Service For You Success</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iusto facere, qui necessitatibus distinctio nemo provident deleniti, impedit ipsam vero blanditiis iure voluptates aperiam earum, aliquid eum ab placeat adipisci quas sint. Suscipit, cupiditate quas.</p>
                        </div>
                        <button>Explore</button>
                    </div>
                </div>
                <div>
                <div>
                        <img src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7682340.jpg&fm=jpg" alt="" />
                        <div className='contentStyle'>
                            <h3>Best IT Solution Provider</h3>
                            <h1>Excellent IT Service For You Success</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iusto facere, qui necessitatibus distinctio nemo provident deleniti, impedit ipsam vero blanditiis iure voluptates aperiam earum, aliquid eum ab placeat adipisci quas sint. Suscipit, cupiditate quas.</p>
                        </div>
                        <button>Explore</button>
                    </div>
                </div>
                <div>
                    <div>
                    <img src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7682340.jpg&fm=jpg" alt="" />
                    <div className='contentStyle'>
                        <h3>Best IT Solution Provider</h3>
                        <h1>Excellent IT Service For You Success</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iusto facere, qui necessitatibus distinctio nemo provident deleniti, impedit ipsam vero blanditiis iure voluptates aperiam earum, aliquid eum ab placeat adipisci quas sint. Suscipit, cupiditate quas.</p>
                    </div>
                    <button>Explore</button>
                    </div>
                </div>
            </Carousel>
    </div>
  )
}

export default CarouselComponet