import React from 'react';
import ReactDOM from 'react-dom';
// import {HookApp} from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';
import './global.css';

// Vamos a trabjar con rauters : https://reactrouter.com/web/guides/quick-start 
// hay que instlar este package 

ReactDOM.render(
  // <HookApp/>,
  // <CounterApp/>,
  // <CounterWithCustomHook/>,
  // <SimpleForm/>,
  // <FormWithCustomHook/>,
  // <MultipleCustomHook/>,
  // <FocusScreen/>,
  // <RealExampleRef/>,
  // <Layout/>,
  // <Memorize/>,
  // <MemoHook/>,
  // <CallbackHook/>,
  // <Padre/>,
  // <TodoApp/>,
  <MainApp/>,
  document.getElementById('root')
);

// import './components/08-useReducer/intro-reducer';
// Que resuelve el useContext => es para comunicarse entre padre hijos nieto componentes y puede hacer mas componentes.