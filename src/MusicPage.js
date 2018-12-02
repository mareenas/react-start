import React, {Component} from 'react';
import Header from './components/Header.js';
import MainMusicPage from "./components/MainMusicPage.js";
import './MyApp.css';
import './css/MusicPage.css';
import './audio.min.js';

class MusicPage extends Component {

    render() {
        return (
            <div className="wrapper">
                <Header />
                <MainMusicPage />
            </div>

        );
    }

}

export default MusicPage;
