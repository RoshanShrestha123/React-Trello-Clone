import React from 'react';
import Nav from '../nav/nav';
import Board from '../Board/Board';
import MenuHolder from '../Menu_List_Holder/Menu_List_Holder';
import Model_Box from '../Model_Box/Model_Box';

import './Dashboard.css';

/**
 * Class Dashboard is the main page which contain all the collection 
 * of the Boards that the user created. 
 * user can-> create new board, delete board, update board, logout
 */
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
    
    fetchData = () => {
        console.log("fetching data")
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
                dataLoaded:true,
            });

        })
        .catch((err)=>console.log(err))
    }

    componentDidMount(){
        this.fetchData();
    }

    updateState = () => {
         this.fetchData();
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
              
            }
            return(
                <div>
                    <Nav/>
                    <div className="dashboard-container">
                        <div className="dashboard-left">
                            <MenuHolder />  
                        </div>
                        <Model_Box {...this.props} onSubmit={this.updateState}/>
                        <div className="dashboard-right">
                            
                           { this.state.dataLoaded? <Board  title="Starred Board" data={arr} {...this.props}/>:''}
                           { this.state.dataLoaded? <Board  title="Personal Board" data={this.state.boards.data} {...this.props} />:''}
                          
                        </div>
                    </div>
                </div>
                
        
            )
        }
    }
}


export default Dashboard;