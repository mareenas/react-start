import React, {Component} from 'react';
import SwitchButtonsContainer from "./SwitchButtonsContainer";
import RegisterFormComponent from "./RegisterFormComponent";
import LoginFormComponent from "./LoginFormComponent";

class RightBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerVisible: true,
            loginVisible: false
        };
        this.showRegister = this.showRegister.bind(this);
        this.showLogin = this.showLogin.bind(this);
    }

    showRegister() {
        this.setState({
            registerVisible: true,
            loginVisible: false
        });
    }

    showLogin() {
        this.setState({
            registerVisible: false,
            loginVisible: true
        });
    }

    render() {
        return (
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="form-container">
                    <SwitchButtonsContainer showRegister={this.showRegister} showLogin={this.showLogin} />
                    {/*register-form*/}
                    <RegisterFormComponent isActive={this.state.registerVisible} />
                    {/*login-form*/}
                    <LoginFormComponent isActive={this.state.loginVisible} />
                </div>
            </div>
        )
    }
}

export default RightBlock;


