import React,{Component} from 'react';
import Form from './Form';

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
           <Form/>
        )
    }
}
export default Main;