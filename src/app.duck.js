import { combineReducers } from 'redux';

import home from 'pages/home/Home.duck';

const appReducer = combineReducers({
    home,
})

export default appReducer;
