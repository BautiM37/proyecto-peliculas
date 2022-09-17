import React, { Component } from "react";
import CadaPelicula from "../../components/CadaPelicula/CadaPelicula";
import './Favoritos.css';
import CadaSerie from "../../components/CadaSerie/CadaSerie";
//import Filtrador from "../../components/Filtrador/Filtrador";

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            peliculasCargadas: [],
            hayFavs: false,
            series: [],
            seriesCargadas: [],
            valor: ''
        }
    }

    componentDidMount() {
        let conseguirFavoritos = localStorage.getItem('favoritos');
        let conseguirFavoritosSeries = localStorage.getItem('favoritosSeries');
        let favoritos = [];
        let favoritosSeries = [];

        if (conseguirFavoritos !== null) {
            let favsArray = JSON.parse(conseguirFavoritos);
            favsArray.map(unFavorito => fetch("https://api.themoviedb.org/3/movie/" + unFavorito + "?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US")
                .then(res => res.json())
                .then(data => {
                    favoritos.push(data)
                    this.setState({
                        peliculas: favoritos,
                        peliculasCargadas: favoritos,
                        hayFavs: true
                    });
                })
                .catch())
        }
        if (conseguirFavoritosSeries !== null) {
            let favsArraySeries = JSON.parse(conseguirFavoritosSeries);
            favsArraySeries.map(unFavSerie => fetch("https://api.themoviedb.org/3/tv/" + unFavSerie + "?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US")
                .then(res => res.json())
                .then(data => {
                    favoritosSeries.push(data)
                    this.setState({
                        series: favoritosSeries,
                        seriesCargadas: favoritosSeries,
                        hayFavs: true
                    });
                })
                .catch())

        }
        if (conseguirFavoritosSeries !== null && conseguirFavoritos !== null) {
            this.setState({
                hayFavs: false
            })
        }
    }

        // detener que el form se envíe, "event" se reemplaza por el evento en cuestión cuando se lo llame
        evitarSubmit(event) {
            event.preventDefault();
        }
    
        // obtener el valor ingresado por el usuario en el campo input, actualizando el estado interno del componente con setState()
        guardarCambios(event) {
            this.setState({
                valor: event.target.value
            },
                () => this.filtrarContenido(this.state.valor)
            );
        }
    
        filtrarContenido(filtro) {
            let peliculasFiltradas = this.state.peliculasCargadas.filter(pelicula => pelicula.title.toLowerCase().includes(filtro))
            let seriesFiltradas = this.state.seriesCargadas.filter( serie => serie.name.toLowerCase().includes(filtro))
    
            this.setState({
                peliculas: peliculasFiltradas,
                series: seriesFiltradas
            })
        }

    render() {
        let pelisFavoritas = this.state.peliculas.map((unaPeli, idx) => <CadaPelicula key={unaPeli.title + idx} pelicula={unaPeli} />)
        let seriesFavoritas = this.state.series.map((unaSerie, idy) =>
            <CadaSerie key={unaSerie.name + idy} serie={unaSerie} />)

        return (
            <React.Fragment>
           
                <section className="contenido-filtro">
                    <form onSubmit={(event) => this.evitarSubmit(event)} className='formulario-filtro'>
                        <input type='text' onChange={(event) => this.guardarCambios(event)} value={this.state.valor} className='input-filtro' placeholder="Filter results"/>
                    </form>
                </section>
                {/* <Filtrador peliculas={pelisFavoritas} series={seriesFavoritas}/> */}
                <section className="contenedor-favoritos">
                    <h2 className="titulo-favs">Favourites</h2>
                    <section className="display-favoritos">
                        {pelisFavoritas}
                        {seriesFavoritas}
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Favoritos;