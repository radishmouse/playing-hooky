import React, { useContext } from 'react';
import CountContext from './CountContext';
import { actionDecrement } from './actions';

export default function Increment() {
    const {
        dispatch
    } = useContext(CountContext);

    return (
        <div>
            <h1>A different input component that sets the count</h1>
            <button onClick={() => {
                dispatch(actionDecrement())
            }}>-</button>
        </div>
    )    
}