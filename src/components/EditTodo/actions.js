import { editTypes } from "./constants";
import store from "../../store/index";

// Установка текущего редактируемого объекта
export const setEditTodo = (payload) => ({
  type: editTypes.SET_EDIT_TODO,
  payload: payload,
});

// Добавление задачи
export const addTask = () => {
  const currentTodo = { ...store.getState().editTodoReducer.editTodo };
  return {
    type: editTypes.SET_EDIT_TODO,
    payload: {
      ...currentTodo,
      tasks: [
        ...currentTodo.tasks,
        {
          id: currentTodo.tasks.length,
          isDone: false,
          title: "",
        },
      ],
    },
  };
};

// Изменение флага выполнения
export const checkedTask = (task, e) => {
  const currentTodo = { ...store.getState().editTodoReducer.editTodo };
  let newTasks = [...currentTodo.tasks].map((x) => {
    if (x.id === task.id) {
      task.isDone = e.target.checked;
      return task;
    }
    return x;
  });
  return {
    type: editTypes.SET_EDIT_TODO,
    payload: { ...currentTodo, tasks: [...newTasks] },
  };
};

// Смена наименования задачи
export const changeTitle = (task, e) => {
  const currentTodo = { ...store.getState().editTodoReducer.editTodo };
  let newTasks = [...currentTodo.tasks].map((x) => {
    if (x.id === task.id) {
      task.title = e.target.value;
      return task;
    }
    return x;
  });
  return {
    type: editTypes.SET_EDIT_TODO,
    payload: { ...currentTodo, tasks: [...newTasks] },
  };
};

// Удаление задачи
export const deleteTask = (task) => {
  const currentTodo = { ...store.getState().editTodoReducer.editTodo };
  let newTasks = [...currentTodo.tasks].filter((x) => {
    if (x.id !== task.id) {
      return x;
    }
  });
  return {
    type: editTypes.SET_EDIT_TODO,
    payload: { ...currentTodo, tasks: [...newTasks] },
  };
};

// Смена названия заметки
export const changeHeader = (header) => {
  const todos = { ...store.getState().editTodoReducer.editTodo };
  return {
    type: editTypes.SET_EDIT_TODO,
    payload: { ...todos, header },
  };
};
