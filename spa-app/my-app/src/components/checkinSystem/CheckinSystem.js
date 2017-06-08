import React, { Component } from 'react';
import './CheckinSystem.css';
import User from './../users/User'
import iseltechLogo from './../../media/iseltech-logo.png';

class CheckinSystem extends Component 
{
    constructor(){
        super();
        this.state = {
            users: [
                {name: 'user 1', isCheckin: false, imageUrl: './../../media/avatars/avatar1.jpg'}, 
                {name: 'user 2', isCheckin: false, imageUrl: './../../media/avatars/default-avatar.png'}, 
                {name: 'user 3', isCheckin: false, imageUrl: './../../media/avatars/default-avatar.png'}
            ]
        };
    }

    checkin(userIndex)
    {
        this.state.users[userIndex].isCheckin = true;
        this.forceUpdate();
    }

    render() 
    {
        const usersComp = this.state.users.map( (user, index) => {
            return (
                <User name={user.name} 
                    imageUrl={user.imageUrl} 
                    isCheckin={user.isCheckin} 
                    onClick={ () => this.checkin(index) } />);      
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
                    <div className="users">
                        { usersComp }
                    </div>
            </div>
        );
    }
}

export default CheckinSystem;
