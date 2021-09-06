import React from 'react';

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <>
            <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className='list-group-item'
                                >
                                    <p
                                        className={`${todo.done && 'complete'}`}
                                        onClick={() => handleToggle(todo.id)}

                                    > {i + 1} - {todo.desc}</p>
                                    <button
                                        className="btn btn-danger"
                                        // Como necesito pasar argumento , se envia un callback y la funciona con el argumento
                                        onClick={() => handleDelete(todo.id)}
                                    >
                                        Borrad
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
        </>
    )
}
