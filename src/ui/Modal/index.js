import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const Modal = ({
  children,
  visibility,
  onSave,
  onCancel,
  title,
  isRedirect = false,
  toRedirect,
}) => {
  return (
    visibility && (
      <div className="modal">
        <div className="header">
          <h2>{title}</h2>
        </div>
        <div className="children">{children}</div>
        <div className="controls">
          <div>
            {isRedirect ? (
              <Link to={toRedirect}>
                <Button
                  value="Сохранить"
                  style={{ marginRight: 50, marginBottom: 10 }}
                  onClick={onSave}
                />
              </Link>
            ) : (
              <Button
                value="Сохранить"
                style={{ marginRight: 50, marginBottom: 10 }}
                onClick={onSave}
              />
            )}

            <Button value="Отмена" onClick={onCancel} />
          </div>
        </div>
      </div>
    )
  );
};

Modal.proptypes = {
  children: PropTypes.element,
  visibility: PropTypes.bool,
  controls: PropTypes.element,
};

export default Modal;
