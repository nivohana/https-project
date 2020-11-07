import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//global URL
axios.defaults.baseURL='https://jsonplaceholder.typicode.com';

//global Headers
axios.defaults.headers.common['Authoraizations'] = 'AUTH TOKEN';
axios.defaults.headers.post['content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error =>{
    console.log(error);
    return Promise.reject(error)
});



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
