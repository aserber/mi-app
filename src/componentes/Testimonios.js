import React from 'react';
import '../stylesheets/Testimonios.css'

 function Testimonios(props){
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.jpg`)} alt='foto' />
            <div className='contenedor-texto-testimonios'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
                <p className='cargo-testimonio'><strong>
                    {props.cargo}</strong> en <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio'>
                    {props.testimonio}"</p>
            </div>
        </div>

        
    );
};

export default Testimonios