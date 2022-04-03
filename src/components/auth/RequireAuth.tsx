import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <>
      {auth.currentUser ? (
        children
      ) : (
        <Navigate to="/auth" replace state={{ path: location.pathname }} />
      )}
    </>
  );
};

export default RequireAuth;
