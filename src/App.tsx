import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes";
import NotFound from "./routes/NotFound";
import Auth from "./routes/Auth";
import { Link } from "react-router-dom";
import User from "./routes/app/profile/User";
import RequireAuth from "./components/auth/RequireAuth";
import CurrentUser from "./routes/app/profile/Currentuser";

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/user">Profile</Link>
        </li>
      </ul>
      <Routes>
        {/* Index */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/auth" element={<Auth />} />

        {/* App */}
        <Route path="/user/:id" element={<User />} />
        <Route
          path="/user"
          element={
            <RequireAuth>
              <CurrentUser />
            </RequireAuth>
          }
        />

        {/* 404 Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
