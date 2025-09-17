import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      {
        <Outlet /> /* acts as a placeholder for child routes inside a parent route. */
      }
    </div>
  );
};

export default Layout;
