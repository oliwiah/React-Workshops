import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/base/reset.css';

import store from './app.store';

import { Provider } from 'react-redux';
import App from './app.cmp';

const EnhancedApp = (props) => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<EnhancedApp />, document.getElementById('root'));
