import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import InputComponent from './InputComponent';
import AnotherInputComponent from './AnotherInputComponent';
import AnotherOutputComponent from './AnotherOutputComponent';
import OutputComponent from './OutputComponent';

export default function App() {
    const [count, setCount] = useState({});
    useEffect(() => {
      // Here is where we might load from an API
      // or localStorage
      // or both!
      let savedData = {};
      setCount(savedData);
    
    }, []); // simulating "ComponentDidMount"

    return (
      <Router>      
        <ul>
          <li><Link to="/increment">Add to Count</Link></li>
          <li><Link to="/increment2">Subtract from Count</Link></li>
          <li><Link to="/output">Show Count</Link></li>
          <li><Link to="/output2">Show Count, but differently</Link></li>
        </ul>
        <Switch>
          <Route path="/increment">
            <InputComponent 
              count={count}
              setCount={setCount}
            />
          </Route>
          <Route path="/increment2">
            <AnotherInputComponent 
              count={count}
              setCount={setCount}
            />
          </Route>
          <Route path="/output">
            <OutputComponent 
              count={count}
            />
          </Route>
          <Route path="/output2">
            <AnotherOutputComponent 
              count={count}
            />
          </Route>
        </Switch>
      </Router>
      
    );
}
