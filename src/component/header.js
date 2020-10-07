import React from 'react'
import '../styles.ccs/header.css'
import carrito from '../img/logo.png'

function header() {
    return (
        <header className="hero">
        <nav className="nav__hero">
            <div className=" nav__container">
                <div className="logo">
                       <div><a href='#'><i className='bx bxl-facebook fb'></i></a></div>
                       <div><a href='#'><i className='bx bxl-instagram inst' ></i></a></div>
                       <div><a href='#'><i className='bx bxl-twitter twt' ></i></a></div>
                       <div><a href='#'><i class='bx bxl-whatsapp what' ></i></a></div>
                    {/* <h2 className="logo__name">Tienda Virtual<span className="point">.</span></h2> */}
                </div>
                <div class="links">
                    <a href="#" className="link ">Inicio</a>
                    <a href="#" className="link">Productos</a>
                    <a href="#" className="link">contacto</a>
                    {/* <a href="#" className="link">Clientes</a> */}
                    <a href="#" className="link link--active">Login</a>
                </div>
            </div>
        </nav>


        <section className="container hero__main">  
            {/* <div className="hero__textos">
                <h1 className="title">Tienda<span className="title--active" >Virtual.</span></h1>  
                 <p className="copy ">Bienvenidos al <span className="copy__active">siguiente nivel</span></p>
                  <a href="#" className="cta">Empezar</a>
            </div> */}
            <img src={carrito} className="mockup"/>
        </section>
        

        <div className="ola" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="ola1">
            <path d="M0.00,49.98 C116.53,112.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" className="ola2"></path></svg>
        </div>

        <div className="wave" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave1">
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="wave2" ></path></svg>
        </div>
    </header>
    )
}
export default header;
