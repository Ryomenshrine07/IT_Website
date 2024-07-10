import AnimateCursor from "./Components/Animated Cursor/AnimateCursor"
import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Components/Aboute Page/AboutPage";
import ServicePage from "./Components/ServicePage/ServicePage";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import ContactComponent from "./Components/Contact/ContactComponent";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {

  return (
    <div className="App">
      <AnimateCursor/>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage/>}/>
        <Route path="/services/database_management" element={<ServiceDetails/>}/>
        <Route path="/services/it_consultancy" element={<ServiceDetails/>}/>
        <Route path="/services/app_developent" element={<ServiceDetails/>}/>
        <Route path="/services/database_security" element={<ServiceDetails/>}/>
        <Route path="/services/it_training" element={<ServiceDetails/>}/>
        <Route path="/services/web_development" element={<ServiceDetails/>}/>
        <Route path="/contact" element={<ContactComponent/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
