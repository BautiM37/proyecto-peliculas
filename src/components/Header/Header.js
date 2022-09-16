import React, { Component } from 'react';
import './Header.css';
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
                        <img alt='' src='/logo.png' className='imagen-logo' />
                    </div>
                    :
                    <div className='logo-titulo'>
                        <img alt='' src='/logo.png' className='imagen-logo' />
                        <h1 className='nombre-pag'>MovieSpot</h1>
                    </div>
                }

                {this.state.headerEnHover === false ?
                    <div className='icons-menu'>
                        <Link to='/'><i className="fas fa-solid fa-home"></i></Link>
                        <Link to='/favourites'><i className="fas fa-solid fa-star"></i></Link>
                        <Link to='/populars'><i className="fas fa-solid fa-fire"></i></Link>
                        <Link to='/newreleases'><i className="fas fa-solid fa-clock"></i></Link>
                        <Link to='/tvshows'><i className="fas fa-solid fa-tv"></i></Link>
                    </div>
                    :
                    <div className='icons-menu-hover'>
                        <Link to='/'><i className="fas fa-solid fa-home"><p className='descripcion-iconos'>Home</p></i></Link>
                        <Link to='/favourites'><i className="fas fa-solid fa-star"><p className='descripcion-iconos'>Favourites</p></i></Link>
                        <Link to='/populars'><i className="fas fa-solid fa-fire"><p className='descripcion-iconos'>Populars</p></i></Link>
                        <Link to='/newreleases'><i className="fas fa-solid fa-clock"><p className='descripcion-iconos'>New Releases</p></i></Link>
                        <Link to='/tvshows'><i className="fas fa-solid fa-tv"><p className='descripcion-iconos'>TV Shows</p></i></Link>
                    </div>
                }

                {this.state.headerEnHover === false ? <i className="fas fa-solid fa-code"></i> : <Footer />}

            </header>
        )
    }
}

export default Header;