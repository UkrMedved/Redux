import * as types from "./../constants/ActionTypes";

export const newBack = (backgr) => {
	return {
		type: types.NEW_BG,
		backgr
	};
};
export const newName = (name) => {
   return {
      type: types.NEW_NAME,
      name
   };
};
