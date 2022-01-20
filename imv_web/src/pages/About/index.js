import React from 'react';
import {useLocation,useHistory} from 'react-router-dom';
function About(){
    let history= useHistory();
    const handleClick = () =>{
       history.push('/')
    }
    return(
        <div>
            <h1>about </h1>
            <button type="button" onClick={handleClick} >ir para o chat </button> 

        </div>

    );
}
export default About;