import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth.js'
import listings from './listings.js'
import rankingsReducers from './rankings'


const rootReducer = combineReducers({
  auth, listings,
  rankings: rankingsReducers,
  routing: routerReducer
                                });


export default rootReducer;
