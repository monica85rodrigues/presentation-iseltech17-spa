import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import defaultImage from './images/default-avatar.png';

const name = "Monica Rodrigues";

class App extends Component {
  render() {
    return (
      <div className="container mainContent">
        <h1>Tracks</h1>
        <div className="filters">
            <ul className="nav nav-pills">
                <li role="presentation"><a  href="#">Going Lunch</a></li>
                <li role="presentation"><a  href="#">Not Going Lunch</a></li>
                <li role="presentation"><a  href="#">Checkin</a></li>
                <li role="presentation"><a  href="#">No Checkin</a></li>
                <li role="presentation"><a  href="#">Reset filters</a></li>
                <li role="presentation"><a href="#">Reset all</a></li>
            </ul>
        </div>
        <div className="tracks">
            <div className="track col-md-4 col-sm-12 col-xs-12">
                <img className="photo" src={defaultImage} alt=""/>
                <img className="lunch" src="/images/lunch3.png" alt=""/>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="actions">
                        <a href="#">CheckIn</a>
                        <a href="#">Lunch</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
