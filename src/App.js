import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatCard from './StatCard';
import CheckInCard from './components/CheckInCard';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import UsersCheckinScreen from './screens/UsersCheckInScreen';
import { QrReader } from 'react-qr-reader';

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
  }
  // {
  //   name : "Diana Windsor",
  //   checkIn : false
  // },
  // {
  //   name : "Diana Windsor",
  //   checkIn : false
  // },
  // {
  //   name : "Diana Windsor",
  //   checkIn : false
  // }
]

function App() {
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (
    <div className="App">
      <header className="App-header">
      <h2>Site Gate QR</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      
      {/* <input accept = "image/*" id="icon-button-file" capture="environment" /> */}
      <div className = "m-5"> 
      <QrReader
        onResult={(result, error) => {
         if (!!result) {
           console.log('QR Code found')
           console.log(result?.text)
         }

         if (!!error) {
           //console.log('error');
         }
        }}
        style={{ width: '80%' }}
      />
      </div>

      {/* <div className = "m-5"> 
      <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
      />
      </div> */}
      <div className = "m-5">
        <UsersCheckinScreen people={people}></UsersCheckinScreen>   
      </div>

    </div>
  );
}

export default App;
