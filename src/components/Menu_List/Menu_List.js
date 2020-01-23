import React from 'react';
import './Menu_List.css';

function List(props){
    return(
        <div className="list">
            <span className="list-name">{props.name} </span>
        </div>
    )
}
export default List;