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
            iconoEstrella: "fas fa-regular fa-circle icono-estrella"
        }
    }

    // con el DidMount chequeamos el estado de las tarjetas para evitar que, al recargarse la página, estas se renderizen por primera vez y muestren un estado incorrecto (favoritos). Todo esto maneja que el ícono de estrella de fav sea correcto.
    componentDidMount() {
        let favoritos = [];
        let conseguirFavoritos = localStorage.getItem('favoritos'); // puede estar vacío

        if (conseguirFavoritos !== null) {
            // para trabajar bien con el localStorage, tenemos que pasar la info a array. Va a ser muy dificil trabajar con una cadena de texto.
            let favsArray = JSON.parse(conseguirFavoritos);
            favoritos = favsArray

            if (favoritos.includes(this.props.pelicula.id)) { // includes --> true o false
                this.setState({
                    iconoEstrella: "fas fa-solid fa-star icono-estrella"
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
        if (favoritos.includes(id)) {
            // sacar el ID del array, pisando el array de favoritos con el filtro nuevo
            favoritos = favoritos.filter(cadaID => cadaID !== id);
            this.setState({
                iconoEstrella: "fas fa-regular fa-circle icono-estrella"
            })
        } else {
            // cuando el ID no está en el array, lo agregamos
            favoritos.push(id);
            this.setState({
                iconoEstrella: "fas fa-solid fa-star icono-estrella"
            })
        }

        // convertir a string para almacenarlo en localStorage
        let favsString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favsString)

        console.log(localStorage)
    }

    render() {
        return (
            <article
                onMouseEnter={() => this.setState({ infoHover: 'show' })}
                onMouseLeave={() => this.setState({ infoHover: 'hide' })}
                className='tarjeta-pelicula' >
                <img src={'https://image.tmdb.org/t/p/w342/' + this.props.pelicula.poster_path} alt="" className='imagen-pelicula' />

                {/* Como estamos en la misma clase que el método, el arrow function no necesita al id como parámetro */}
                <i onClick={() => this.agregarYSacarFavs(this.props.pelicula.id)} className={this.state.iconoEstrella}></i>

                <section className={'seccion-' + this.state.infoHover}>
                    <h2 className='titulo'>{this.props.pelicula.title}</h2>
                    <button className='boton-ver-mas' onClick={() => this.verMasVerMenos()}>{this.state.textoVerMas}</button>
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

export default CadaPelicula;