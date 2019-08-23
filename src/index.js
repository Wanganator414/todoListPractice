import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ToDoList from "./ToDoList";
import * as serviceWorker from "./serviceWorker";

let destination = document.querySelector("#root");

ReactDOM.render(<ToDoList />, destination);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
