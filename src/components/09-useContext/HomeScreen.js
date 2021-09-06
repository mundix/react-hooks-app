import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const context = useContext(UserContext);
    console.log(context);

    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}
