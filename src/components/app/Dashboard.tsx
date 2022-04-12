import { signOut } from "firebase/auth";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useCurrentUser } from "../../store/user";

const Dashboard = () => {
  const { user } = useCurrentUser();
  const navigate = useNavigate();

  return (
    <div className="Dashboard">
      <h2>Hello, {user?.displayName}!</h2>

      <img
        src={
          user?.photoURL || "https://img.icons8.com/ios-glyphs/344/user--v1.png"
        }
        alt={`{user?.displayName}'s photo`}
      />

      <h3>Teams</h3>
      <p>
        <ul>
          <li>Team 1</li>
          <li>Team 2</li>
          <li>Team 3</li>
          <li>Team 4</li>
        </ul>
      </p>

      <button
        onClick={() => {
          signOut(auth).then((value) => {
            console.log(`Signed out user ${value}`);
            navigate("/");
          });
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Dashboard;
