import "./NavBar.css";

export default function NavBar(){
     return(
          <nav>
               <div className="NavLogo">
                    <img src="../../../assets/H20_logo-removebg-preview.png"/>
               </div>
               <ul className="NavContent1">
                    <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Contact Us</a></li>
               </ul>
               <div className="NavBtn">
                    <a  href="#Products"><button >Products</button></a>
               </div>
               <img className="NavMenu" src="../../../public/assets/menu.png"/>
               <div className="MobileWidth">
               <ul className="NavContent2">
                    <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Contact Us</a></li>
               </ul>
               </div>
          </nav>
     )
}