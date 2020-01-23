import React, {Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import '../Login_form/Form.css';

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
       e.preventDefault();
       const userData = {email:this.state.email, name:this.state.name , password:this.state.password};
       fetch('http://localhost:4000/api/auth/register',{
           method:'POST',
           headers:{'Content-Type':'application/json','Accept':'application/json'},
           body:JSON.stringify({data:userData})
       })
       .then(response => {
           if(!response.ok) throw response;
           return response.json()
       })
       .then(data =>{
           this.setState({
               dataRegistered:true
           })
       }).catch((error)=>{
           console.log(error)
       })
    }
    handleClick = () => {
        console.log("handle click");
    }
    render(){
       
       if(this.state.dataRegistered){
        this.props.history.push('/login');    
       }
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