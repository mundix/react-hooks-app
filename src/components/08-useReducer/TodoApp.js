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
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                <ul className='list-group list-group-flush'>
                {
                    todos.map( todo => (
                        <li
                            key={todo.id}
                            className='list-group-item'
                        >
                            <p className="text-center">{ todo.desc }</p>
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
                    <form action="">
                        <input 
                            type="text" 
                            name='description'
                            className='form-control'
                            placeholder='Aprender ...'
                            autoComplete='off'
                        />
                        <button
                            className='btn btn-outline-primary mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
            
        </>
    )
}
