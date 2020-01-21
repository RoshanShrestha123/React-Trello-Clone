import React from 'react';
import './Input.css';

function Input(props){
    return(
      
        <input className="input"  type="text" name={props.name} placeholder={props.placeHolder} onChange={(e)=>props.change(e)} ></input>
    )
}

export default Input;