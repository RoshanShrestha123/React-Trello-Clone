import React from 'react';
import './nav.css';
function Nav(){
    return(
        <div className="navHolder" >
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Boards</li>
                    <li>Search</li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;