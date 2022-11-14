import React from 'react';
import { Link } from 'react-router-dom';
import astroLogo from '../assets/astrologo2.0(sin fondo).png'
import Styles from '../styles/navbar.module.css'


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div>
                    <Link to='/' >
                        <img src={astroLogo} className={Styles.logo} alt='astro_logo'/>
                        <a className={Styles.navbar_brand} >Astro Games</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mt-3 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' >
                            <i class="bi bi-house nav-link mb-3"> Home</i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' >
                            <i class="bi bi-person-circle nav-link mb-3"> My Account</i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/shoppingcart' >
                                <i class="0bi bi-cart4 nav-link mb-3"> My Cart</i>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Product..." aria-label="Search"/>
                        <button className="btn btn-outline-secondary mt-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;