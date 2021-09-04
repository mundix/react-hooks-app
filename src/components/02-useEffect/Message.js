import React, {useEffect, useState} from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const {x, y} = coords;

    useEffect(() => {
        console.log('Component Montado');
        // ESte retorno de useEffect puede consumir la memoria , ojo con eso. 
        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y };
            setCoords(coords);
            // console.log(':D');
        }
        window.addEventListener('mousemove', mouseMove);

        return () => {
            // Remover el listener 
            window.removeEventListener('mousemove', mouseMove);
            console.log('componetn desmontado');
        }

    }, [])

    return (
        <div>
            <h3>Eres FGenial!</h3>
            <p>
                X: {x}, Y: {y}
            </p>
        </div>
    )
}
