import React from 'react';
import TodoList from '../Todo-Card/Todo-Card';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Todo-List.css';

class Todo_List extends React.Component{

    handleSubmit = () => {
        console.log("click click");
    }
    handleChange= () => {
        console.log("handle chnage");
    }
    render(){
        return(
            <div className="todo-wrapper">
                <div className="list-title">
                Header
                </div>
               <TodoList/>
               <TodoList/>
               <TodoList/>
               <TodoList/>
               <Input change={this.handleChange}/><br></br>
               <Button click={this.handleSubmit} name="Add" />
                <div className="add-new-todo">

                </div>
            </div>
        )
    }
}
export default Todo_List;