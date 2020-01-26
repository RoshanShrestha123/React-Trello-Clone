import React from 'react';
import Nav from '../nav/nav';
import Board from '../Board/Board';
import MenuHolder from '../Menu_List_Holder/Menu_List_Holder';

import './Dashboard.css';

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state={
            boards:'',
            dataLoaded:false,
            modelVisible:false,
            starredProjects:'',
            starredLoaded:false
        };
        
    }
    componentDidMount(){
        const token = localStorage.getItem('token');
        fetch('http://localhost:4000/api/boards/showBoards',{
            method:'GET',
            headers:{'Content-Type':'application/json','Accept':'application/json','Authorization': `Bearer ${token}`}
        })
        .then(response => {
            if(!response.ok) throw response;
            return response.json();
        })
        .then(data => {
          
            this.setState({
                boards:data,
                dataLoaded:true
            });

        })
        .catch((err)=>console.log(err))
    }
    

    render(){
        const token = localStorage.getItem('token');
        let arr= '';
        if(token == null){
            this.props.history.push('/login');
           
        }else{
            if (this.state.dataLoaded){
                 arr = this.state.boards.data.filter((starredProject)=>{
                   return starredProject.starred == 1;
                });
                console.log(arr)
            }
            return(
                <div>
                    <Nav/>
                    <div className="dashboard-container">
                        <div className="dashboard-left">
                            <MenuHolder/>  
                        </div>
                        <div className="dashboard-right">
                        { this.state.dataLoaded? <Board  title="Starred Board" data={arr} />:''}
                           { this.state.dataLoaded? <Board  title="Personal Board" data={this.state.boards.data} />:''}
                          
                        </div>
                    </div>
                </div>
                
        
            )
        }
    }
}


export default Dashboard;