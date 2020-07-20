import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../Button";
import { Link } from "react-router-dom";

/**
 * Модальное окно
 * @param {element} children
 * @param {bool} visibility Видимость окна
 * @param {func} onSave Обработчик сохранения
 * @param {func} onCancel Обработчик закрытия
 * @param {string} title Заголовок окна
 * @param {bool} isRedirect Нужно ли делать переход на другую страницу по кнопке Save
 * @param {string} toRedirect Куда перенаправлять, если isRedirect == true
 */
const Modal = ({
  children,
  visibility,
  onSave,
  onCancel,
  title,
  isRedirect = false,
  toRedirect,
}) => {
  const btnSave = (
    <Button
      value="Сохранить"
      style={{ marginRight: 50, marginBottom: 10 }}
      onClick={onSave}
    />
  );
  return (
    visibility && (
      <div className="modal">
        <div className="header">
          <h2>{title}</h2>
        </div>
        <div className="children">{children}</div>
        <div className="controls">
          <div>
            {isRedirect ? <Link to={toRedirect}>{btnSave}</Link> : btnSave}
            <Button value="Отмена" onClick={onCancel} />
          </div>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  visibility: PropTypes.bool,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.string,
  isRedirect: PropTypes.bool,
  toRedirect: PropTypes.string,
};

export default Modal;
