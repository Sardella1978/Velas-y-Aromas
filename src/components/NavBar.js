import React from 'react';
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import Facebook from "./iconos/Facebook.png";
import Instagram from "./iconos/Instagram.png"
import mail from "./iconos/mail.png"
import Logo1 from "./imagenes/Logo1.png"

const NavBar = () => {


    return (
        <nav className= "navbar-flex">
            <ul className='nav-flex-redes'>
               <li><img src= {Facebook} alt= "IconoFacebook"/></li>
               <li><img src= {Instagram} alt= "IconoInstagram"/></li>
               <li><img src= {mail} alt= "IconoMail"/></li>
            </ul>
            <div className='titulo'>
                 <Link to="Home"><img className='imgLogo' src= {Logo1} alt="" /></Link>
            </div>
            <ul className = "nav-flex-category">
               <li><Link to='category/Velas'>Velas</Link></li>
               <li><Link to='category/Difusores'>Difusores</Link></li>
               <li><Link to='category/Esencias'>Esencias</Link></li>                     
            </ul>
               <div className='iconoCarrito'><Link to="Carrito"><CartWidget/></Link></div>
        </nav>
    )
    }
    

export default NavBar