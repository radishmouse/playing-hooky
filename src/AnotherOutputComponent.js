import React, { useContext } from 'react';
import CountContext from './CountContext';

export default function Output() {
    const {
        state,
    } = useContext(CountContext);    

    return (
        <div>
            <h1>Another view of your count:</h1>        
            <ul>
            {
                Object.keys(state).map(dateStamp => {
                return <li>{dateStamp}: {state[dateStamp]}</li>    
                })
            }
            </ul>
        </div>
    )
}