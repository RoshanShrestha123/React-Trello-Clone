import React from 'react';
import Nav from '../nav/nav';
import Todo_list from '../Todo-List/Todo-List';
import './Todo_Page.css';


class Todo_Page extends React.Component{
    constructor(){
        super();
        this.state = {
            list:'',
            listLoaded:false
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        const boardId = this.props.match.params.id;
        const token = localStorage.getItem('token');
        fetch('http://localhost:4000/api/list/todo-list/'+boardId,{
            method:'POST',
            headers:{'Content-Type':'application/json','Accept':'application/json','Authorization': `Bearer ${token}`},
         
        })
        .then(response => {
            if(!response.ok) throw response;
            return response.json();
        })
        .then(data => this.setState({
            list:data,
            listLoaded:true
        })).catch((error => console.log(error)));
    }

    render(){
        let listArr = '';
        if(this.state.listLoaded){
            listArr = this.state.list.data.map((list)=>{
                console.log(list);
                return(
                    <Todo_list data={list} key={list.id}/>
                )
            })
        }
        return(
                <div>
                    <Nav/>
                    <div className="todo-page">  
                      {listArr}
                      
                </div>
            </div>
        )
    }
}
export default Todo_Page;