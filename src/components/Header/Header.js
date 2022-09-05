import React, { Component } from 'react';
import './Header.css'

class  Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }


    render() { 
        return (    
            <header className='header'>
                <div className='logo'>
                    <i class="musica fas fa-solid fa-music fa-2x"></i>
                    <h1>MovieSpot</h1>
                </div>
                <div className=''>
                <button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-solid fa-user"></i></button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Mi Perfil</a></li>
                        <li><a class="dropdown-item" href="#">Mi Lista</a></li>
                        <li><a class="dropdown-item" href="#">Ajustes</a></li>
                    </ul>
                </div>
                {/* <div>
                    <button className='btn btn-outline-light' type='button'><i class="fas fa-solid fa-user"></i></button>
                </div> */}
            </header> 
        )
    }
}
 
export default Header;