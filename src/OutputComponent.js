import React, { useContext } from 'react';
import CountContext from './CountContext';
import { useHistory } from 'react-router-dom';


export default function Output() {
    const {
        count,
    } = useContext(CountContext);    
    let history = useHistory();
    if (Object.keys(count).length === 0) {
        history.push('/increment');
        return <div></div>
    } else {

        
            return (
                <div>
                    <h1>Your count:</h1>        
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
}