import React,{Component} from 'react';
import Form from './Form';
import './Main.css';
import LogoImage from '../images/logo.png';

class Main extends Component{
    constructor(){
        super();
        this.state = {
            data: '',
            dataLoaded: false
        }   
    }

    render(){
        if(this.state.dataLoaded){
            return(
                <h1> {this.state.data.meg} </h1>
            )       
        }
        
        return(
            <div className="loginPage">
                <div className="logoHolder">
                     <img className="logo" src={LogoImage}></img>
                </div>
                <Form {...this.props}/>
            </div>
            
        )
    }
}
export default Main;