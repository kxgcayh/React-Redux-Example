import React from 'react';
import './App.css';
import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';

const App = (props) => {
  return (
    <div className="App">
      <h2>React Redux Example</h2>
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
};

export default App;
