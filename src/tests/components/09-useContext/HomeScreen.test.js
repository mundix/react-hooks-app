import React from 'react';
import { mount, shallow } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScree/>', () => {

    // Creamos un objeto user  para pasar al provider del useContext mediante el value
    const user = {
        name: 'Edmundo',
        email: 'ce.pichardo@gmail.com'
    }

   test('Debe mostrarse correctamente', () => {
    //    const wrapper = shallow(<HomeScreen/>);
    // En el snaptshot no se ve el html por que estamos usando shallow , 
    // para que me genere  el html debe usar mount 
       const wrapper = mount(
           <UserContext.Provider value={{user}}>
               <HomeScreen/>
           </UserContext.Provider>
       );
       expect(wrapper).toMatchSnapshot();
   });
    
});
