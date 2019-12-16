import * as types from '../actionTypes/users'

export function fetchUsers() {
    return async dispatch => {
      dispatch({type: types.FETCH_USERS});
    try {
        let response = await fetch('http://localhost:3000/users');
        if (response.status !== 200) {
            throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.FETCH_USERS_SUCCESS, data: response});
    } catch (error) {
        dispatch({type: types.FETCH_NOTES_FAILURE, error});
      }
    };
  }

  export function createUser(user) {
    return async dispatch => {
      dispatch({type: types.CREATE_USER});
      try {
        let response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({user}),
        });
        if (response.status !== 200) {
          throw new Error('FETCH_ERROR');
        }
        response = await response.json();
        dispatch({type: types.CREATE_USER_SUCCESS, data: response});
      } catch (error) {
        dispatch({type: types.CREATE_USER_FAILURE, error});
      }
    };
  }