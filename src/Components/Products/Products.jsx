import Header from "../../UIComponents/Header";
import "./Products.css";

export default function Products() {
  return (
    <section className="Products" id="Products">
     <Header heading="PRODUCTS"/>
      <div className="ProductDiv">
        <div className="Prod">
          <img src="../../../public/assets/product_1-removebg-preview.png" />
          <h3>LEVELUK JRIV</h3>
          <p>THE ENERGY SAVER</p>
          <p className="proPara">
            The JRIV has four solid electrode plates which reduces the energy
            consumption. Due to the solid platinum-coated titanium plates, this
            unit can still produce the strong acid and strong Kangen waters.
          </p>
        </div>
        <div className="Prod">
          <img src="../../../public/assets/product_2-removebg-preview.png" />
          <h3>LEVELUK SD501</h3>
          <p>THE ULTIMATE HOME USE MODEL</p>
          <p className="proPara">
            Leveluk SD501 is Enagic’s Flagship Model. The industry leading
            continuous ionized electrolysis water generator system featuring a
            large LCD panel and clear voice prompts, is the finest machine in
            its class.
          </p>
        </div>
        <div className="Prod">
          <img src="../../../public/assets/product_3-removebg-preview.png" />
          <h3>LEVELuK SD501 PLATINUM</h3>
          <p>THE ULTIMATE HOME USE MODEL</p>
          <p className="proPara">
            Fully equipped with a built-in electrolysiss chamber, a large LCD
            panel and clear voice prompts, the SD501 PLATINUM is the leader of
            the pack.7 Platinum plated Titanium plates comprise the electrolysis
            chamber.
          </p>
        </div>
        <div className="Prod">
          <img src="../../../public/assets/product_4-removebg-preview.png" />
          <h3>LEVELUK K8</h3>
          <p>THE MIGHTY 8-PLATE ANTI OXIDIZER</p>
          <p className="proPara">
            The K8 (Kangen 8) is Enagic’s most powerful antioxidant machine
            featuring 8 Platinum dipped Titanium plates for improved water
            ionization and increased antioxidant production potential.
          </p>
        </div>
        <div className="Prod">
          <img src="../../../public/assets/product_5-removebg-preview.png" />
          <h3>LEVELUK SUPER 501</h3>
          <p>ENAGIC'S MOST POWERFUL MODEL!</p>
          <p className="proPara">
            The Leveluk Super501 is Enagic’s top of the line model for heavy
            home use. This highly productive machine has 7 and 5 electrode
            plates, a twin hose system, industry leading cleaning system and a
            water pressure regulating function
          </p>
        </div>
        <div className="Prod">
          <img src="../../../public/assets/product_6-removebg-preview.png" />
          <h3>ANESPA DX</h3>
          <p>MINERAL ION WATER SPA</p>
          <p className="proPara">
            Treat yourself to a soothing hot spring experience with the ANESPA
            DX. With an abundant flow of mineralized water and a relaxing
            massage shower head, your bathroom can instantly turn into a calming
            hot spring oasis.
          </p>
        </div>
      </div>
    </section>
  );
}
