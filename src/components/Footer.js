import {Link} from "react-router-dom"
import Facebook from "./iconos/Facebook.png";
import Instagram from "./iconos/Instagram.png"
import mail from "./iconos/mail.png"

const Footer = () => {
      
    return (
        <section>

            <nav className= "navbar-flex">
            <ul className='nav-flex-redes'>
               <li><img src= {Facebook} alt= "IconoFacebook"/></li>
               <li><img src= {Instagram} alt= "IconoInstagram"/></li>
               <li><img src= {mail} alt= "IconoMail"/></li>
            </ul>
            </nav>
                    
        </section>
)}

export default Footer