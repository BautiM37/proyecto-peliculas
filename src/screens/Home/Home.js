import React, { Component } from "react";
import PeliculasCartel from "../../components/PeliculasCartel/PeliculasCartel";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import Series from "../../components/Series/Series";
import Buscador from "../../components/Buscador/Buscador";
import './Home.css';
import CadaPelicula from "../../components/CadaPelicula/CadaPelicula";
import CadaSerie from "../../components/CadaSerie/CadaSerie";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultadoBusqueda: "",
            peliculasBuscadas: [],
            seriesBuscadas: []
        }
    }

    buscador(busqueda) {
        this.setState({
            resultadoBusqueda: busqueda
        })

        fetch('https://api.themoviedb.org/3/search/movie?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&query=' + busqueda + '&page=1&include_adult=false')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peliculasBuscadas: data.results
                });
            })
            .catch()

        fetch('https://api.themoviedb.org/3/search/tv?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&query=' + busqueda + '&page=1&include_adult=false')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    seriesBuscadas: data.results,
                });
            })
            .catch()
    }

    render() {

        return (
            <section>
                <div className="App">
                    <section className='pagina'>
                        <Buscador busqueda={(texto) => this.buscador(texto)} />

                        <section className='contenido'>
                            {
                                this.state.resultadoBusqueda === "" ?
                                    <section>
                                        <div className='seccion'>
                                            <h2 className="titulo-seccion">Popular Films</h2>
                                            <PeliculasPopulares />
                                        </div>
                                        <div className='seccion'>
                                            <h2 className="titulo-seccion">New Releases</h2>
                                            <PeliculasCartel />
                                        </div>
                                        <div className='seccion'>
                                            <h2 className="titulo-seccion">TV Shows</h2>
                                            <Series />
                                        </div>
                                    </section>
                                    :
                                    <section className="resultados-busqueda">
                                        <h2 className="titulo-seccion">Film results for "{this.state.resultadoBusqueda}"</h2>
                                        {
                                            this.state.peliculasBuscadas.length === 0 ?
                                                <img src="/loader.gif" alt="loading content" />
                                                :
                                                <div className='seccion-busqueda'>
                                                    {this.state.peliculasBuscadas.map((unaPelicula, idx) => <CadaPelicula key={unaPelicula.title + idx} pelicula={unaPelicula} />)}

                                                </div>
                                        }
                                        <h2 className="titulo-seccion">TV Show results for "{this.state.resultadoBusqueda}"</h2>
                                        {
                                            this.state.seriesBuscadas.length === 0 ?
                                                <img src="/loader.gif" alt="loading content" />
                                                :
                                                <div className='seccion-busqueda'>
                                                    {this.state.seriesBuscadas.map((unaSerie, idx) => <CadaSerie key={unaSerie.title + idx} serie={unaSerie} />)}

                                                </div>
                                        }
                                        <div className="nada-phone">

                                        </div>
                                    </section>
                            }

                        </section>

                    </section>
                </div>
            </section>
        )
    }
}

export default Home;