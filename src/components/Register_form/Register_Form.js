import React, {Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './Register_Form.css';

class Register_Form extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            name: '',
            password: '',
            dataRegistered: false
            
        }
    }
    handleChange= (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit = (e) =>{
       
    }
    handleClick = () => {
        console.log("handle click");
    }
    render(){
       
        return(
            <form onSubmit={this.handleSubmit} className="form">
                <div className="title">Sign up to Trello</div>
                <Input placeHolder="Enter email" name="email"  type="text" change={this.handleChange} /> <br/>
                <Input placeHolder="Enter full name" name="name" type="text" change={this.handleChange}/><br/>
                <Input placeHolder="Create password" name="password" type="password" change={this.handleChange}/><br/>
                <span className="terms">By signing up, you confirm that you've read and accepted our <span className="link">Terms of Service </span> and <span className="link"> Privacy Policy</span>.</span>
                <Button name="Sign Up" click={this.handleClick} />
                <div className="border"></div>
                
            </form>
            
        )
    }
}
export default Register_Form;