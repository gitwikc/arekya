import { useState } from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./routes";
import NotFound from "./routes/NotFound";
import Auth from "./routes/Auth";
import Dashboard from "./routes/app/Dashboard";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>
      <Routes>
        {/* Index */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/auth" element={<Auth />} />

        {/* App */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 404 Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
