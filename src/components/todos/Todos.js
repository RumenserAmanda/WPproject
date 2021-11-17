import React, { useState, useReducer } from 'react';
import TodoItem from './TodoItem';
import { Button} from 'react-bootstrap';


function reducer(todos, action) {
  switch (action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  // console.log(todos);

  return (

  <div class="p-3 mb-2 bg-dark">
    <div className = "container-lg text-center">
      <h1 class="fst-italic text-primary">What's the plan for today?</h1>
      <div class="alert alert-primary fst-italic" role="alert">
        Do not procrastination!
      </div>
  
      <form onSubmit={handleSubmit} className="text-align-center">
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <Button type="Submit" variant="info">Add Todo</Button>
      </form>

      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
    </div>
  </div>


  );
}



export default Todos;
