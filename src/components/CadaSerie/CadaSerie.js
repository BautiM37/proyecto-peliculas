import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CadaSerie.css';
import sinFoto from './sinFoto.jpg';

class CadaSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verMas: false,
            claseVerMas: 'esconder',
            textoVerMas: 'See More',
            infoHover: 'hide',
            esFavorito: false,
            iconoEstrella: "fas fa-regular fa-circle icono-estrella"
        }
    }

    // con el DidMount chequeamos el estado de las tarjetas para evitar que, al recargarse la página, estas se renderizen por primera vez y muestren un estado incorrecto (favoritos). Todo esto maneja que el ícono de estrella de fav sea correcto.
    componentDidMount() {
        let favoritosSeries = [];
        let conseguirFavoritosSeries = localStorage.getItem('favoritosSeries'); // puede estar vacío

        if (conseguirFavoritosSeries !== null) {
            // para trabajar bien con el localStorage, tenemos que pasar la info a array. Va a ser muy dificil trabajar con una cadena de texto.
            let favsArray = JSON.parse(conseguirFavoritosSeries);
            favoritosSeries = favsArray

            if (favoritosSeries.includes(this.props.serie.id)) { // includes --> true o false
                this.setState({
                    iconoEstrella: "fas fa-solid fa-star icono-estrella"
                })
            }
        }
    }

    verMasVerMenos() {
        if (!this.state.verMas) {
            this.setState({
                textoVerMas: "See Less",
                verMas: true,
                claseVerMas: 'mostrar'
            })
        } else {
            this.setState({
                textoVerMas: 'See More',
                verMas: false,
                claseVerMas: 'esconder'
            })
        }
    }

    agregarYSacarFavs(id) {
        let favoritosSeries = [];
        let conseguirFavoritosSeries = localStorage.getItem('favoritosSeries');

        if (conseguirFavoritosSeries !== null) {
            let favsArray = JSON.parse(conseguirFavoritosSeries);
            favoritosSeries = favsArray
        }
        if (favoritosSeries.includes(id)) {
            // sacar el ID del array, pisando el array de favoritos con el filtro nuevo
            favoritosSeries = favoritosSeries.filter(cadaID => cadaID !== id);
            this.setState({
                iconoEstrella: "fas fa-regular fa-circle icono-estrella"
            })
        } else {
            // cuando el ID no está en el array, lo agregamos
            favoritosSeries.push(id);
            this.setState({
                iconoEstrella: "fas fa-solid fa-star icono-estrella"
            })
        }

        // convertir a string para almacenarlo en localStorage
        let favsString = JSON.stringify(favoritosSeries);
        localStorage.setItem('favoritosSeries', favsString)

    }

    render() {
        return (
            <article
                onMouseEnter={() => this.setState({ infoHover: 'show' })}
                onMouseLeave={() => this.setState({ infoHover: 'hide' })}
                className='tarjeta-serie' >
                <Link to={`/serie/id/${this.props.serie.id}`}>
                    {this.props.serie.poster_path !== null ?
                        <img src={'https://image.tmdb.org/t/p/w342' + this.props.serie.poster_path} alt="" className='imagen-serie' />
                        :
                        <img src={sinFoto} alt='' className='imagen-nohay' />
                    }
                </Link>

                {/* Como estamos en la misma clase que el método, el arrow function no necesita al id como parámetro */}
                <i onClick={() => this.agregarYSacarFavs(this.props.serie.id)} className={this.state.iconoEstrella}></i>

                <section className={'seccion-' + this.state.infoHover}>
                    <h2 className='titulo'>{this.props.serie.name}</h2>
                    <button className='boton-ver-mas' onClick={() => this.verMasVerMenos()}>{this.state.textoVerMas}</button>
                    <div className={'info-extra-' + this.state.claseVerMas}>
                        {this.props.serie.overview.length > 250 ?
                            <p className='overview-serie'>{this.props.serie.overview.slice(0, 250)}...</p>
                            :
                            <p className='overview-serie'>{this.props.serie.overview}</p>
                        }
                    </div>
                </section>
            </article>
        )
    }

}

export default CadaSerie;