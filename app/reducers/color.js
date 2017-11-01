import * as types from "./../constants/ActionTypes";


const backgr = (state = "green", action) => {
  switch (action.type) {
      case types.NEW_BG:
          state = action.backgr === 'green' ? 'blue' : 'green';
          return state;
      default:
      return state;
   }
};
export default backgr;