import React from 'react';
import { shallow } from "enzyme";
import { renderHook, act } from '@testing-library/react-hooks';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Pruebas en <RealExampleRef', () => {
   
    const wrapp = shallow(<RealExampleRef/>);
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapp).toMatchSnapshot();
        expect(wrapp.find('MultipleCustomHook').exists()).toBe(false);
    });

    test('should DEbe mostrar el componetne <MultipleCustomHook/>', () => {
        wrapp.find('button').simulate('click');
        expect(wrapp.find('MultipleCustomHook').exists()).toBe(true);

    });
    
    

});
