import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en uiseForm', () => {
    const initialForm  = {
        name: 'Edmundo',
        email: 'ce.pichardo@gmail.com'
    }

    test('Debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        
        expect(values.name).toEqual('Edmundo');
        expect(values).toEqual(initialForm);

        expect(typeof (handleInputChange)).toBe('function');
        expect(typeof (reset)).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });

        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'Melissa'});

        // expect(counter).toBe(101);
    });
    
    test('Debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
            reset();
        });

        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    })
    

});
