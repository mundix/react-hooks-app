import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Prueba en <AppRouter />', () => {

    const user = {
        id: 1,
        email: 'ce.pichardo@gmail.com'
    }
    const wrapper = mount(
        <UserContext.Provider value={user}>
            <AppRouter/>
        </UserContext.Provider>
    );

    test('DEbe de mostrarse correcamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    

})
