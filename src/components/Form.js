import React, {Component } from 'react';
import Input from './Input';
import Button from './Button';
import {Link,useHistory} from 'react-router-dom';


class Form extends Component{
    constructor(){
        super();
        this.state = {
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
    handleSubmit = () =>{
        console.log("button is working..");
        fetch('http://localhost:4000/api/auth/login')
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
            <div className="form">
                <h1>Form</h1>
                <Input name="email" change={this.handleChange} /> <br/>
                <Input name="password"change={this.handleChange} /><br/>
                <Link to="/dashboard">
                    <Button name="go to dashboard" click={this.handleClick}></Button>
                </Link>
                <Button name="Login" click={this.handleSubmit} />
                
            </div>
            
        )
    }
}
export default Form;