import * as React from "react";
import { Route, Routes } from "react-router-dom";
import IndexRoute from "./routes";
import NotFound from "./routes/NotFound";
import Auth from "./routes/Auth";
import { Link } from "react-router-dom";
import User from "./routes/app/profile/User";
import RequireAuth from "./components/auth/RequireAuth";
import CurrentUser from "./routes/app/profile/Currentuser";
import { useCurrentUser } from "./store/user";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Dashboard from "./components/app/Dashboard";
import Home from "./routes/Home";

const App = () => {
  const { setUser } = useCurrentUser();
  React.useEffect(() => {
    // Changes user in store on auth state changed
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

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
        <Route path="/" element={<IndexRoute />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />

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
