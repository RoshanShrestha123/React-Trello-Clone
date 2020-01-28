import React from 'react';
import List from '../Menu_List/Menu_List';
import './Menu_List_Holder.css';

class Menu_List_Holder extends React.Component{
    render(){
        return(
            <div className="menu-holder">
                <List name="Boards" />
                <List name="Home" />
                <List name="Templates" />
             
              
            </div>
            
        )
    }
}
export default Menu_List_Holder;