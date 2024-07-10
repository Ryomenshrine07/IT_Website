import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BlogAndNews.css';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import {faArrowRight, faComments, faUser} from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer';

function BlogAndNews() {

  const[elementRef1,inView1] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef2,inView2] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef3,inView3] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef4,inView4] = useInView({threshold:0.1,triggerOnce:false});
  const[elementRef5,inView5] = useInView({threshold:0.1,triggerOnce:false});

  return (
    <div ref={elementRef1} className={`BlogAndNewsMain ${inView1?'visible':''}`}>

        <div ref={elementRef2} className={`headWithIconBlog ${inView2?'visible':''}`}>
        <FontAwesomeIcon icon={faServicestack} />
            <h3>BLOG & NEWS</h3>
        </div>

        <div ref={elementRef3} className={`headBlog ${inView3?'visible':''}`}>
            <h1>Explore Blogs And News</h1>
        </div>

        <div className="blogCardDiv">

          <div ref={elementRef4} className={`blogCard leftCard ${inView4?'visible':''}`}>

          <div className="imageAndNumBox">
            <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/blog-single-image4-374x257.jpg" alt="" />
            <div className="numBox">
              <h2>01</h2>
              <p>July</p>
            </div>
          </div>

          <div className="ByAndComments">

          <div className="ByDiv">
          <FontAwesomeIcon className='ByIcon' icon={faUser} />
          <h4>By ZeeTee</h4>
          </div>

          <div className="commentDiv">
          <FontAwesomeIcon className='ByIcon' icon={faComments} />
          <h4>12 Comments</h4>
          </div>

          </div>
          <hr />

          <div className="blogCardHead">
            <div className='blogCardHeadText'>
            <h2>Easy and Most Powerful Server and Platform</h2>
            </div>
          </div>

          <button><span>Read More</span><FontAwesomeIcon className='blogCardBtn' icon={faArrowRight}/></button>
          
          </div>

          <div className="blogCard">

          <div className="imageAndNumBox">
            <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/blog-single-image5-374x257.jpg" alt="" />
            <div className="numBox">
              <h2>08</h2>
              <p>July</p>
            </div>
          </div>

          <div className="ByAndComments">

          <div className="ByDiv">
          <FontAwesomeIcon className='ByIcon' icon={faUser} />
          <h4>By ZeeTee</h4>
          </div>

          <div className="commentDiv">
          <FontAwesomeIcon className='ByIcon' icon={faComments} />
          <h4>12 Comments</h4>
          </div>

          </div>
          <hr />

          <div className="blogCardHead">
            <div className='blogCardHeadText'>
            <h2>What is the Best Holding Back the It</h2>
            </div>
          </div>

          <button><span>Read More</span><FontAwesomeIcon className='blogCardBtn' icon={faArrowRight}/></button>
          
          </div>

          <div ref={elementRef5} className={`blogCard rightCard ${inView5?'visible':''}`}>

          <div className="imageAndNumBox">
            <img src="https://wordpress.onertheme.com/gratech/wp-content/uploads/2024/04/blog-single-image6-374x257.jpg" alt="" />
            <div className="numBox">
              <h2>15</h2>
              <p>July</p>
            </div>
          </div>

          <div className="ByAndComments">

          <div className="ByDiv">
          <FontAwesomeIcon className='ByIcon' icon={faUser} />
          <h4>By ZeeTee</h4>
          </div>

          <div className="commentDiv">
          <FontAwesomeIcon className='ByIcon' icon={faComments} />
          <h4>12 Comments</h4>
          </div>

          </div>
          <hr />

          <div className="blogCardHead">
            <div className='blogCardHeadText'>
            <h2>Necessity May Give us Best VirtualCourt</h2>
            </div>
          </div>

          <button><span>Read More</span><FontAwesomeIcon className='blogCardBtn' icon={faArrowRight}/></button>
          
          </div>

        </div>

    </div>
  )
}

export default BlogAndNews