import React, { Component } from 'react';
class  Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
    return(
        <footer className='header'>
            <ul class="team">
                <li>Bautista Migliore</li>
                <li>Joaquin Finkelstein</li>
                <li>Facundo Martinez</li>
            </ul>
        </footer> 
    )}
}

export default Footer;