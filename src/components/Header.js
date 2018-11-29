import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="main-header">
                <div className="left-menu menu-sidebar" />
                <div className="right-menu menu-sidebar" />
                <div className="orange-square" />
                <div className="min-header">
                    <div className="header-item header-title">MUSIC & PLAYLIST</div>
                    <div className="header-item header-input-wrapper">
                        <input type="text" className="header-input" placeholder="Search here people or pages" />
                    </div>
                </div>
                <div className="max-header">
                    <div className="max-header-content clearfix">
                        <div className="max-header-title">
                            Listen and Share Music!
                        </div>
                        <div>
                            Here you’ll be able to manage your Spotify playlist widget and listen all the saved
                            playlists from your friends!
                            Friends playlists will update when they update their Olympus playlists, that way you can
                            build awesome playlists
                            to share with your friends every day and they will always be updated.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;