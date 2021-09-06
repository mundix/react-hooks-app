import React, { useEffect, useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import { useForm } from '../../hooks/useForm';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

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
    return JSON.parse(localStorage.getItem('todos')) || [];
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

    // Esto se va para el TodoApp por que pertenece a esed compoentn (Debio ser removido)
    // const [{ description }, handleInputChange, reset] = useForm({
    //     description: ''
    // });

    // Lio que quiero hacer es grabar ene l localStorage cuando los todo Cambian, puedo usar un useEffect 
    useEffect(() => {
        //si los todos cambian tengo que volver a grabar en el localStorage
        localStorage.setItem('todo', JSON.stringify(todos));
    }, [todos]);

    // 
    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }
    // Esta se encarga de agregar el todo, lo que intersa que cuando se llamae esta function agrege el todo
    // ESte es el quele voy a enviar a mi componetn TodoAdd 
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    // console.log(formValues);
    // console.log(description);
    // Como hago para borrar el formulario , en el use form crear un metodo reset = () => 

    // Esto tambien se fue para TodoAdd para manejarlo desde alla
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (description.trim().length <= 1) {
    //         return;
    //     }

    //     const newTodo = {
    //         id: new Date().getTime(),
    //         desc: description,
    //         // desc: 'Nueva Tarea',
    //         done: false
    //     };

    //     const action = {
    //         type: 'add',
    //         payload: newTodo
    //     }

    //     // En el dispatch del useReducer es que se le manda la accion
    //     dispatch(action);
    //     // Y llamo el reset del useForm 
    //     reset();
    // }


    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* TodoList , argumentos: todos, handleDelete, handleToggle */}
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>

        </>
    )
}
