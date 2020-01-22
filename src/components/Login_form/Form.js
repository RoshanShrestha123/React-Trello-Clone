import React, {Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './Form.css';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            token:'',
            isTokenLoaded: false,
            error:false
        }
    }
    handleChange= (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
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
            .then(response => {
                if(!response.ok) throw response;
                return response.json()})
            .then(data => {
                this.setState({
                token:data,
                isTokenLoaded:true,
                error:false
            })
        }).catch(()=>{
            console.log("eror");
            this.setState({
                error:true
            })
        });
    }
    handleClick = () => {
        console.log("handle click");
    }
    render(){
        if(this.state.isTokenLoaded){
            localStorage.setItem('token',this.state.token.token);

            this.props.history.push('/dashboard');
        }  
        return(
            <form onSubmit={this.handleSubmit} className="form">
                 {this.state.error? <div>Error</div> : ''}
                <div className="title">Log In to Trello</div>

                <Input placeHolder="Enter email" name="email" change={this.handleChange}  type="text" /> <br/>
                <Input placeHolder="Enter password" name="password"change={this.handleChange}  type="password"/><br/>
                <Button name="Log In" click={this.handleClick} />
                <div className="border"></div>
                
            </form>
            
        )
    }
}
export default Form;