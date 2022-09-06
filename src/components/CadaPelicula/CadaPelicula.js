import React, {Component} from 'react';
import './cadaPelicula.css'

class CadaPelicula extends Component{
    constructor(props){
        super(props)
        this.state={
           verMas: false,
           claseVerMas: 'esconder',
           textoVerMas: 'Ver Más',
           infoHover: 'hide'
        }
    }

    verMasVerMenos(){
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

    render(){
        return(
             <article className='tarjeta-pelicula'>
                <img src={'https://image.tmdb.org/t/p/w342/' + this.props.pelicula.poster_path} alt="" className='imagen-pelicula'/>
                <h2 className='titulo'>{this.props.pelicula.title}</h2>
                <button className='boton-ver-mas' onClick={() => this.verMasVerMenos()}>{this.state.textoVerMas}</button>
                <div className={this.state.claseVerMas}>
                    <p className='descripcion'>{this.props.pelicula.overview}</p>
                </div>
            </article>

        )
    }

}

export default CadaPelicula