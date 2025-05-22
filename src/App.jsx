// App.jsx

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Your existing Home component
import Quiz from './Quiz'; // Your existing Quiz component
import Login from './Login'; // Your existing Login component
import Signup from './Signup'; // Your new Signup component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
