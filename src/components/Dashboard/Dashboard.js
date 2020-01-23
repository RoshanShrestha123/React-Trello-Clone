import React from 'react';
import Nav from '../nav/nav';
import List from '../Menu_List/Menu_List';
import CardHolder from '../Board/Board';
import MenuHolder from '../Menu_List_Holder/Menu_List_Holder';
import './Dashboard.css';

function Dashboard(props){
    const token = localStorage.getItem('token');
    if(token == null){
        //redirect to the login page
        props.history.push('/login');
    }else{
        //contiune to the page
        console.log("you are allowed");
        return(
            <div>
                <Nav/>
                <div className="dashboard-container">
                    <div className="dashboard-left">
                       <MenuHolder/>  
                    </div>
                    <div className="dashboard-right">
                        <CardHolder name="starred-board"/>
                        <CardHolder name="personal-board"/>
                    </div>
                    
                </div>
            </div>
            
    
        )
    }
    
}
function checkToken (props){
  
}
export default Dashboard;