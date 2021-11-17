import React from 'react';
import { Table} from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";



function TodoItem({ todo, dispatch }) {
  return (
  <body>
    <div className="container bg-info bg-secondary " >
      
      <Table className="position-relative table table-sm" striped bordered hover >
  
        <tbody>
          <tr>
            <td><input type="checkbox" onChange={() => dispatch({ type: 'flip', payload: { id: todo.id } })} /></td>
            <td><span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>{todo.text} </span></td>
            <td><button onClick={() => dispatch({ type: 'delete', payload: { id: todo.id } })}><BsFillTrashFill /></button>
            </td>
          </tr>
        </tbody>
      </Table>
    
    </div>
  </body>

  );
}

export default TodoItem;