import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';

class MainDescription extends Component {
    render() {
        return (
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 left-column">
                <h2 style={{marginBottom: '50px'}}>Welcome to the Biggest Social<br />Network in the World</h2>
                <p style={{fontSize: 'small', marginBottom: '40px'}}>
                    We are the best and biggest social network with 5 billion active users all around the world. Share
                    you thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
                </p>
                {/*<button type="button" className="btn btn-outline-light"*/}
                        {/*style={{width: '200px', fontSize: 'smaller', padding: '15px 0'}}>*/}
                    {/*Register now!*/}
                {/*</button>*/}
                <Button>Register now!</Button>
            </div>
        )
    }
}

export default MainDescription;