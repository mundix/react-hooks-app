import React, { useRef } from 'react';
import '../02-useEffect/effect.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        // document.querySelector('input').select();
        // Esto hace lo mismo que el de arriba, pero esta relacionado con el input mediente el ref 
        inputRef.current.select(); //esto es algo no tan comun 
        console.log(inputRef);
    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input 
                ref={inputRef}
                className="form-control mb-5" 
                placeholder="Su Nombre" 
            />

            <button className="btn btn-outline-primary"
                onClick={handleClick} 
            >
                Focus
            </button>
        </div>
    )
}
