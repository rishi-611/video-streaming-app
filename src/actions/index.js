import * as constants from "./ActionConstants";

export const signIn = (id) => {
  return {
    type: constants.SIGN_IN,
    payload: {
      id: id,
    },
  };
};

export const signOut = () => {
  return {
    type: constants.SIGN_OUT,
    payload: {
      id: null,
    },
  };
};
