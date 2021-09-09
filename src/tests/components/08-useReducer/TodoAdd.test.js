import React from 'react';
import { shallow }  from 'enzyme';
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import { demoTodo } from '../../fixtures/demoTodo';


describe('Pruebas en <TodoAdd/>', () => {
    
    const handleAddTodo = jest.fn(); 
    const wrapper = shallow(<TodoAdd
        handleAddTodo={handleAddTodo}
    />);


    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('NO debe llamar el handleAddTodo', () => {
        // voy a intentar (simular) disparar el submit del formulario , por consecuencia nod ebe haber ningun value  
        // deberia chocar en la valdiacion de description 
        // puedo hacer referencia ene l form al onSubmit 
        const formSubmit = wrapper.find('form').prop('onSubmit');//DEevuelve Function
        // entonces puedo llamar este formSubmit pero me dara un error si tengo un preventDefault(); 
        // Tengo que enviarlo en el argumento  un objeto { preventDefault(){} }
        formSubmit({preventDefault() {} }); //Esta es una forma de hacerlo. 

        expect(handleAddTodo).toHaveBeenCalledTimes(0); //no se ha llamado ninguna vez

    });

    test('Debe de llamar handleAddTodo', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        // Esto cambia el input 

        const formSubmit = wrapper.find('form').prop('onSubmit');//DEevuelve Function
        formSubmit({preventDefault() {} }); //Esta es una forma de hacerlo. 

        expect(handleAddTodo).toHaveBeenCalledTimes(1); //no se ha llamado ninguna vez
        // Necesito que se halla llamado con un objeto
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); 
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        }); 

        // Borrar el input
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
    
})
