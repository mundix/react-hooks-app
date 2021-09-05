import React, { memo } from 'react'

// export const Small = ({value}) => {
// export const Small = memo(({value}) => { //No es tan comun usar memo () si no React.memo 
export const Small = React.memo(({ value }) => { //Esta es la forma mas usada

    // Lo que sucede aqui es qe en el boton de show , 
    // cuando se llama el useState se renderiza el component aun que  nos e incremente
    //Renderiza nuevamente el componente Memorize, por ende se hace la llamada , si fuera a algun api
    //estuviera haciendo llamadas sin controly  demanera imnecesaria.
    //http? 

    // Este componete es el qeu quiero memorizar en memo. 
    // en este  caso se le argega un prefijo a la funcion memo()  y dentro todo el componente

    console.log('Me volvi  a llamar :(');

    return (
        <small>
            {value}
        </small>
    )
    // }
}) // encapsulado en memo() para memoriazar , es bien simple 
