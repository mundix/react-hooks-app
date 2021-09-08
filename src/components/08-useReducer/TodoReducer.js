export const todoReducer = (state = [], action) => {
    switch (action.type) {
        
        case 'add':
            return [...state, action.payload];
        
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        
        case 'toggle' : //Version mas corta que el old
            return state.map( todo => 
                    (todo.id === action.payload) 
                    ? {...todo, done: !todo.done} 
                    : todo
                )
        case 'toggle-old':
            return state.map(todo => {
                // Asumiento en el payload.id viene en el mismo 
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    // Debe retonar algo para no mutar y destruir algo , porque si no va a trasnforma en undefine 
                    return todo;
                }
            }); //hay que devovler un nuego state

        default:
            return state;
    }
}