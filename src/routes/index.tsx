import { signOut } from "firebase/auth";
import * as React from "react";
import { auth } from "../firebase";

const Home = () => {
  

  return (
    <div className="Home">
      This is the <code>/</code> route
      <p>
        {auth.currentUser && (
          <>
            Signed in as {auth.currentUser?.displayName}
            <button
              onClick={() => {
                signOut(auth).then((value) => {
                  console.log(`Signed out user ${value}`);
                });
              }}
            >
              Sign out
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default Home;
