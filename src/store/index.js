import React from "react";
import { createStore } from "redux";
import rootReducer from "./root-reducer";

const storage = "app_todos";

// Сохранение стейта в localstorage
const saveState = (state) => {
  try {
    const stateToSave = JSON.stringify(state);
    localStorage.setItem(storage, stateToSave);
  } catch (e) {
    console.log(e);
  }
};

// Загрузка стейта из localstorage
const loadState = () => {
  try {
    // Получаем стейт по ключу из loaclstorage
    const s = localStorage.getItem(storage);
    if (!s) return undefined;
    // Парсим объект в нормальный вид
    return JSON.parse(s);
  } catch (e) {
    console.log(e);
  }
};

const prevState = loadState();

const store = createStore(rootReducer, prevState);

// Вызываем сохранение стейта в localStorage каждый раз, когда стейт обновляется
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
