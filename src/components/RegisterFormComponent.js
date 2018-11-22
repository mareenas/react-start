import React, {Component} from 'react';
import DatePicker from 'react-date-picker';

class RegisterFormComponent extends Component {
    state = {
        date: new Date(),
    };

    onChange(date) {
        this.setState({
            date: date,
        });
    }

    render() {
        return (
            <div className={"register-form " +(this.props.isActive ? "" : "hidden")}>
                <div className="main-form-wrapper-title">
                    Register to Olympus
                </div>
                <form className="content form-content">
                    <div className="input-group text">
                        <input className="form-control" type="text" placeholder="First Name"/>
                        <input className="form-control" type="text" placeholder="Last Name"/>
                    </div>
                    <div className="input-group email">
                        <input className="form-control" type="email" placeholder="Your Email"/>
                    </div>
                    <div className="input-group password">
                        <input className="form-control" type="password" placeholder="Your Password"/>
                    </div>
                    <div style={{marginBottom: '30px'}}>
                        <DatePicker
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                    <div className="input-group">
                        <select name="gender" className="form-control">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-check checkbox" style={{textAlign: 'left'}}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck" style={{marginLeft: '0'}} />
                        <label className="form-check-label" htmlFor="exampleCheck"> I accept the <a href="#">Terms
                            and Conditions</a> of the website
                        </label>
                    </div>
                    <button type="button" className="btn btn-lg submit-button purple">Complete Registration!</button>
                </form>
            </div>
        )
    }
}

export default RegisterFormComponent