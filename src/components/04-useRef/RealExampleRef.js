import React, { useState } from 'react';
import '../02-useEffect/effect.css';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';

export const RealExampleRef = () => {

    //voy a crear un estado par amostrar y ocultar multiple custom hook
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            {show && <MultipleCustomHook/>}
            
            <button className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
