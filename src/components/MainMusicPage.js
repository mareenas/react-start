import React, {Component} from 'react';
import CustomPlaylist from './CustomPlaylist.js';
import PlaylistSettings from './PlaylistSettings.js';
import SavedPlaylists from './SavedPlaylists.js';
import PlaylistsContainer from "./PlaylistsContainer";

let mySongs = [
    {
        src: "https://pbs.twimg.com/profile_images/703603457480105985/4duA92s4_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:40"
    },
    {
        src: "https://pbs.twimg.com/profile_images/703603457480105985/4duA92s4_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:40"
    },
    {
        src: "https://pbs.twimg.com/profile_images/703603457480105985/4duA92s4_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:40"
    },
    {
        src: "https://pbs.twimg.com/profile_images/703603457480105985/4duA92s4_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:40"
    },
    {
        src: "https://pbs.twimg.com/profile_images/703603457480105985/4duA92s4_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:40"
    },
];

class MainMusicPage extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/*my playlist*/}
                    <CustomPlaylist title="My spotify" songInfo={mySongs}/>
                    {/*playlist settings*/}
                    <PlaylistSettings />
                </div>
                {/*saved playlists*/}
                <SavedPlaylists />
                {/*friend's playlists*/}
                <PlaylistsContainer />
            </div>
        )
    }
}

export default MainMusicPage;