import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effect.css';


export const Memorize = () => {

    //recordatorio cuando se destructura un custrom Hook , se usa { } por que es de objeto 
    const { counter, increment } = useCounter(10);

    // A diferencia de un useState , es de array [ ] = useState () ...
    // un caso donde no debe llamarse 
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            {/* <h2>Counter <small> {counter}</small></h2> */}
            <h2>Counter <Small value={counter} /></h2>
            <hr />
            <button className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
