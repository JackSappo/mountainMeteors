import { GETLISTINGS } from '../actionCreators/listingActions'

// function listings(state = {all: []}, action) {
function listings(state = [], action) {
  switch(action.type) {
    case 'GETLISTINGS':
      console.log('listings reducer triggered. listings:', action);
      // console.log('listing reduc returning', Object.assign([], state, action.payload.data));
      // console.log('assigning', Object.assign([], state, action.payload.data));
      // console.log('reducer state', state);
      // return action.payload.data;
      // return {...state, all: action.payload.data};
      return action.payload ?
        Object.assign([], state, action.payload.data):
        [];

    case 'LOGOUT':
      return [];

    case 'POSTLISTINGS':
      // console.log('action.payload', action.payload);
      state = state.slice();
      state.push(action.payload);
      // console.log('returning state', state);
      return state;
      // state.push(action);

    case 'PUTLISTING':
      console.log('reducer heard put listing', action.payload);
      let listingId = action.payload.id;
      let edits = action.payload.edits;
      state = state.slice();
      state.map(listing => {
        if (listing.id === listingId) {
          for (let key in edits) {
            listing[key] = edits[key];
          }
        }
        return listing;
      })
      console.log('returning state', state);
      return state;

    default:
      return state;
  }
}

export default listings;
