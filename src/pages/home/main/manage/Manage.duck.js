import usersService from 'services/users.service';

import { setUsers } from '../../Home.duck';

//
// Constants / Action-Types
//
const RECEIVED_USER_SUCCESS = 'React-Workshops/Manage/RECEIVED_USER_SUCCESS';
const RECEIVED_USER_FAILURE = 'React-Workshops/Manage/RECEIVED_USER_FAILURE';
const DELETE_USER = 'React-Workshops/Manage/DELETE_USER';

//
// State Definition - when exported then easier to test
//
export const initialState = {
    isRemoving: false,
}

//
// Reducer
//
export const manageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case DELETE_USER:
            return {
                ...state,
                isRemoving: true,
            }
        case RECEIVED_USER_SUCCESS:
        case RECEIVED_USER_FAILURE:
            return {
                ...state,
                isRemoving: false,
            }
        default:
            return state;
    }
}

//
// Simple actions
//
export const requestDeleteUser = () => ({ type: DELETE_USER });
export const requestUserSuccess = () => ({ type: RECEIVED_USER_SUCCESS });
export const requestUserFailure = () => ({ type: RECEIVED_USER_FAILURE });

//
// Thunks - complex actions ( returns function with dispatch as arg )
//
export const deleteUser = (user) => dispatch => {
    dispatch(requestDeleteUser());
    return usersService.deleteUser(user)
        .then((users) => {
            // handle success
            dispatch(setUsers(users));
            dispatch(requestUserSuccess());
        })
        .catch(() => {
            // handle error - display some error or smth
            dispatch(requestUserFailure());
        });
};

//
// Always export reducer as default
//
export default manageReducer
