import { FETCH_RANKINGS } from '../actionCreators/rankingActions';

const INITIAL_STATE = { all: [], rankings:null };

export default function(state=[], action){
  switch(action.type) {
    /*console.log('action received', action.payload.data)*/
    case FETCH_RANKINGS:
    console.log('in rankings redeucersss!!!', '++==', action.payload.data[3])
     return { ...state, all: action.payload.data[3] }
  default:
  return state;
  }
}