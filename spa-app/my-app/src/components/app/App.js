import React, { Component } from 'react';
import './App.css';
import Track from './../tracks/Track'
import iseltechLogo from './../../media/iseltech-logo.png';

class App extends Component 
{
  render() 
  {
    const tracks = [
        {name: 'track 1', isCheckin: false}, 
        {name: 'track 2', isCheckin: false}, 
        {name: 'track 3', isCheckin: false}, 
        {name: 'track 4', isCheckin: false},
        {name: 'track 4', isCheckin: false},
        {name: 'track 4', isCheckin: false},
        {name: 'track 4', isCheckin: false},
        {name: 'track 4', isCheckin: false}
    ];

    let trackComponents = tracks.map(function(track){
        return (<Track name={track.name} isCheckin={track.isCheckin} />);      
    });

    return (
      <div className="container mainContent">
            <img src={iseltechLogo} alt="iseltech" className="right" />
            <h1>Checkin System</h1>
            <div className="filters">
                <ul className="nav nav-pills">
                    <li role="presentation"><a  href="#">Checkin</a></li>
                    <li role="presentation"><a  href="#">No Checkin</a></li>
                    <li role="presentation"><a  href="#">Reset filter</a></li>
                </ul>
            </div>
            <div className="tracks">
                {trackComponents}
            </div>
      </div>
    );
  }
}

export default App;
