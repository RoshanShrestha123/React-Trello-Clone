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
    componentDidMount(){
        fetch('http://localhost:4000/api/user/getAllUser')
            .then(response => response.json())
            .then(data => this.setState({
                data:data,
                dataLoaded:true
            }));
           
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