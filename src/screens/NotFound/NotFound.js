import React from "react";
import './NotFound.css';
import fotoNotFound from './travolta_confused.jpeg';

function NotFound() {
    let busqueda = window.location.pathname;
    return (
        <section className="contenido-notFound">
            <h2>Wait, where is my page?</h2>
            <p>We are sorry, but the page "{busqueda}" you were looking for doesn't seem to exist. Try checking if there is a typo on the url, or navigate your way back to the Home page using the house icon!</p>
            <img alt="" src={fotoNotFound} className='travolta' />

        </section>
    )
}

export default NotFound;