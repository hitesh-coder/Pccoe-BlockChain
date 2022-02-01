import React from 'react';
import Navbar from './features/component/Navbar/Navbar';
import logo from './logo.svg';
// import Counter from './features/counter/Counter';
// import './App.css';
import RouteView from './RouteView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <Navbar />
        <RouteView />
      </header>
    </div>
  );
}

export default App;
