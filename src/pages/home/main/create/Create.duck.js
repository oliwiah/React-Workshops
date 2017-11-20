import usersService from 'services/users.service';

//
// Import needed actions/selectors/thunks from other ducks
//
import { setUsers } from '../../Home.duck';

//
// Constants / Action-Types
//
const SET_LOGIN = 'React-Workshops/Create/SET_LOGIN';
const RECEIVED_USER_SUCCESS = 'React-Workshops/Create/RECEIVED_USER_SUCCESS';
const RECEIVED_USER_FAILURE = 'React-Workshops/Create/RECEIVED_USER_FAILURE';
const ADD_USER = 'React-Workshops/Create/ADD_USER';

//
// State Definition - when exported then easier to test
//
export const initialState = {
    login: '',
};

//
// Reducer
//
export const createReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                login: action.login,
            }
        case RECEIVED_USER_SUCCESS:
        case RECEIVED_USER_FAILURE:
            return {
                ...initialState,
            }
        default:
            return state;
    }
}

//
// Simple actions
//
export const requestNewUser = () => ({ type: ADD_USER });
export const requestNewUserSuccess = () => ({ type: RECEIVED_USER_SUCCESS });
export const requestNewUserFailure = () => ({ type: RECEIVED_USER_FAILURE });

export const setLogin = login => ({
    type: SET_LOGIN,
    login,
});

//
// Selectors ( TBC )
//


//
// Thunks - complex actions ( returns function with dispatch as arg )
//
export const addUser = () => (dispatch, getState) => {
    const newUser = getState().home.tabs.create.login;

    dispatch(requestNewUser);
    return usersService.addUser(newUser)
        .then((users) => {
            // handle success
            dispatch(setUsers(users));
            dispatch(requestNewUserSuccess());
        })
        .catch(() => {
            // handle error - display some error or smth
            dispatch(requestNewUserFailure());
        });
};

//
// Always export reducer as default
//
export default createReducer;
