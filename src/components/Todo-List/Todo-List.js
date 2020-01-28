import React from 'react';
import TodoList from '../Todo-Card/Todo-Card';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Todo-List.css';

class Todo_List extends React.Component{
    constructor(){
        super();
        this.state = {
            card:'',
            cardInserted: false
        }
    }

    handleSubmit = (e) => {
        console.log("click click");
        e.preventDefault();
        const URL  = '';
        fetch(URL,{
            method:'POST',
            headers:{'Content-Type':'application/json','Accept':'application/json'},
            body:{data:this.state.card}
        })
        .then(response => {
            if(!response.ok) throw response;
            return response.json();
        })
        .then(data => {
            this.setState({
                cardInserted:true
            });
            console.log(data);
        }).catch((error)=> console.log(error))

    }
    handleChange= (e) => {
        console.log("handle chnage");
        this.setState = {
            [e.target.name]:e.target.value
        }
    }
    render(){
        
        return(
            <div className="todo-wrapper">
                <div className="list-title">
                {this.props.data.title}
                </div>
             
               <Input change={this.handleChange} name="card"/><br></br>
               <Button click={this.handleSubmit} name="Add" />
                <div className="add-new-todo">

                </div>
            </div>
        )
    }
}
export default Todo_List;