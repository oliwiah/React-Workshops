import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import usersService from 'services/users.service';

import pageReducer, {
    initialState,
    // reducer
    homeReducer,
    // actions
    requestUsers,
    requestUsersSuccess,
    requestUsersFailure,
    setUsers,
    // selectors
    homeSelector,
    // thunks
    getUsers
} from '../Home.duck';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const duck = 'Home';
const app = 'React-Workshops';

const getActionName = action => `${app}/${duck}/${action}`;

describe('Duck --- home', () => {
    describe('>>> Actions', () => {
        it('+++ actionCreator requestUsers', () => {
            const action = requestUsers();
            const expectedResult = {
                type: getActionName('REQUEST_USERS'),
            };

            expect(action).toEqual(expectedResult);
        });
    });

    describe('>>> Reducer', () => {
        it('+++ reducer for default state', () => {
            const state = homeReducer();
            expect(state).toEqual(initialState);
        });

        it('+++ reducer for REQUEST_USERS', () => {
            const expectedState = {
                ...initialState,
                isFetching: true,
            };

            const action = {
                type: getActionName('REQUEST_USERS'),
            };

            const state = homeReducer(initialState, action);

            expect(state).toEqual(expectedState);
        });
    });

    describe('>>> Selectors', () => {
        const store = mockStore({
            home: {
                page: {
                    ...initialState,
                },
            },
        });
        
        it('+++ select homeSelector', () => {
            expect(homeSelector(store.getState()))
                .toEqual(store.getState().home.page);
        });
    });

    describe('>>> Thunks', () => {
        const store = mockStore({
            home: {
                page: {
                    ...initialState,
                }
            },
        });

        afterEach(() => {
            // each test should have same start
            store.clearActions();
        });

        describe('+++ thunk getUsers', () => {
            it('should dispatch requestUsersFailure when request was rejected', done => {
                const serviceSpy = spyOn(usersService, 'getUsers')
                    .and.callFake(() => Promise.reject());
                
                store.dispatch(getUsers())
                    .then(() => {
                        expect(store.getActions()[0].type).toContain('REQUEST_USERS');
                    })
                    .then(() => {
                        expect(store.getActions()[1].type).toContain('RECEIVED_USERS_FAILURE');
                        done();
                    });
            });
        });
    });
});
