import Marquee from "react-fast-marquee";
import "./Testimonials.css";
import Header from "../../UIComponents/Header";
export default function Testimonial(){
     return(
          <section className="Testimonial" id="Testimonial">
               <Header heading="Kangen Water Using Celebrities "/>
          <div className="TestiDiv">
          <Marquee pauseOnHover="true">
               <div className="Testibox">
                    <img src="../../../public/assets/rajini.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/aishwarya rai.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/hrthik roshan.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/Obama.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/rakesh roshan.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/ravi.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/srk.png"/>
               </div>
          </Marquee>
          <Marquee direction="right" pauseOnHover="true">
               <div className="Testibox">
                    <img src="../../../public/assets/shipha.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/vineet jain.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/trump.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/yadav.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/Raviteja.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/robert.png"/>
               </div>
               <div className="Testibox">
                    <img src="../../../public/assets/ekta kapoor.png"/>
               </div>
          </Marquee>
          </div>
          </section>
     )
}