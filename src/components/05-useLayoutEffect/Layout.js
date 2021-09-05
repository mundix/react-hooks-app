import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const {  data  } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const {  quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    // Agrego el useLayoutEffect , con el argumento [] para que se ejecute una sola ves
    useLayoutEffect(() => {
        // console.log('hey');
        // console.log(pTag.current.getBoundingClientRect()); // Esto nos deveuvle las dimensiones y posicion del elem en ref
        setBoxSize(pTag.current.getBoundingClientRect());
    // }, []);
    }, [quote]); // si el quote cambia

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p className="mb-0"
                    ref={pTag}
                >
                    {quote}
                </p>
              
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente Quote
            </button>


        </div>
    )
}
