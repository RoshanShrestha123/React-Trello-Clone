import React from 'react';
import './Card.css';


function Card(props){

    const id = props.id;
    const history = props.history;
    return(
        <div className="card" onClick={()=>{props.click(id,history)}} >
             <span className="card-title"> {props.title} {id} </span>
        </div>
    )
}
export default Card;