import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Todos from "../../ui/Todos";
import Controls from "./Controls";
import { useSelector } from "react-redux";
import Modal from "../../ui/Modal";
import { addTodo } from "./actions";
import { setEditTodo } from "../EditTodo/actions";
import { Link } from "react-router-dom";

/**
 * Главная страница
 */
const Home = () => {
  const todos = useSelector((state) => state.homeReducer.todos);
  const dispatch = useDispatch();
  const [isOpenModal, setModal] = useState(false);
  const [nameTodo, setNameTodo] = useState("");

  // Закрытие модального окна
  const closeModal = () => {
    setModal(!isOpenModal);
    setNameTodo("");
  };

  // Сохранить задачу
  const saveTasks = () => {
    dispatch(
      addTodo({
        todos,
        nameTodo,
      })
    );
    closeModal();
  };

  let mapTodos = [];
  for (let i = 0; i < todos.length; i++) {
    // Массив заметок + переход к редактированию заметки при нажатии на нее
    mapTodos.push(
      <Link key={i} to={`/edittodo/${todos[i].header}`}>
        <Todos
          todo={todos[i]}
          onClick={() => dispatch(setEditTodo(todos[i]))}
        />
      </Link>
    );
  }
  return (
    <div>
      <Controls onClickNew={closeModal} />
      <div className="container">
        <div className="box">{mapTodos}</div>
      </div>
      <Modal
        visibility={isOpenModal}
        title="Новая заметка"
        onSave={saveTasks}
        onCancel={closeModal}
      >
        <form>
          <label>
            <span style={{ marginRight: 15 }}>Наименование:</span>
            <input
              type="text"
              value={nameTodo}
              onChange={(e) => setNameTodo(e.target.value)}
            />
          </label>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
