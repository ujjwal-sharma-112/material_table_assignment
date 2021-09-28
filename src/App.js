import React from "react";
import RemoteData from './Components/RemoteData';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Nemesis Consultants LLP</h1>
      <h3 style={{marginBottom: 60}}>JsonPlaceHolder Data Fetching</h3>
      <RemoteData />
    </div>
  );
};

export default App;
