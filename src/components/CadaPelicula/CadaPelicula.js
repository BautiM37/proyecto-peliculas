import React, { Component } from 'react';
import './cadaPelicula.css'

class CadaPelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verMas: false,
            claseVerMas: 'esconder',
            textoVerMas: 'Ver Más',
            infoHover: 'hide',
            esFavorito: false,
            iconoEstrella: "fas fa-regular fa-star"
        }
    }

    componentDidMount() {
        let favoritos = [];
        let conseguirFavoritos = localStorage.getItem('favoritos');

        if (conseguirFavoritos !== null) {
            let favsArray = JSON.parse(conseguirFavoritos);
            favoritos = favsArray

            if (favoritos.includes(this.props.pelicula.id)) {
                this.setState({
                    iconoEstrella: "fas fa-solid fa-star"
                })
            }
        }
    }

    verMasVerMenos() {
        if (!this.state.verMas) {
            this.setState({
                textoVerMas: "Ver Menos",
                verMas: true,
                claseVerMas: 'mostrar'
            })
        } else {
            this.setState({
                textoVerMas: 'Ver Más',
                verMas: false,
                claseVerMas: 'esconder'
            })
        }
    }

    agregarYSacarFavs(id) {
        let favoritos = [];
        let conseguirFavoritos = localStorage.getItem('favoritos');

        if (conseguirFavoritos !== null) {
            let favsArray = JSON.parse(conseguirFavoritos);
            favoritos = favsArray
        }
        if (favoritos.includes(id)){
            favoritos = favoritos.filter( cadaID => cadaID !== id);
            this.setState({
                iconoEstrella: "fas fa-regular fa-star"
            })
        } else {
            favoritos.push(id);
            this.setState({
                iconoEstrella: "fas fa-solid fa-star"
            })
        }

        let favsString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favsString)

        console.log(localStorage)
    }

    render() {
        return (
            <article
                onMouseEnter={() => this.setState({infoHover: 'show'})}
                onMouseLeave={() => this.setState({infoHover: 'hide'})}
                className='tarjeta-pelicula' >
                <img src={'https://image.tmdb.org/t/p/w342/' + this.props.pelicula.poster_path} alt="" className='imagen-pelicula' />
                <section className={'seccion-' + this.state.infoHover}>
                    <h2 className='titulo'>{this.props.pelicula.title}</h2>
                    <button className='boton-ver-mas' onClick={() => this.verMasVerMenos()}>{this.state.textoVerMas}</button>
                    <i className={this.state.iconoEstrella}></i>
                    <div className={'info-extra-' + this.state.claseVerMas}>
                        {this.props.pelicula.overview.length > 250 ? 
                            <p className='overview-pelicula'>{this.props.pelicula.overview.slice(0, 250)}...</p>
                        :
                        <p className='overview-pelicula'>{this.props.pelicula.overview}</p>
                        }
                    </div>
                </section>
            </article>

        )
    }

}

export default CadaPelicula