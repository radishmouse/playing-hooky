import React, { useContext } from 'react';
import CountContext from './CountContext';

export default function Output() {
    const {
        count,
    } = useContext(CountContext);    

    return (
        <div>
            <h1>Another view of your count:</h1>        
            <ul>
            {
                Object.keys(count).map(dateStamp => {
                return <li>{dateStamp}: {count[dateStamp]}</li>    
                })
            }
            </ul>
        </div>
    )
}