import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './Model_Box.css';

class Model_Box extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            data: '',
            dataInserted:false
        }
    }

    handleChange= (e)=> {
       this.setState({
          [e.target.name]:e.target.value 
       })
    }
    handleClick = () => {

    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("board added");
        const URL='http://localhost:4000/api/boards/addBoard';
        const token = localStorage.getItem('token');
        console.log(token);
        fetch(URL,{
            method:'POST',
            headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':token},
            body:JSON.stringify({name:this.state.name,userId:10,starred:0})
        })
        .then(response => {
            if(!response.ok) throw response;
            return response.json();
        })
        .then(data => {
            this.setState({
                data:data,
                dataInserted:true
            })
        })
    }
    render(){
        if(this.state.dataInserted){
            console.log("data inserted sucessfully");
        }
        return(
            <div className="addBoardForm" onSubmit={this.handleSubmit} >
                <form method='POST'>
                    <Input placeHolder="Add Board Title" name="name" change={this.handleChange}/>
                    <Button name="Create Board" click={this.handleClick}/>
                </form>
            </div>
        )
    }
}
export default Model_Box;