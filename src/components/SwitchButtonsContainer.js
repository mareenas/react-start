import React, {Component} from 'react';

class SwitchButtonsContainer extends Component {

    render() {
        return (
            <div className="switch-buttons-container">
                <div className="switch-button show-register" style={{borderBottom: '1px solid lightgrey'}} onClick={this.props.showRegister}>
                    <span className="upper-arrow offtop-link">&uarr;</span>
                </div>
                <div className="switch-button show-login" onClick={this.props.showLogin}>
                    <span className="under-arrow">&rarr;</span>
                </div>
            </div>
        )
    }
}

export default SwitchButtonsContainer;