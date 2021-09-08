import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodo } from "../../fixtures/demoTodo";


describe('Pruebas en <TodoListItem/>', () => {


    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapp = shallow(<TodoListItem
        todo={demoTodo[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />);

    test('Debe mostrarse correctamente', () => {

        expect(wrapp).toMatchSnapshot();
    });


    test('DEbe de llamar la function BORRAR handleDelete', () => {
        // jest.fn() 
        //toHaveBeenCalled
        //toHaveBeenCallWith
        wrapp.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodo[0].id);
    });

    test('Debe llamar la function handlToggle', () => {
        // jest.fn() 
        //toHaveBeenCallWith
        wrapp.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodo[0].id);

    });

    test('Debe de mostrar el texto correctamente', () => {
        //contenido del parrafo
        const p = wrapp.find('p');
        expect(p.text().trim()).toBe(`1 - ${demoTodo[0].desc}`);
    });

    test('Debe tener la clase complete, TODO.done = true ', () => {
        const todo = demoTodo[0];
        todo.done = true;
        const wrapp = shallow(<TodoListItem
            todo={todo}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);

        expect(wrapp.find('p').hasClass('complete')).toBe(true);

    })

});
