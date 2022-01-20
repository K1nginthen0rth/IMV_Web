import React from 'react';
import { Component } from 'react';
import {Route as ReactDOMRoute } from 'react-router-dom';

const Route = ({
    isPrivate= false,
 component : Component,
    ...rest
    }   )=>    {
/* comentarios */ */
    
const user = true 
if (!(isPrivate === !! user) ){
  //  history.push(isPrivate ? '/login':'/home' )

}

        return(
            <ReactDOMRoute {...rest}
            render={(props)=>{
         return (
             <Component {...props}/>
         )
    }}
    />
        )
    }
export default Route;