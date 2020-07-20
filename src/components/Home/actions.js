import { homeTypes } from "./constants";
import store from "../../store/index";

// Экшен добавления нового элемента
export const addTodo = (todo) => {
  let t = [
    ...todo.todos,
    {
      id: todo.todos.length,
      header: !!todo.nameTodo ? todo.nameTodo : " ",
      tasks: [],
    },
  ];
  return {
    type: homeTypes.SET_TODO,
    payload: t,
  };
};

// Смена заголовка страницы
export const setTitle = (payload) => ({
  type: homeTypes.SET_TITLE,
  payload: payload,
});

// Удаление заметки
export const deleteTodo = (todo) => {
  // Создаем новый массив без переданного элемента и далее заменяем глобальный стейт
  let currentTodos = [...store.getState().homeReducer.todos].filter(
    (x) => x.id !== todo.id
  );
  return {
    type: homeTypes.SET_TODO,
    payload: currentTodos,
  };
};

// Сохранение изменений в заметке
export const saveTodo = (todo) => {
  let currentTodos = [...store.getState().homeReducer.todos].map((x) => {
    if (x.id === todo.id) {
      return todo;
    }
    return x;
  });
  return {
    type: homeTypes.SET_TODO,
    payload: currentTodos,
  };
};
