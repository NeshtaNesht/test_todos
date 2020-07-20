import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import EditTodo from "./EditTodo";
import { useDispatch } from "react-redux";
import { setTitle } from "./Home/actions";
import NotFound from "./NotFound";

const App = () => {
  const dispatch = useDispatch();
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          dispatch(setTitle("Заметки")); // Меняем заголовок
          return <Home />;
        }}
      />
      <Route
        path="/edittodo/:header"
        render={() => {
          dispatch(setTitle("Редактирование заметки"));
          return <EditTodo />;
        }}
      />
      <Route
        path="*"
        render={() => {
          dispatch(setTitle("404 :("));
          return <NotFound />;
        }}
      />
    </Switch>
  );
};

export default App;
