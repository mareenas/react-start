import React, {Component} from 'react';

class PlaylistSettings extends Component {
    render() {
        return(
            <div className="col-lg-9 ">
                <div className="widget-settings">
                    <div className="title-block">Your Playlist Widget Settings</div>
                    <div className="form-container">
                        <form>
                            <fieldset className="form-group label-floating is-select">
                                <label className="control-label small-text">Songs Showed Before the Jump</label>
                                <select className="selectpicker form-control">
                                    <option value="AL">Show 5 Songs</option>
                                    <option value="AV">Show 7 Songs</option>
                                    <option value="AC">Show 10 Songs</option>
                                </select>
                            </fieldset>
                            <fieldset className="form-group label-floating is-select">
                                <label className="control-label small-text">Album Cover Options</label>
                                <select className="selectpicker form-control">
                                    <option value="AG">Show Small Album Covers</option>
                                    <option value="AF">Show Big Album Covers</option>
                                    <option value="AD">Does not show covers</option>
                                </select>
                            </fieldset>
                        </form>
                        <div className="settings-footer">
                            <div className="small-text" style={{marginBottom : "30px"}}>You are logged in to Spotify as
                                <a href="#" className="off-topic">
                                    James Spiegel Spotify
                                </a>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
                                    <a href="#" className="btn btn-secondary btn-lg full-width spotify-button-styling"
                                       data-toggle="modal" data-target="#faqs-popup">Link your Playlist FAQs
                                        <div className="ripple-container" />
                                    </a>
                                </div>
                                <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
                                    <a href="#" className="btn btn-info btn-lg full-width spotify-button-styling">
                                        Spotify Account Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistSettings;