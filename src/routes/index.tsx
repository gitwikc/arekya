import { signOut } from "firebase/auth";
import * as React from "react";
import { Navigate, Redirect } from "react-router-dom";
import { auth } from "../firebase";
import { useCurrentUser } from "../store/user";

const IndexRoute = () => {
  const { user } = useCurrentUser();

  return (
    <div className="Home">
      <Navigate to={user?.uid ? "/dashboard" : "/home"} />
    </div>
  );
};

export default IndexRoute;
