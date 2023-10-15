import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import TodoList from "./TodoList";
import { AuthProvider } from "./components/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <BrowserRouter basename="">
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/todo" Component={TodoList} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
