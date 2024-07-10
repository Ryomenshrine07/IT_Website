import AboutZeeTee from './AboutComponent/AboutZeeTee'
import BlogAndNews from './Blog And News/BlogAndNews'
import CarouselComponet from './Carousal/CarouselComponet'
import CaseStudyComponent from './CaseStudy/CaseStudyComponent'
import CounterComponent from './CounterComponent/CounterComponent'
import './Home.css'
import OurOffering from './OurOfferring/OurOffering'
import ServiceDemo from './ServicesDemo/ServiceDemo'
import TalkAndReview from './TalkAndReview/TalkAndReview'
import WorkProcess from './Work/WorkProcess'
function Home() {


    return (
        <div className='HomeMain'>
            <CarouselComponet/>
            <ServiceDemo/>
            <AboutZeeTee/>
            <CounterComponent/>
            <CaseStudyComponent/>
            <OurOffering/>
            <WorkProcess/>
            <TalkAndReview/>
            <BlogAndNews/>
        </div>
    )
}

export default Home