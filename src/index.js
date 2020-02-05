import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FEATURES from './Store/Store';
console.log(FEATURES)
ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));