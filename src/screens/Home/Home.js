import React, { Component } from "react";
import PeliculasCartel from "../../components/PeliculasCartel/PeliculasCartel";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import './Home.css';

class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <section>
                <div className="App">
                    <section className='pagina'>
                        <section className='contenido'>
                            <div className='seccion1'>
                                <h2>Películas Populares</h2>
                                <PeliculasPopulares />
                            </div>
                            <div className='seccion2'>
                                <h2>Películas en Cartelera</h2>
                                <PeliculasCartel />
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        )
    }
}

export default Home;