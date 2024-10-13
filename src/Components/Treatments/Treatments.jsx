import Header from "../../UIComponents/Header";
import "./Treatments.css";


export default function Treatments() {
  return (
    <section id="Treatments" className="Treatments">
      <div className="TreatmentDiv">
        <div className="TreatHeading">
          <Header heading="Our Solution"/>
        </div>
        <div>
          <div className="treatBox1">
            <div className="tBox1">
              <h5>Pressure Vessel Filters</h5>
              <p>A closed tank with media like carbon, gravel, zeolites, and greensand that removes
contaminants from water. Ideal for industrial, gardening, bathroom, and kitchen use
(not safe for drinking).</p>
            </div>
            <div className="tBox1">
              <h5>Reverse Osmosis (RO) Filters</h5>
              <p>Uses a semi-permeable membrane to remove dissolved salts, minerals, and harmful
              microorganisms. Ensures clean drinking water."</p>
            </div>
            <div className="tBox1">
              <h5>Activated Carbon Filters</h5>
              <p>Derived from charcoal, these filters absorb impurities like chlorine, pesticides, and
              organic materials.</p>
            </div>
            <div className="tBox1">
              <h5>Ultraviolet (UV) Filtration</h5>
              <p>Uses UV light to disinfect water by inactivating harmful bacteria and viruses.</p>
            </div>
          </div>
          <div className="treatBox2">
            <div className="tBox2">
              <h5>Ion Exchange Resin Filters</h5>
              <p>Removes water hardness by exchanging ions, softening the water for various uses</p>
            </div>
            <div className="tBox2">
              <h5>Ultrafiltration (UF) Systems</h5>
              <p>"Uses larger membrane pores to filter out particles, bacteria, and some viruses,
              improving water clarity</p>
            </div>
            <div className="tBox2">
              <h5>Kangen Water Ionizers</h5>
              <p>A state-of-the-art ionization system developed by Enagic Japan. Kangen water
mimics natural pristine water, with 7 different pH levels for versatile uses—from
drinking to cleaning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
