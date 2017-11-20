import React from 'react';

import ReduxDevTools from './app.devtools';

import Home from './pages/home/Home.cnt';

const App = props => ([
    <Home key="home"/>,
    <ReduxDevTools key="redux-devtools"/>
]);

export default App;
