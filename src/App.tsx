import React from "react";
import { PageNavLink } from "./components/PageNavLink/PageNavLink";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { FormPage } from "./pages/FormPage/FormPage";
import { QuizPage } from "./pages/QuizPage/QuizPage";
import { NoPage } from "./pages/NoPage/NoPage";
import { LogsPage } from "./pages/LogsPage/LogsPage";

function App() {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <PageNavLink to="/" text="Home" />
            <PageNavLink to="/form" text="Form" />
            <PageNavLink to="/quiz" text="Quiz" />
            <PageNavLink to="/logs" text="Logs" />
          </div>
        </div>
      </nav>

      <div className="section mt-3">
        <div className="container">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NoPage />} />
            <Route path="form" index element={<FormPage />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="logs" element={<LogsPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
