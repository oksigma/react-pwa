import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatCard from './StatCard';
import CheckInCard from './components/CheckInCard';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const people = [
  {
    name : "Tim Maher",
    checkIn : false 
  },
  {
    name : "Patrick Smith",
    checkIn : false
  },
  {
    name : "Erin Smith",
    checkIn : false
  },
  {
    name : "Diana Windsor",
    checkIn : false
  }
]

function App() {
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (
    <div className="App">
      <header className="App-header">
      <h2>Welcome to Site Gate</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      
      {/* <input accept = "image/*" id="icon-button-file" capture="environment" /> */}
      {/* <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        
      /> */}
      <div className = "m-5">
        {people.map((person) => {
         return (  <CheckInCard person={person}></CheckInCard>  )        
        })
      }

      </div>

    </div>
  );
}

export default App;
