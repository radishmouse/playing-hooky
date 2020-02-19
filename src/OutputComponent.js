import React, { useContext } from 'react';
import CountContext from './CountContext';
import { useHistory } from 'react-router-dom';


export default function Output() {
    const {
        state,
    } = useContext(CountContext);    
    let history = useHistory();
    if (Object.keys(state).length === 0) {
        history.push('/increment');
        return <div></div>
    } else {

        
            return (
                <div>
                    <h1>Your count:</h1>        
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
}