import * as constants from "./ActionConstants";
import history from "../history";
import jsonServer from "../jsonServer";

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

export const createStream = (stream) => {
  return async function (dispatch, getState) {
    const userId = getState().auth.id;
    const response = await jsonServer.post("/streams", {
      ...stream,
      userId: userId,
    });

    dispatch({
      type: constants.CREATE_STREAM,
      payload: response.data,
    });
    history.push("/");
  };
};

export const showStreamList = () => async (dispatch) => {
  const response = await jsonServer.get("/streams");

  dispatch({
    type: constants.SHOW_STREAMS_LIST,
    payload: response.data,
  });
};

export const showStream = (id) => async (dispatch) => {
  const response = await jsonServer.get(`/streams/${id}`);

  return dispatch({
    type: constants.SHOW_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, formValues) => async (dispatch, getState) => {
  const response = await jsonServer.patch(`/streams/${id}`, formValues);

  dispatch({
    type: constants.EDIT_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await jsonServer.delete(`/streams/${id}`);
  return dispatch({
    type: constants.DELETE_STREAM,
    payload: id,
  });
};
