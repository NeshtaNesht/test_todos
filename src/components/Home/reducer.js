import { homeTypes } from "./constants";

const initialState = {
  todos: [],
  appTitle: "",
};

const handlers = {
  [homeTypes.SET_TODO]: (state, payload) => {
    return {
      ...state,
      todos: payload,
    };
  },
  [homeTypes.SET_TITLE]: (state, payload) => {
    return {
      ...state,
      appTitle: payload,
    };
  },
  DEFAULT: (state) => state,
};

export const homeReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};
