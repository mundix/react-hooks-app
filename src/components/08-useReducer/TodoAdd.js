import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    //Creo el submit aqui
    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        // dispatch(action); //Este no es el dispach , con el handleADdtodo en ves del dispatch
        // Esta funcion se llama desde el padre del component que recibe un newTodo, y se encarga de hacer el dispatch
        handleAddTodo(newTodo);
        reset();
    }

    return (
        // La forma corta del Fragment asi se llama este elemento <> que es un root element del component 
        <>
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
        </>
    )
}
