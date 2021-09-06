import React, { useEffect, useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

const init = () => {
    // Otra cosa que podemos hacer es guardar en el localStorage
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
    // ahroa voy a retornar un localSTorage
    return JSON.parse( localStorage.getItem('todos')) || []; 
}

//El reducer puede crease en  un archivo independiente 'TodoReducer.js'

export const TodoApp = () => {

    //reducer => es la function reducer, 
    //initialState es el valor inicial
    //el init es una function par ainiciarlizar el state en caso de que el state sea utuilizado , se puede memorizar 
    // const [todos, dispatch] = useReducer(TodoReducer, initialState);
    //Esta funcion init me va ayudar a ejecutar mas rapido, me va ayudar a computar todo y se define const init = () =>
    const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

    // const [formValues, handleInputChange] = useForm({
    // handleInputChange se asigna mediante onChange el input 
    // const [{description}, handleInputChange] = useForm({
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    // Lio que quiero hacer es grabar ene l localStorage cuando los todo Cambian, puedo usar un useEffect 
    useEffect(() => {
       //si los todos cambian tengo que volver a grabar en el localStorage
       localStorage.setItem('todo', JSON.stringify(todos));
    }, [todos]);

    // console.log(formValues);
    // console.log(description);
    // Como hago para borrar el formulario , en el use form crear un metodo reset = () => 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            // desc: 'Nueva Tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        // En el dispatch del useReducer es que se le manda la accion
        dispatch(action);
        // Y llamo el reset del useForm 
        reset();
    }


    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map(todo => (
                                <li
                                    key={todo.id}
                                    className='list-group-item'
                                >
                                    <p className="text-center">{todo.desc}</p>
                                    <button className="btn btn-danger">
                                        Borrad
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            value={description}
                            type="text"
                            name='description'
                            className='form-control'
                            placeholder='Aprender ...'
                            autoComplete='off'
                        />
                        <button
                            className='btn btn-outline-warning mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
