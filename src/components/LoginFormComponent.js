import React, {Component} from 'react';

class LoginFormComponent extends Component {
    render() {
        return (
            <div className={"login-form " + (this.props.isActive ? "" : "hidden")}>
                <div className="main-form-wrapper-title">
                    Login to your Account
                </div>
                <form className="content form-content">
                    <div className="input-group email">
                        <input className="form-control" type="email" placeholder="Your Email"/>
                    </div>
                    <div className="input-group password">
                        <input className="form-control" type="password" placeholder="Your Password"/>
                    </div>
                    <div className="form-check checkbox login-checkbox-container">
                        <input type="checkbox" className="form-check-input" id="remember-check" style={{marginLeft: '0'}}/>
                            <label className="form-check-label" htmlFor="remember-check">Remember me</label>
                            <a href="#">Forgot my password</a>
                    </div>
                    <button type="button" className="btn btn-lg orange submit-button">Login</button>
                    <div className="or"/>
                    <button type="button" className="btn btn-lg facebook-color submit-button">Login with Facebook
                    </button>
                    <button type="button" className="btn btn-lg twitter-color submit-button">Login with Twitter</button>
                    <div className="text-bottom">
                        Don’t you have an account? <span className="offtop-link">Register Now!</span> it’s really simple
                        and you can start enjoying all the benefits!
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginFormComponent