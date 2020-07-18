import React from "react";
import PropTypes from "prop-types";

const Task = ({ task, onChecked, onTitleChange, onClickDelete }) => {
  return (
    <div>
      <input type="checkbox" onChange={onChecked} checked={task.isDone} />
      <input type="text" onChange={onTitleChange} value={task.title} />
      <input
        type="button"
        onClick={onClickDelete}
        value="-"
        style={{
          backgroundColor: "darkred",
        }}
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
