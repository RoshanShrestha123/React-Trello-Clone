import React from 'react';
import Card from '../Card/Card';
import './Board.css';

//props.data-> array
function Board(props){
    
    const arr = props.data;
    let boardsData =arr.map((board)=>{
        return(
            <Card key={board.id} title={board.name}/>
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