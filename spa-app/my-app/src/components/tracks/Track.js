import React, { Component } from 'react';
import './Track.css';
import defaultImage from './../../media/default-avatar.png';


class Track extends Component 
{
    
    constructor(){
        super();
        this.state = { isCheckin: false, style: "track col-md-4 col-sm-12 col-xs-12" };
    }

    checkin(ev){
        var stateData = {};
        stateData.isCheckin = !this.state.isCheckin;
        stateData.style = stateData.isCheckin ? "track col-md-4 col-sm-12 col-xs-12 checkin" : "track col-md-4 col-sm-12 col-xs-12";

        this.setState(stateData);
    }

    render()
    {
        return (
            <div className={this.state.style} >
                <img className="photo" src={defaultImage} alt=""/>
                <div className="content">
                    <div className="name">{this.props.name}</div>
                    <div className="actions">
                        <a href="#" onClick={ this.checkin.bind(this) }>CheckIn</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Track;