import React from 'react';

// Se puede pobner los props types, por que es obligatorio en este caso el increment que es una function
export const ShowIncrement = React.memo(({increment}) => {

    console.log('Me volvi a generar');

    return (
            <button className='btn btn-primary'
                onClick={ () => { increment( 5 )  }}
            >
                Incrementar
            </button>    
    )
}); 
