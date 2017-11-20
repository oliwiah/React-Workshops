import { combineReducers } from 'redux';

//
// Constants / Action-Types
//


//
// State Definition - when exported then easier to test
//
export const initialState = {}

//
// Reducer
//
export const manageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
}

//
// Simple actions
//


//
// Selectors
//

//
// Thunks - complex actions ( returns function with dispatch as arg )
//


//
// Always export reducer as default
//
export default manageReducer;
