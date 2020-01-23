import React from 'react';
import Header from '../Header/Header';
import './Register.css';
import Register_Form from '../Register_form/Register_Form';
import {Link} from 'react-router-dom';
 

function Register(props){
    return(
       <div className="register-page">
           <Header/>
           <Register_Form {...props}/>
           <Link to="/login" className="signUp" >Already have an account? Log In</Link>
       </div>
    )
}
export default Register;