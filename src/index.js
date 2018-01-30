import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDOv6Cv5cSnM6Qvou2aUF-drw9flBJhUWo",
  authDomain: "fds-redux-bbs-0130.firebaseapp.com",
  databaseURL: "https://fds-redux-bbs-0130.firebaseio.com",
  projectId: "fds-redux-bbs-0130",
  storageBucket: "",
  messagingSenderId: "244935789718"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
