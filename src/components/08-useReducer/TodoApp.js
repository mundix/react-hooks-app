import React, { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

//El reducer puede crease en  un archivo independiente 'TodoReducer.js'

export const TodoApp = () => {

    //reducer => es la function reducer, 
    //initialState es el valor inicial
    //el init es una function par ainiciarlizar el state en caso de que el state sea utuilizado , se puede memorizar 
    const [ todos ] = useReducer(TodoReducer, initialState);

    console.log(todos);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola que tal</li>
            </ul>
        </div>
    )
}
