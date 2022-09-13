import React, { Component } from 'react';
import './Header.css';
import imagenLogo from './logo.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerEnHover: false
        }
    }

    render() {
        return (
            <header
                onMouseEnter={() => this.setState({ headerEnHover: true })}
                onMouseLeave={() => this.setState({ headerEnHover: false })}
                className={'menu-principal-' + this.state.headerEnHover} >

                {this.state.headerEnHover === false ?
                    <div className='logo-solo'>
                        <img alt='' src={imagenLogo} className='imagen-logo' />
                    </div>
                    :
                    <div className='logo-titulo'>
                        <img alt='' src={imagenLogo} className='imagen-logo' />
                        <h1 className='nombre-pag'>MovieSpot</h1>
                    </div>
                }

                {this.state.headerEnHover === false ?
                    <div className='icons-menu'>
                        <i className="fas fa-solid fa-home"></i>
                        <i className="fas fa-solid fa-star"></i>
                        <i className="fas fa-solid fa-fire"></i>
                        <i className="fas fa-solid fa-clock"></i>
                        <i className="fas fa-solid fa-tv"></i>
                    </div>
                    :
                    <div className='icons-menu-hover'>
                        <Link to='/'><i className="fas fa-solid fa-home">  Home</i></Link>
                        <Link to='/favoritos'><i className="fas fa-solid fa-star">  Favourites</i></Link>
                        <Link to='/populares'><i className="fas fa-solid fa-fire">  Populars</i></Link>
                        <Link to='/cartelera'><i className="fas fa-solid fa-clock">  New Releases</i></Link>
                        <Link to='/seriestv'><i className="fas fa-solid fa-tv">  TV Shows</i></Link>
                    </div>
                }

                {this.state.headerEnHover === false ? <i className="fas fa-solid fa-code"></i> : <Footer />}

            </header>
        )
    }
}

export default Header;