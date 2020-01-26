import React from 'react';
import Nav from '../nav/nav';
import Todo_list from '../Todo-List/Todo-List';
import './Todo_Page.css';


class Todo_Page extends React.Component{
    render(){
        return(
                <div>
                    <Nav/>
                    <div className="todo-page">  
                        <Todo_list/>
                      
                </div>
            </div>
        )
    }
}
export default Todo_Page;