import React from 'react';

export default function Output({
    count
}) {
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