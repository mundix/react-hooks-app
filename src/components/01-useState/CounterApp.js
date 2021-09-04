import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    // const [counter, setCounter] = useState({
    // const [{counter1, counter2}, setCounter] = useState({
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20, // si tengo mas propiedades ,se utilzia el operador sphread ... 
        counter3: 30,
        counter4: 40
    });
    
    // console.log(counter); //si lo desestructuramos ya no existe el objeto counter
    //voy a extraer el counter1 y el counter 2 del state para poder trabaar con ellos
    const {counter1, counter2} = state; 

    return (
        <>
          {/* <h1>Counter { counter }</h1>   */}
          <h1>Counter { counter1 }</h1>  
          <h1>Counter { counter2 }</h1>  
          <hr />
          <button className="btn btn-primary"
            onClick={ () => { 
                // setCounter( counter + 1); 
                // Como quiero manteenr el counter2 necesito usar el operador spread al state
                // setCounter({
                setState({
                    ...state,
                    counter1: counter1 + 1 //pero se pierde el valor del counter2
                }); 
            }}
          >
              +1
          </button>
        </>
    )
}
