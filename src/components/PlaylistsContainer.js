import React, {Component} from 'react';
import CustomPlaylist from "./CustomPlaylist";

let playlistInfo = [
    {
        title: "Green Goo's",
        songInfo: [
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
        ]
    },
    {
        title: "Collin Y's",
        songInfo: [
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
        ]
    },
    {
        title: "Marina V's",
        songInfo: [
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
        ]
    },
    {
        title: "Elaine D's",
        songInfo: [
            {
                src: "https://pbs.twimg.com/profile_images/738652880387878912/kEeI_JQZ_bigger.jpg",
                title: "The Past Starts Slow and Ends",
                artist: "System of a Revenge",
                timing: "2:22"
            },
            {
                src: "https://pbs.twimg.com/profile_images/738652880387878912/kEeI_JQZ_bigger.jpg",
                title: "The Past Starts Slow and Ends",
                artist: "System of a Revenge",
                timing: "2:22"
            },
            {
                src: "https://pbs.twimg.com/profile_images/738652880387878912/kEeI_JQZ_bigger.jpg",
                title: "The Past Starts Slow and Ends",
                artist: "System of a Revenge",
                timing: "2:22"
            },
            {
                src: "https://pbs.twimg.com/profile_images/738652880387878912/kEeI_JQZ_bigger.jpg",
                title: "The Past Starts Slow and Ends",
                artist: "System of a Revenge",
                timing: "2:22"
            },
            {
                src: "https://pbs.twimg.com/profile_images/738652880387878912/kEeI_JQZ_bigger.jpg",
                title: "The Past Starts Slow and Ends",
                artist: "System of a Revenge",
                timing: "2:22"
            },
            {
                src: "https://pbs.twimg.com/profile_images/738652880387878912/kEeI_JQZ_bigger.jpg",
                title: "The Past Starts Slow and Ends",
                artist: "System of a Revenge",
                timing: "2:22"
            },
        ]
    },


];

class PlaylistsContainer extends Component{
    render() {
        return(
            <div className="row" style={{marginBottom: "50px"}}>
                {playlistInfo.map(function(playlist, index){
                    return <CustomPlaylist key={index} title={playlist.title} songInfo={playlist.songInfo}/>;
                })}
            </div>
        )
    }
}

export default PlaylistsContainer;