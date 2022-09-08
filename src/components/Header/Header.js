import React, { Component } from 'react';
import './Header.css';
import imagenLogo from './logo.png'

class  Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerEnHover: false
        }
    }

    render() {
        return (    
            <header 
                onMouseEnter={() => this.setState({headerEnHover: true})} 
                onMouseLeave={() => this.setState({headerEnHover: false})} 
                className={'menu-principal-' + this.state.headerEnHover} >

                {this.state.headerEnHover === false ?
                    <div className='logo-solo'>
                        <img alt='' src={imagenLogo} className='imagen-logo' />
                    </div>
                    :
                    <div className='logo-titulo'>
                        <img alt='' src={imagenLogo} className='imagen-logo' />
                        <h1 className='titulo'>MovieSpot</h1>
                    </div>
                }

                {this.state.headerEnHover === false ?
                    <div className='icons-menu'>
                        <i className="fas fa-solid fa-user"></i>
                        <i className="fas fa-solid fa-home"></i>
                        <i className="fas fa-solid fa-star"></i>
                        <i className="fas fa-solid fa-fire"></i>
                        <i className="fas fa-solid fa-clock"></i>
                    </div>
                    :
                    <div className='icons-menu-hover'>
                        <i className="fas fa-solid fa-user"></i>
                        <p className='desc-icono'>Tu perfil</p>
                        <i className="fas fa-solid fa-home"></i>
                        <p className='desc-icono'>Home</p>
                        <i className="fas fa-solid fa-star"></i>
                        <p className='desc-icono'>Favoritos</p>
                        <i className="fas fa-solid fa-fire"></i>
                        <p className='desc-icono'>Populares</p>
                        <i className="fas fa-solid fa-clock"></i>
                        <p className='desc-icono'>Nuevas</p>
                    </div>
                }
                
            </header> 
        )
    }
}
 
export default Header;