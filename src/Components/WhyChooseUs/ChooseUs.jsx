import Header from "../../UIComponents/Header";
import "./ChooseUs.css";

export default function ChooseUs() {
  return (
    <section className="ChooseDiv">
      <Header heading="Why to Choose Us!" />
      <div className="ChooseGrid">
          <div className="flex1">
        <div className="grid">
          <img className="GridImg" src="../../../public/assets/CHOOSE1-removebg-preview.png" />
          <h4>Expertise</h4>
          <p>
            With years of experience in water treatment, we understand the
            intricacies of water purification. Trust us to deliver reliable and
            effective solutions.
          </p>
        </div>
        <div className="grid">
          <img className="GridImg" src="../../../public/assets/CHOOSE2-removebg-preview (1).png" />
          <h4>Quality Products</h4>
          <p>
            We offer a wide range of high-quality water purification systems
            from reputable brands. Our products undergo rigorous testing to
            ensure durability and efficiency
          </p>
        </div>
        <div className="grid">
          <img className="GridImg" src="../../../public/assets/CHOOSE3-removebg-preview.png" />
          <h4>Custom Solutions</h4>
          <p>
            We work closely with our clients to design and implement custom
            solutions that address specific water quality challenges.
          </p>
        </div>
        </div>
        <div className="flex2">
        <div className="grid">
          <img className="GridImg" src="../../../public/assets/CHOOSE4-removebg-preview.png" />
          <h4>Service and Maintenance</h4>
          <p>
            Our commitment doesn't end with the sale. We provide comprehensive
            service & maintenance plans to keep your water purification plant
            running smoothly
          </p>
        </div>
        <div className="grid">
          <img className="GridImg" src="../../../public/assets/CHOOSE5-removebg-preview.png" />
          <h4>Affordability</h4>
          <p>
            We believe that clean water should be accessible to all. We strive
            to offer competitive pricing without compromising on quality
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
