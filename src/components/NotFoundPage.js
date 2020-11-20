import { Switch, BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import React from "react";

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
