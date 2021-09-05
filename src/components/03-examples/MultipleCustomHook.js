import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHook = () => {

    const {counter, increment} = useCounter(1);
    // const state = useFetch('https://breakingbadapi.com/api/quotes');

    // const {loading, data, error} = useFetch('https://breakingbadapi.com/api/quotes/1');
    const {loading, data, error} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>Breakikng Bad Quotes!!!</h1>
            <hr />
            {
                loading 
                ?
                (
                    <div className='alert alert-info text-center'>
                        Loading ...
                    </div>
                )
                :
                (
                    <div className="blockquote text-right">
                        <p className="mb-0">
                            {quote}
                        </p>
                        <footer className="blockquote-footer">
                            {author}
                        </footer>
                    </div>
                )
            }

            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente Quote
            </button>
            
           
        </div>
    )
}
