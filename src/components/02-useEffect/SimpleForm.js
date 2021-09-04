import React, { useEffect, useState } from 'react';
import './effect.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    //Cualqueir cambio en el componete ejectua el useEffect, sin importar que cambie.
    // useEffect( () => {
        // console.log('hey!');
    // });

    useEffect( () => {
        console.log('hey!');
    }, []);
    //Los efecto se recomenda trabajr de manera individual, si queremos hacer algo cuando se carga el formulario , entonces
    // poneindo como segundo argumento un [] vacio

    // Para escuchar los cambios en 'formState'  se hace de esta manera.
    useEffect( () => {
        console.log('FormState Cambio!');
    }, [formState]);

    // Si quiero monitorea cuando el email cambia solamente
    useEffect( () => {
        console.log('Email Cambio!');
    }, [email]); // email viene de la desextructuracion

    // const handleInputChange = (e) => {
    const handleInputChange = ({target}) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setFormState({
            ...formState,
            // DEstructurando el target name y asignado el target.value
            [target.name] : target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Tu Nombre"
                    className="form-control"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="email"
                    placeholder="Tu Email"
                    className="form-control"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

        </>
    )
}
