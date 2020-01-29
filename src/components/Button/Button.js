import React from 'react';
import './Button.css';

/**
 * 
 * @param {name,click()} props 
 */

function Button(props){
    return(
        <button className="button" onClick={()=>{props.click()} }> {props.name} </button>
    )
}
export default Button;