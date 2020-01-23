import React from 'react';
import './List.css';

function List(props){
    return(
        <div className="list">
            <span className="list-name">{props.name} </span>
        </div>
    )
}
export default List;