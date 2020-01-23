import React from 'react';
import './Card.css';


function Card(props){
    return(
        <div className="card" >
        <span className="card-title">{props.title} </span>
        </div>
    )
}
export default Card;