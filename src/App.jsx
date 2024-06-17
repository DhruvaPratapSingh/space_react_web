import React from "react";
import Services from "./components/Services";
import bgVidio from "./assets/earth-bg.mp4";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
const App=()=>{
  React.useEffect(()=>{
    Aos.init({
      duration:1200,
      easing:"ease-in-out",
    })
  })
  return(
    <div>
      <div className="h-[900px] relative">
        <video autoPlay loop muted
        className="fixed right-0 top-0 h-[900px] w-full object-cover z[-1]">
          <source src={bgVidio} type="video/mp4"/>
        </video>
        <Navbar/>
       <Hero/>
      </div>
      <Services/>
      <Banner/>
      <Banner2/>
      <Footer/>
    </div>
  )
}
export default App;