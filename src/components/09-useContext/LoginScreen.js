import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    // 1 Obtebner referencia del userContext
   const {user, setUser} = useContext(UserContext);
    // console.log(context);
    // 2 setUser

    // {
    //     id: 123,
    //     name: 'Lo que sea'
    // }

    return (
        <>
             <h1>Login Page</h1>
             <hr />
             <button className="btn btn-primary"
                onClick={()=>{ setUser( {
                    id: 123,
                    name: 'Edmundo'
                })}}
             >
                 Login 
             </button>
        </>
    )
}
