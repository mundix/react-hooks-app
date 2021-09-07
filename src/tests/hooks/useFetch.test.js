import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {
    test('Debe de retornar la informacion por defecto', () => {
        
        const counter = 1;
        const { result } = renderHook(() => useFetch(`https://breakingbadapi.com/api/quotes/${counter}`));
        
        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    });

    test('Debe de tener la info deseada, loading false, error false', async() => {

        const counter = 1;
        const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://breakingbadapi.com/api/quotes/${counter}`));
        await waitForNextUpdate();
        
        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);


    });
    
    
});
