import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effect.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);


    // Esto ahora es un useCallback Hook 
    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    // para usar el useCallBack , es como el memo , pero enviando una function , 
    //que depende de su argumento para que se ejecute
    //Esto retorna una function 
    const increment = useCallback(
        // () => {
        (num) => {
            // setCounter(counter + 1);
            setCounter(c => c + num); //De esta manera se pede guardar con el memo. 
        },
        // [setCounter, counter], //Esto no funciona, aun asi se repite por que el counter simepre cambia, y no queremos eso
        [setCounter] // Lo que se hace es definir un arqumento y enves de counter + 1 , c = c + 1 , 
        //pero si le ponermos el arg 'num'  entonces nos e modifica   el counter 
    );

    useEffect(() => {
        // ???
    }, [increment]); //si no se hiciera con el useCallback este efecto se dispararia toda las veces que se renderiza 


    return (
        <div>
            <h1>Use Callbackk Hook {counter}</h1>
            <hr />


            <ShowIncrement increment={ increment }/>
        </div>
    )
}
