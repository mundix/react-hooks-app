const initialState = [{  //se puede poenr cualquier nombre de variable, pero este es el valor inicial
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];

// Se crea una function 
const todoReducer = ( state = initialState , action) => {

    if(action?.type === 'agregar') {
        return [ ...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2, 
    todo: 'Comprar Leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);