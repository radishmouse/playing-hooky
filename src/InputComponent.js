import React, { useContext } from 'react';
import CountContext from './CountContext';

export default function Increment() {
    const {
        count,
        setCount        
    } = useContext(CountContext);

    return (
        <div>
            <h1>Click the button to increase the count</h1>
            <button onClick={() => {
    
                const dateStamp = '20200219' // hard-coded for this example
                const countForToday = count[dateStamp] || 0;
    
                setCount({
                    ...count,
                    [dateStamp]: countForToday + 1
                })
        }}>+</button>
        </div>
    )    
}