import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import astroLogo from '../assets/astrologo2.0(sin fondo).png'
import Styles from '../styles/navbar.module.css'
import { searchProduct } from '../redux/actions/actionsFilter';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import LogOut from './LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

const Navbar = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [input, setInput] = useState('')

    function handleInput(e){
        e.preventDefault()
        setInput(e.target.value)

    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchProduct(input))
        history.push('/products')

    }

    const { isAuthenticated } = useAuth0()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div>
                    <Link to='/' >
                        <img src={astroLogo} className={Styles.logo} alt='astro_logo' />
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
<<<<<<< HEAD
                        <li>
                            <Link to='/register'>
                            <i class="bi bi-person-circle nav-link mb-3"> Register</i>
                            </Link>
=======
                        <li className={Styles.Login}>
                            {!isAuthenticated
                                ?
                                <LoginButton  />
                                :
                                <LogOut />}
>>>>>>> 52606809e05cf99efe3fbbc8fa4e0bc81d92875f
                        </li>
                    </ul>
                     <form className="d-flex" role="search"> 
                        <input onChange={handleInput} value={input}className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                        <button  className="btn btn-outline-secondary" type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
                     </form> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;