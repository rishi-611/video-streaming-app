import * as constants from "../actions/ActionConstants";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import omit from "lodash/omit";
import mapKeys from "lodash/mapKeys";

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

const StreamReducer = function (state = {}, action) {
  switch (action.type) {
    case constants.CREATE_STREAM:
    case constants.SHOW_STREAM:
    case constants.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case constants.DELETE_STREAM:
      return omit(state, action.payload);

    case constants.SHOW_STREAMS_LIST:
      return { ...state, ...mapKeys(action.payload, "id") };

    default:
      return state;
  }
};

const reducers = combineReducers({
  auth: AuthReducer,
  form: formReducer,
  streams: StreamReducer,
});

export default reducers;
