
export default function(state = {}, action){
  switch(action.type) {
    case 'SCRAPER_ACTION':
    console.log('###ACTIONPAYLOAD###', action.payload)
    console.log('State is ', state);
    console.log('returning', Object.assign({}, state, action.payload.data));
      return Object.assign({}, state, action.payload.data);
    default:
      return state;
  }
}