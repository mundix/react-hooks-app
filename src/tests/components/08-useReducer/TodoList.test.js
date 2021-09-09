import React from 'react';
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodo } from '../../fixtures/demoTodo';


describe('Pruebas en <TodoList/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodo}
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />

    );

    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe debe de tener dos <TodoListItem/>', () => {
        
        expect(wrapper.find('TodoListItem').length).toBe(demoTodo.length);
        // Con esto puedo ver las functiones del component TodoListItem usando el at en la posiciond e los elementos y props 
        // console.log(wrapper.find('TodoListItem').at(0).props('handleDelete'));
        // Ojo para verifiar si una function existe en las propiedades del componetne , es con prop no con props .prop('functionName') 
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    })

})
