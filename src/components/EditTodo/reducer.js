import { editTypes } from "./constants";

const initialState = {
  editTodo: {}, // Редактируемый объект
};

const handlers = {
  [editTypes.SET_EDIT_TODO]: (state, payload) => {
    return {
      ...state,
      editTodo: payload,
    };
  },
  DEFAULT: (state) => state,
};

export const editTodoReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};
