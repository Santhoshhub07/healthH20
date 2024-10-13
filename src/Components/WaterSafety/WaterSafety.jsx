import Header from "../../UIComponents/Header";
import "./WaterSafety.css";


export default function WaterSafety() {
  return (
    <section className="About" id="About">
      <Header heading="Is Your Drinking Water Safe?" />
      <div className="WaterDiv">
          <p><span className="p1">99% </span>of Indians rely on groundwater for their daily needs, but are you gambling with
your health? What looks like clean water can actually harbor hidden
dangers—<span className="p2">chemicals, pesticides, fluorides</span>, and harmful bacteria all seep into
groundwater, leading to serious health issues over time. Don’t take chances with your
health.</p>
      </div>
    </section>
  );
}
