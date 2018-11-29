import React, {Component} from 'react';
import SongRow from './SongRow.js';

class CustomPlaylist extends Component{
    render() {
        return(
            <div className="col col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="my-playlist">
                    <div className="title-block">{this.props.title} playlist</div>
                    {this.props.songInfo.map(function (song, index) {
                        return <SongRow picture={song.src} song={song.title} artist={song.artist} timing={song.timing} key={index} number={index} />
                    })}
                </div>
            </div>
        )
    }
}

export default CustomPlaylist;