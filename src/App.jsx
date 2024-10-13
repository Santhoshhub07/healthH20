import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
// import Products from "./Components/Products/Products";
import Home from "./Components/Home/Home";
import WaterSafety from "./Components/WaterSafety/WaterSafety";
import Testimonial from "./Components/Testimonials/Testimonials";
import ChooseUs from "./Components/WhyChooseUs/ChooseUs";
import Footer from "./Components/Footer/Footer";
import Treatments from "./Components/Treatments/Treatments";
import Tony from "./Components/Tony/Tony";
export default function App(){
  return(
    <>
    <NavBar/>
    <Home/>
    <WaterSafety/>
    <Treatments/>
    <ChooseUs/>
    <Testimonial/>
    <Tony/>
    <Footer/>
    {/* <Products/> */}
    </>
  )
}