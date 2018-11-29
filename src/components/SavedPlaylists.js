import React, {Component} from 'react';

class SavedPlaylists extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="saved-playlists">
                        <div className="saved-playlists-title">Your saved playlists</div>
                        <div className="audiojs" id="audiojs_wrapper0">
                            <audio src="../1trask.mp3" />
                        </div>
                        <div>
                            <a href="#" className="btn btn-light btn-lg open-spotify-button">Open the music player</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SavedPlaylists;