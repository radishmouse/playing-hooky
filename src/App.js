import React, { useReducer, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import CountContext from './CountContext';
import { count, initialState } from './reducers';   

import InputComponent from './InputComponent';
import AnotherInputComponent from './AnotherInputComponent';
import AnotherOutputComponent from './AnotherOutputComponent';
import OutputComponent from './OutputComponent';

export default function App() {
    // const [count, setCount] = useState({});
    const [state, dispatch] = useReducer(count, initialState);
    useEffect(() => {
      // Here is where we might load from an API
      // or localStorage
      // or both!
      // let savedData = {};
      // setCount(savedData);
    }, []); // simulating "ComponentDidMount"

    return (
      <CountContext.Provider
        value={{
          state, 
          dispatch
        }}
      >
        <Router>      
        <ul>
          <li><Link to="/increment">Add to Count</Link></li>
          <li><Link to="/increment2">Subtract from Count</Link></li>
          <li><Link to="/output">Show Count</Link></li>
          <li><Link to="/output2">Show Count, but differently</Link></li>
        </ul>
        <Switch>
          <Route path="/increment">
            <InputComponent />
          </Route>
          <Route path="/increment2">
            <AnotherInputComponent />
          </Route>
          <Route path="/output">
            <OutputComponent />
          </Route>
          <Route path="/output2">
            <AnotherOutputComponent />
          </Route>
        </Switch>
      </Router>
      </CountContext.Provider> 
    );
}
