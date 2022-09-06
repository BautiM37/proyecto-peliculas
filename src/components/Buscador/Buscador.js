import React, {Component} from "react";
import './Buscador.css'

class Buscador extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <section className='buscador'>
                <form>
                    <i className="fas fa-solid fa-search"></i>
                    <input type='text' className='input-formulario'/>
                </form>
            </section>
        )
    }
}

export default Buscador;