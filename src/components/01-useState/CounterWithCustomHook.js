import React from 'react';
import { useCounter } from '../../hooks/useCounter';


import './counter.css';

export const CounterWithCustomHook = () => {

    // sobre escribiendo el bnombre del state por counter  , se puede llamar como querramos
    // const {state:counter, increment, decrement} = useCounter(); 
    //Este custom hook trae la logica del contador 'useCounter'
    const {state, increment, decrement, reset} = useCounter( 100 ); 

    return (
        <>
           {/* <h1>Counter With Hook { 0 }</h1>  */}
           <h1>Counter With Hook { state }</h1> 
           <hr />
           {/* El argumento que se pasa al increment es evento (event del click) el primer argumento de donde hace click   */}
           <button className="btn"
            // onClick={increment}
            onClick={ () => increment(2)}
           > +1</button>
           <button className='btn btn-danger'
            onClick={reset}
           >Reset</button>
           <button className="btn"
            onClick={ () => decrement(2)}
           > -1</button>
        </>
    )
}
