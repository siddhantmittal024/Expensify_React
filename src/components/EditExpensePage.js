import { Switch, BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import React from "react";

const EditExpensePage = (props) => {
  return (
    <div>This is from my edit expense page of id {props.match.params.id}</div>
  );
};

export default EditExpensePage;
