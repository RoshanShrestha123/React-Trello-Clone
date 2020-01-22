import React,{Component} from 'react';
import Form from '../Login_form/Form';
import './Main.css';
import Header from '../Header/Header';

import {Link} from 'react-router-dom';

class Main extends Component{
    constructor(){
        super();
        
    }

    render(){
        
        
        return(
            <div className="loginPage">
                <Header/>
                <Form {...this.props}/>
                <Link to="/register" className="signUp" >Sign up for account</Link>
            </div>
            
        )
    }
}
export default Main;