import React from 'react';
import Card from '../Card/Card';
import './Board.css';

class Board extends React.Component{
    render(){
        return(
            <div className="card-holder">
                <h3 className="board-title">Starred Project</h3>
                <Card title="Dookan Project"/>
                <Card title="React-TODO-Project"/>
                <Card title="Unity game development"/>
                <Card title="Flappy bird"/>
                
               
            </div>
        )
    }
}
export default Board;