import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodo } from '../../fixtures/demoTodo';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp/>', () => {

    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn();

    test('Debe Mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de agregar un TODO', () => {
        //El mount (De ENZYME) se usa para probar la aplicacoin en contexto, todo en general 
        const wrapper = mount(<TodoApp />); //shallow o mount el shallow es mas basico.

        // console.log(wrapper.find('TodoAdd').props());
        // console.log(wrapper.find('TodoAdd').props('handleAddTodo'));
        // console.log(wrapper.find('TodoAdd').prop('handleAddTodo'));
        act(() => {
            // No funciona, da un errro con el useReducer
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        // expect(localStorage.setItem).toHaveBeenCalledWith({});
    });

    test('Debe eliminar un TODO', () => {
        // Llamo el agregar, y leugo borrarlo 
       wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
    //    Ahora borramos el primero
       wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id);
       expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    });
    

});




