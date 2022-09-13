import React, { Component } from "react";
import CadaPelicula from "../../components/CadaPelicula/CadaPelicula";
import './Favoritos.css';
import CadaSerie from "../../components/CadaSerie/CadaSerie";

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            hayFavs: false,
            series: []
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

    render() {
        let pelisFavoritas = this.state.peliculas.map((unaPeli, idx) => <CadaPelicula key={unaPeli.title + idx} pelicula={unaPeli} />)
        let seriesFavoritas = this.state.series.map((unaSerie, idy) =>
            <CadaSerie key={unaSerie.name + idy} serie={unaSerie} />)

        return (
            <section className="contenedor-favoritos">
                <h2>Favoritos</h2>
                <section className="display-favoritos">
                    {pelisFavoritas}
                    {seriesFavoritas}
                </section>
            </section>
        )
    }
}

export default Favoritos;