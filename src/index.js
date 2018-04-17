import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

registerServiceWorker();