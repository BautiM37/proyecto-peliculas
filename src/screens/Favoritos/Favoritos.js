import React, { Component } from "react";
import CadaPelicula from "../../components/CadaPelicula/CadaPelicula";
import './Favoritos.css'

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            hayFavs: false
        }
    }

    componentDidMount() {
        let conseguirFavoritos = localStorage.getItem('favoritos');
        let favoritos = [];

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
        } else {
            this.setState({
                hayFavs: false
            })
        }
    }

    render() {
        return (
            <section className="contenedor-favoritos">
                <h2>Favoritos</h2>
                <section className="display-favoritos">
                    {
                        this.state.peliculas.map((unaPeli, idx) =>
                            <CadaPelicula key={unaPeli.title + idx} pelicula={unaPeli} />
                        )}
                </section>
            </section>
        )
    }
}

export default Favoritos;