import React, {Component } from 'react';
import Input from './Input';
import Button from './Button';
import {Link} from 'react-router-dom';
import './Form.css';


class Form extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            token:'',
            isTokenLoaded: false
        }
    }
    handleChange= (e) =>{
        console.log(e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        });
        console.log(this.state);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const data = {email: this.state.email, password: this.state.password};
        console.log("button is working..");
        fetch('http://localhost:4000/api/auth/login',{
            method:'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body:JSON.stringify({ data: data })
        })
            .then(response => response.json())
            .then(data => this.setState({
                token:data,
                isTokenLoaded:true
            }))
    }
    handleClick = () => {
        console.log("handle click");
    }
    render(){
        if(this.state.isTokenLoaded){
            
            console.log("login sucessfull, token is:",this.state.token.token);
            localStorage.setItem('token',this.state.token.token);
            

            // now load the dashboard
        }
        return(
            <form onSubmit={this.handleSubmit} className="form">
                <h1>Login</h1>
                <Input name="email" change={this.handleChange} /> <br/>
                <Input name="password"change={this.handleChange} /><br/>
                <Button name="Login" />
                
            </form>
            
        )
    }
}
export default Form;