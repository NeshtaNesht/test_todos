import React from "react";
import PropTypes from "prop-types";

const Task = ({ task, onChecked, onTitleChange, onClickDelete }) => {
  return (
    <div>
      <input
        id={task.id}
        type="checkbox"
        onChange={onChecked}
        checked={task.isDone}
      />
      <label htmlFor={task.id}></label>
      <input
        type="text"
        onChange={onTitleChange}
        value={task.title}
        style={{ marginTop: 20 }}
      />
      <input
        type="button"
        onClick={onClickDelete}
        value="-"
        style={{ marginLeft: 20 }}
        className="deleteButton"
      />
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    isDone: PropTypes.bool,
    title: PropTypes.string,
  }),
  onChecked: PropTypes.func,
  onTitleChange: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default Task;
