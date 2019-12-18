import users from './users'

import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
const reducers = {
  form: formReducer,
  users
}
const allReducers = combineReducers(reducers);
export default allReducers;

