import "./Footer.css";

export default function Footer() {
  return (
     <footer>
    <div className="footer1">
      <div className="AboutCom">
        <h5>About Company</h5>
        <p>
          As a seasoned water purifier distributor and an expert in water
          treatment technologies, we take pride in bringing you cutting edge
          solutions for clean, safe and healthy water. Our commitment is to
          provide top-notch water purification systems tailored to meet your
          diverse needs.
        </p>
      </div>
      <div className="ContactDiv">
        <div className="con">
          <img src="../../../public/assets/conatct-removebg-preview.png" />
          <p>Tony Paul Healthy H2 O</p>
        </div>
        <div className="con">
          <img src="../../../public/assets/location-removebg-preview.png" />
          <p>Jameela's Building
Opposite State Bank
Vazhakkala, Thrikkakara PO
Kochi 682021</p>
        </div>
        <div className="con">
          <img src="../../../public/assets/Screenshot_2024-10-11_221440-removebg-preview.png" />
          <p>+91 8848416969
          +91 9526747891</p>
        </div>
        <div className="con">
          <img src="../../../public/assets/mail-removebg-preview.png" />
          <p>kangenwatercochin@gmail.com</p>
        </div>
      </div>
    </div>
    <div className="footer2">
    <div className="Fline"></div>
    <div className="socialMedia">
      <h3>Connect us</h3>
      <div className="socialMediaIn">
     <a><img src="../../../public/assets/ytoo-removebg-preview.png"/></a>
     <a><img src="../../../public/assets/browser-removebg-preview.png"/></a>
     </div>
      </div>
    </div>
    </footer>
  );
}
