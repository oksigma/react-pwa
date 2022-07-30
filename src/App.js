import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatCard from './StatCard';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function App() {
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      <h2>Welcome to Site Gate</h2>
      {/* <input accept = "image/*" id="icon-button-file" capture="environment" /> */}
      <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        
      />
      <StatCard desc="Complete" stat="75%" ></StatCard>
      <StatCard desc="To Go" stat="25%" ></StatCard>
      <StatCard desc="Richmond" stat="88" ></StatCard>

    </div>
  );
}

export default App;
