import { combineReducers } from 'redux';
import { indexBy, prop, map } from 'ramda';
import { createSelector } from 'reselect';

import usersService from 'services/users.service';

//
// import nested reducers
//
import createReducer from './main/create/Create.duck';
import manageReducer from './main/manage/Manage.duck';

//
// Constants / Action-Types
//
const REQUEST_USERS = 'React-Workshops/Home/REQUEST_USERS';
const RECEIVED_USERS_SUCCESS = 'React-Workshops/Home/RECEIVED_USERS_SUCCESS';
const RECEIVED_USERS_FAILURE = 'React-Workshops/Home/RECEIVED_USERS_FAILURE';
const SET_USERS = 'React-Workshops/Home/SET_USERS';

//
// State Definition - when exported then easier to test
//
export const initialState = {
    isFetching: false,
};

//
// Reducer
//
export const homeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                ...state,
                isFetching: true,
            }
        case RECEIVED_USERS_SUCCESS:
        case RECEIVED_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
            }
        default:
            return state;
    }
};

export const usersByIdReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case SET_USERS:
            return indexBy(prop('id'), action.users);
        default:
            return state;
    }
};

export const usersAllIdsReducer = (state = [], action = {}) => {
    switch (action.type) {
        case SET_USERS:
            return map(prop('id'), action.users);
        default:
            return state;
    }
};

//
// Simple actions
//
export const requestUsers = () => ({ type: REQUEST_USERS });
export const requestUsersSuccess = () => ({ type: RECEIVED_USERS_SUCCESS });
export const requestUsersFailure = () => ({ type: RECEIVED_USERS_FAILURE });

export const setUsers = users => ({
    type: SET_USERS,
    users,
});

//
// Selectors
//
export const homeSelector = state => state.home.page;

export const userIdsSelector = state => state.home.users.allIds;
export const usersByIdSelector = (state) => state.home.users.byIds;

export const totalHypeSelector = createSelector(
    userIdsSelector,
    usersByIdSelector,
    (ids, obj) => ids.reduce((acc, id) => acc + obj[id].hypePoints, 0)
);

//
// Thunks - complex actions ( returns function with dispatch as arg )
//
export const getUsers = () => dispatch => {
    dispatch(requestUsers());
    return usersService.getUsers()
        .then((users) => {
            // handle success
            dispatch(setUsers(users));
            dispatch(requestUsersSuccess());
        })
        .catch(() => {
            // handle error - display some error or smth
            dispatch(requestUsersFailure());
        });
};

//
// Always export reducer as default
//
export default combineReducers({
    page: homeReducer,
    tabs: combineReducers({
        create: createReducer,
        manage: manageReducer,
    }),
    users: combineReducers({
        byIds: usersByIdReducer,
        allIds: usersAllIdsReducer,
    }),
});
