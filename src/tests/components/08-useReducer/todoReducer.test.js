import React from 'react';
import { shallow } from 'enzyme';
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodo";

describe('Pruebas en <TodoReducer/>', () => {

    test('Retornar el estado por defecto', () => {
        // Los reducer siempre regresan un estado. 
        const state = todoReducer(demoTodo, {});
        expect(state).toEqual(demoTodo);
    });

    test('Debe de agregar un TODO', () => {
        const newTodo = {
            id:3,
            desc: 'Aprender Espress',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodo, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodo, newTodo]);


    });

    test('Debe de borrar un todo', () => {
        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(demoTodo, action );
        expect(state.length).toBe(1);
    });
    
    test('Debe hacer el TOGGLE del TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(demoTodo, action );
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodo[1]);

    });
    

});
