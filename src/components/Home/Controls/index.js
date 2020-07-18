import React from "react";
import Button from "../../../ui/Button";

/**
 * Контролы главной страницы
 * Думал, что их будет много, поэтому вынес в отдельный файл
 * @param {func} onClickNew Клик по кнопке добавления
 */
const Controls = ({ onClickNew }) => {
  return (
    <div>
      <Button type="button" value="Добавить заметку" onClick={onClickNew} />
    </div>
  );
};

export default Controls;
