import React from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';
import NavigationBar from './components/shared/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Typography variant="h3" color="initial">Sentagalog Sentimentizer</Typography>
    </div>
  );
}

export default App;
