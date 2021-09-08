import React from 'react';
import {shallow} from 'enzyme';
import { MultipleCustomHook } from '../../../components/03-examples/MultipleCustomHook';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

// Esto lo que hace Cuando vaya a utilizar este artchivo , en lugar de usar el useFetch  , va a utilizar una implementacion del useFetch
jest.mock('../../../hooks/useFetch');
// jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHook/>', () => {
    
    // Ahora quiero definir como trabeje el useCounter 
    // useCounter.mockReturnValue({
    //     counter: 10,
    //     increment: () => {} //simplemente defino la funcion para que no haga nada
    // });


    test('debe mostrase correctamente', () => {

        //cuando se llame el useFetch
        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHook/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar la informacion que espero', () => {
        // Voy a pasar esto por un mock , solo me improta el resultado
        // useFetch
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHook/>);

        // Como hacer busqueda en el wrapper con el metodo find();
        // quier buscar por clases
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Fernando');

        // console.log(wrapper.html());



    });
    
})
