import * as types from '../actionTypes/users'

import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

// function getAll() {
//     return dispatch => {
//         dispatch(request());

//         userService.getAll()
//             .then(
//                 users => dispatch(success(users)),
//                 error => dispatch(failure(error.toString()))
//             );
//     };

//     function request() { return { type: userConstants.GETALL_REQUEST } }
//     function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
// }

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));

//         userService.delete(id)
//             .then(
//                 user => dispatch(success(id)),
//                 error => dispatch(failure(id, error.toString()))
//             );
//     };

//     function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
//     function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
//     function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
// }

// }
    // export function fetchUsers() {
    //     return async dispatch => {
    //       dispatch({type: types.FETCH_USERS});
    //     try {
    //         let response = await fetch('http://localhost:3000/users');
    //         if (response.status !== 200) {
    //             throw new Error('FETCH_ERROR');
    //       }
    //       response = await response.json();
    //       dispatch({type: types.FETCH_USERS_SUCCESS, data: response});
    //     } catch (error) {
    //         dispatch({type: types.FETCH_NOTES_FAILURE, error});
    //       }
    //     };
    //   }
    
    //   export function createUser(user) {
    //     return async dispatch => {
    //       dispatch({type: types.CREATE_USER});
    //       try {
    //         let response = await fetch('http://localhost:3000/users', {
    //           method: 'POST',
    //           headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({user}),
    //         });
    //         if (response.status !== 200) {
    //           throw new Error('FETCH_ERROR');
    //         }
    //         response = await response.json();
    //         dispatch({type: types.CREATE_USER_SUCCESS, data: response});
    //       } catch (error) {
    //         dispatch({type: types.CREATE_USER_FAILURE, error});
    //       }
    //     };