import React, {Component} from 'react';
import CustomPlaylist from "./CustomPlaylist";

let playlistTitles = ["Green Goo's", "Collin Y's", "Marina V's", "Elaine D's"];

let songInfo = [
    {
        src: "https://pbs.twimg.com/profile_images/980736422176022528/BCamJJE1_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:22"
    },
    {
        src: "https://pbs.twimg.com/profile_images/980736422176022528/BCamJJE1_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:22"
    },
    {
        src: "https://pbs.twimg.com/profile_images/980736422176022528/BCamJJE1_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:22"
    },
    {
        src: "https://pbs.twimg.com/profile_images/980736422176022528/BCamJJE1_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:22"
    },
    {
        src: "https://pbs.twimg.com/profile_images/980736422176022528/BCamJJE1_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:22"
    },
    {
        src: "https://pbs.twimg.com/profile_images/980736422176022528/BCamJJE1_bigger.jpg",
        title: "The Past Starts Slow and Ends",
        artist: "System of a Revenge",
        timing: "3:22"
    },
];

class PlaylistsContainer extends Component{
    render() {
        return(
            <div className="row" style={{marginBottom: "50px"}}>
                {playlistTitles.map(function(title, index){
                    return <CustomPlaylist key={index} title={title} songInfo={songInfo}/>;
                })}
            </div>
        )
    }
}

export default PlaylistsContainer;