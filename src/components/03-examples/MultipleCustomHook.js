import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHook = () => {

    // const state = useFetch('https://breakingbadapi.com/api/quotes');
    const {loading, data, error} = useFetch('https://breakingbadapi.com/api/quotes');

    const {author, quote} = !!data && data[0];
    console.log(author, quote);

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
            
           
        </div>
    )
}
