import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext'; //este un componente useContext
// La idea es que no haga refresh para cambair entre pantallas, par eso es el router 

export const MainApp = () => {
    // const user = {
    //     id: 1234,
    //     name: 'Edmundo',
    //     email: 'ce.pichardo@gmail.com'
    // }

    const [user, setUser] = useState({
        id: 1234
    });

    return (
        // <UserContext.Provider value={user}>
        // REgreso un obnjeto con propiedades , para enviar mas cosas
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
