import React from 'react';
import logo from '../assets/logoff.png';
import carro from '../assets/carrito.png';
import './NavBar.css';

const Header = () => {
    return(
        /* uso sin etiquete para que no aparezca un div dupicado */
        <> 
             <img src= {logo} alt="" />
            <nav>
                <a href="">INICIO</a>
                <a href="">QUIENES SOMOS</a>
                <a href="">PRODUCTOS</a>
                <a href="">COMO COMPRAR?</a> 
            </nav>
             <img class= "img2" src= {carro} alt="" />
        </>
       
    )
}

export default Header