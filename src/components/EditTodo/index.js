import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Task from "../../ui/Task";
import { Link } from "react-router-dom";
import Modal from "../../ui/Modal";
import { deleteTodo, saveTodo } from "../Home/actions";
import {
  checkedTask,
  changeTitle,
  changeHeader,
  addTask,
  deleteTask,
} from "./actions";

/**
 * Страница редактирования заметки
 */
const EditTodo = () => {
  const dispatch = useDispatch();
  // Получим объект из стейта
  const todo = useSelector((state) => state.editTodoReducer.editTodo);
  // Видимость модального окна подтверждения удаления
  const [visibilitySuccess, setVisibility] = useState(false);
  // Видимость модального окна подтверждения сохранения
  const [visibilitySaveSuccess, setVisibilitySave] = useState(false);

  const closeModal = () => {
    setVisibility(!visibilitySuccess);
  };

  // Модальное окно подтверждения удаления
  const modalDeleteuccess = (
    <Modal
      visibility={visibilitySuccess}
      title="Подтвердите удаление"
      onSave={() => dispatch(deleteTodo(todo))}
      onCancel={closeModal}
      isRedirect={true}
      toRedirect="/"
    ></Modal>
  );

  // Модальное окно подтверждения изменений
  const modalSaveSuccess = (
    <Modal
      visibility={visibilitySaveSuccess}
      title="Вы уверены, что хотите сохранить изменения?"
      onSave={() => dispatch(saveTodo(todo))}
      onCancel={() => setVisibilitySave(!visibilitySaveSuccess)}
      isRedirect={true}
      toRedirect="/"
    ></Modal>
  );

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      {modalDeleteuccess}
      {modalSaveSuccess}
      <div className={{ display: "block" }}>
        <Button value="Сохранить" onClick={() => setVisibilitySave(true)} />
        <Link to="/">
          <Button value="Отменить" />
        </Link>
        <Button
          className="deleteButton"
          value="Удалить заметку"
          onClick={closeModal}
        />
      </div>
      <p>Наименование заметки: </p>
      <input
        type="text"
        defaultValue={todo.header}
        onChange={(e) => dispatch(changeHeader(e.target.value))}
      />
      <p>Список задач: </p>
      <Button value="Добавить задачу" onClick={() => dispatch(addTask())} />
      {todo.tasks.map((v, k) => {
        return (
          <Task
            key={k}
            task={v}
            onChecked={(e) => dispatch(checkedTask(v, e))}
            onTitleChange={(e) => dispatch(changeTitle(v, e))}
            onClickDelete={() => dispatch(deleteTask(v))}
          />
        );
      })}
    </div>
  );
};

export default EditTodo;
