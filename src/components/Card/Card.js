import React from 'react';
import './Card.css';


function Card(props){
    return(
        <div className="card" onClick={(e)=>{props.click(e)}} >
        <span className="card-title"> {props.title}</span>
        </div>
    )
}
export default Card;