import React from 'react';
import './mainPage.css';

export class MainPage extends React.Component {
    
    render() {
        return(
            <div>
                <p>{this.props.usn}</p>
            </div>
        )
    }
}