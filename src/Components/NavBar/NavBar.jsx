import React from 'react';
import logo from '../../assets/logoff.png';
import './NavBar.css';
import carrito from '../../assets/carrito.png';
import {CartWidget} from '../CartWidget/CartWidget';


function NavBar() {
    return (
        /* uso sin etiqueta para que no aparezca un div dupicado <img class="img2" src={carro} alt="" />*/
        <>
            <header>
                <img src={logo} alt="" />
                <nav>
                    <a href="">INICIO</a>
                    <a href="">QUIENES SOMOS</a>
                    <a href="">PRODUCTOS</a>
                    <a href="">COMO COMPRAR?</a>
                    <a href="">LOGIN</a>
                </nav>
                <CartWidget carro={carrito}/>
            </header>
        </>
    );
}

export default NavBar