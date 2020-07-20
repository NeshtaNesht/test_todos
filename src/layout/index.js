import React from "react";
import "../styles.css";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const title = useSelector((state) => state.homeReducer.appTitle);

  return (
    <>
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className="content">{children}</div>
      <div className="footer"></div>
    </>
  );
};

export default Layout;
