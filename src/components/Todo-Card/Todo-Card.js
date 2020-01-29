import React from 'react';
import './Todo-Card.css';

function Todo_Card(props){
    return(
        <div className='todo-list'>
          <p>{props.name}</p>  
        </div>
    );
}
export default Todo_Card;