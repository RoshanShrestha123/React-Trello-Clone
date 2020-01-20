import React from 'react';

function Input(props){
    return(
      
        <input type="text" name={props.name} placeholder={props.name} onChange = {(e)=>props.change(e)} ></input>
    )
}

export default Input;