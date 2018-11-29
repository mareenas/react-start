import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicPage from './MusicPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MusicPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
