import React, {Component} from 'react';
import MainDescription from './components/MainDescription.js';
import RightBlock from './components/RightBlock.js';
import './MyApp.css';
import './css/LoginPage.css';

class MyApp extends Component {

    render() {
        return (
            <div className="MyApp">
                <div style={{height: '150px'}}/>
                    <div className="container">
                        <div className="row" style={{display: 'flex', alignItems: 'center'}}>
                            <MainDescription />
                            <RightBlock />
                        </div>
                    </div>
            </div>
        );
    }

}

export default MyApp;
