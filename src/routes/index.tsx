import React from "react";
import { MainRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

export default function () {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}
