import * as constants from "../actions/ActionConstants";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

const intitialState = {
  isSignedIn: null,
  id: null,
};

const AuthReducer = function (state = intitialState, action) {
  switch (action.type) {
    case constants.SIGN_IN:
      return { ...state, isSignedIn: true, id: action.payload.id };
    case constants.SIGN_OUT:
      return { ...state, isSignedIn: false, id: null };
    default:
      return state;
  }
};

const reducers = combineReducers({
  auth: AuthReducer,
  form: formReducer,
});

export default reducers;
