import React, {useEffect} from 'react';

export const Message = () => {

    useEffect(() => {
        console.log('Component Montado');
        // ESte retorno de useEffect puede consumir la memoria , ojo con eso. 
        return () => {
            console.log('componetn desmontado');
        }

    }, [])

    return (
        <div>
            <h3>Eres FGenial!</h3>
        </div>
    )
}
