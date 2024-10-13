import "./Heading.css"

export default function Header({heading}){
     return(
          <div className="headingDiv">
               <div className="HeadingIn">
               <h3>{heading}</h3>
               </div>         
          </div>
     )
}