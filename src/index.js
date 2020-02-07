import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReactDom from 'react-dom';
import reducers from './reducers'
import App from './components/App';

ReactDom.render(
<Provider store={createStore(reducers)} >
<App /> 
</Provider>
,document.getElementById('root'));