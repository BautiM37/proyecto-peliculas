import React, { Component } from "react";
import PeliculasCartel from "../../components/PeliculasCartel/PeliculasCartel";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import Series from "../../components/Series/Series";
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
                                <h2 className="titulo-seccion">Popular Films</h2>
                                <PeliculasPopulares />
                            </div>
                            <div className='seccion2'>
                                <h2 className="titulo-seccion">New Releases</h2>
                                <PeliculasCartel />
                            </div>
                            <div className='seccion3'>
                                <h2 className="titulo-seccion">TV Shows</h2>
                                <Series />
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        )
    }
}

export default Home;