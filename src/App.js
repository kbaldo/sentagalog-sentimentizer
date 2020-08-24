import React from 'react';
import './App.css';
import NavigationBar from './components/shared/NavigationBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;
