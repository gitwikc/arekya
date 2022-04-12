import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../components/auth/Login";
import { auth } from "../firebase";

const Auth = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const authWithGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log(`Signed in as ${user.email}`);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  React.useEffect(() => {
    // When signed in, takes user to the page desired before auth
    // else homepage
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const redirectURL = state?.path || "/";
        console.log(`Signed in as ${user?.email}`);
        console.log(`Now redirecting to ${redirectURL}`);
        navigate(redirectURL);
      }
    });
  });

  return (
    <div className="Auth">
      <Login />
      <div className="auth_providers">
        <button onClick={authWithGoogle}>Google Authentication</button>
      </div>
    </div>
  );
};

export default Auth;
