import React, { Component } from 'react';
import './User.css';
import defaultImage from './../../media/avatars/avatar1.jpg';


class User extends Component 
{
    render()
    {
        const checkinStyle = this.props.isCheckin ? 
                            "checkin user col-md-4 col-sm-12 col-xs-12" : 
                            "user col-md-4 col-sm-12 col-xs-12"; //TODO - precisa melhorar

        return (
            <div className={ checkinStyle } >
                {/*<img className="photo" src={ this.props.imageUrl } alt={ this.props.name } />*/}
                <img className="photo" src={ defaultImage } alt={ this.props.name } />
                <div className="content">
                    <div className="name">{this.props.name}</div>
                    <div className="actions">
                        <a href="#" onClick={ (index) => this.props.onClick(index) }>CheckIn</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;