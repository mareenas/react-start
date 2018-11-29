import React, {Component} from 'react';

class SongRow extends Component {
    render() {
        return(
            <div className="tracks-list">
                <div className="track-row">{this.props.number + 1}</div>
                <div className="track-row">
                    <img src={this.props.picture} />
                </div>
                <div className="track-row">
                    <div>{this.props.song}</div>
                    <div>{this.props.artist}</div>
                </div>
                <div className="track-row">{this.props.timing}</div>
            </div>
        )
    }
}

export default SongRow;