import * as types from "./../constants/ActionTypes";

const hello = (state = "User", action) => {
   switch (action.type) {
   		case types.NEW_NAME:
        	state = action.name;
        	return state;
    	default:
        	return state;
   }
};

export default hello;