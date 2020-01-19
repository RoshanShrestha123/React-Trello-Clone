import React from 'react';
import Input from './Input';
import Button from './Button';

function form(){
    return(
        <div className="form">
            <h1>Form</h1>
            <Input name="Email"/> <br/>
            <Input name="password"/><br/>
            <Button name="Login"/>
        </div>
        
    )
}
export default form;