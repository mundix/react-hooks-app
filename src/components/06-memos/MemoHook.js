import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

import { procesoPesado } from '../../helpers/procesoPesado';
import '../02-useEffect/effect.css';


export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    //Etamos pasando nuetra funcinoa procesoPesado ,  para que le memorize este call back en general.
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter <small> {counter}</small></h3>
            <hr />
            {/* <p>{procesoPesado(counter)}</p> */}
            <p>{memoProcesoPesado}</p>
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
