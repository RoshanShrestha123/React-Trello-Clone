import React from 'react';
import Card from '../Card/Card';
import './Board.css';

function handleClick(id,history){

    //id
    history.push('/todo-page/'+id);
}
function Board(props){
    const arr = props.data;
    let boardsData =arr.map((board)=>{
        return(
            <Card key={board.id} title={board.name} click={handleClick} id={board.id} history={props.history}/>
        )
    })
    return(
        <div className="card-holder">
            <div className="board-title">{props.title} </div>
            {boardsData}
        </div>
    )
}

export default Board;