import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodo } from '../../fixtures/demoTodo';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp/>', () => {

    const wrapper = shallow(<TodoApp />);

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
            // wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1]);
        });

        // expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');

    });

});




