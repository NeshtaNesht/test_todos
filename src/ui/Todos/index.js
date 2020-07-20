import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 *
 * @param {object} todo Объект заметки
 * @param {func} onClick Обработчик нажатия на заметку
 */
const Todos = ({ todo, onClick }) => {
  return (
    <div className="todos" onClick={onClick}>
      <h3>{todo.header}:</h3>
      <ul className="list">
        {todo.tasks.map((v, k) => (
          <li key={k} className={v.isDone ? "success" : "fail"}>
            <span>{v.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todo: PropTypes.shape({
    header: PropTypes.string,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        isDone: PropTypes.bool,
      })
    ),
  }),
  onClick: PropTypes.func,
};

export default Todos;
