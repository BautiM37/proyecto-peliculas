import React, {Component} from 'react';
import './cadaPelicula.css'

class CadaPelicula extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
             <article className='tarjeta-pelicula'>
                <img src={'https://image.tmdb.org/t/p/w342/' + this.props.pelicula.poster_path} alt="" className='imagen-pelicula'/>
                <h2 className='titulo'>{this.props.pelicula.title}</h2>
                <p className='descripcion'>{this.props.pelicula.overview}</p>
                <p>Ver más</p> 
            </article>

        )
    }

}

export default CadaPelicula