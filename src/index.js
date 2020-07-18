import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import Layout from "./layout";
import App from "./components";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const root = (
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <App />
      </Layout>
    </Router>
  </Provider>
);

render(root, document.getElementById("root"));
