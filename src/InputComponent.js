import React, { useContext } from 'react';
import CountContext from './CountContext';
import { actionIncrement } from './actions';

export default function Increment() {
    const {
        dispatch
    } = useContext(CountContext);

    return (
        <div>
            <h1>Click the button to increase the count</h1>
            <button onClick={() => {
                dispatch(actionIncrement())                
            }}>+</button>
        </div>
    )    
}