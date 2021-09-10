import React from 'react';
import { mount, shallow } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <LoginScree/>', () => {
    const setUser = jest.fn();
    const wrapper = mount(
        // Aqui se debe enviarel setUser 
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>

    );

    test('Mostrar correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de ejecutar el setUser con el arcumento esperado', () => {
        
        wrapper.find('button').prop('onClick')(); //Con el () al final es que llama la function 

        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Edmundo'
        })
    })


});
