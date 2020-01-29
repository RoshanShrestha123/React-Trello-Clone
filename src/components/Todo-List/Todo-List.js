import React from 'react';
import TodoCard from '../Todo-Card/Todo-Card';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Todo-List.css';

/**
 * 
 */
class Todo_List extends React.Component{
    constructor(){
        super();
        this.state = {
            card:'',
            cardInserted: false,
            cardLoaded:false,
            newCard: ''
        }
    }

    componentDidMount(){
        this.showCard();
        
    }
    showCard = () => {
        const URL = 'http://localhost:4000/api/card/showCard';
        const token = localStorage.getItem('token');
        fetch(URL,{
            method:'GET',
            headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':`Bearer ${token}`}
        })
        .then(response => {
            if(!response.ok) throw response;
            return response.json();
        })
        .then(data => {
            this.setState({
                card:data,
                cardLoaded:true
                
            })
        }).catch(error => console.error(error));
    }

    handleSubmit = (e) => {
        console.log("click click");
        e.preventDefault();
        const URL  = 'http://localhost:4000/api/list/showTodoList';
        fetch(URL,{
            method:'POST',
            headers:{'Content-Type':'application/json','Accept':'application/json'},
            body:{data:this.state.newCard}
        })
        .then(response => {
            if(!response.ok) throw response;
            return response.json();
        })
        .then(data => {
            this.setState({
                cardInserted:true
            });
        }).catch((error)=> console.log(error))

    }
    handleChange= (e) => {
        console.log("handle chnage");
        this.setState = {
            [e.target.name]:e.target.value
        }
    }
    render(){
        let cardArr;
        if(this.state.cardLoaded){
            console.log(this.state.card);
            cardArr = this.state.card.data.map(card=>{
                console.log(card)
                if(card.list_id === this.props.data.id){
                    return(
                        <TodoCard name={card.name}   />
                    )
                }
                
            })
            
        }
        
        return(
            <div className="todo-wrapper">
                <div className="list-title">
                 {this.props.data.title}
                </div>
                {cardArr}
               <Input change={this.handleChange} name="newCard"/><br/>
               <Button click={this.handleSubmit} name="Add" />
                <div className="add-new-todo">

                </div>
            </div>
        )
    }
}
export default Todo_List;