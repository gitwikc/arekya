import * as React from "react";
import { auth } from "../../../firebase";

const CurrentUser = () => {
  return (
    <div className="CurrentUser">
      This is the data for the current user.
      <ul>
        <li>
          <b>Name:</b>
          <span>{auth.currentUser?.displayName}</span>
        </li>
        <li>
          <b>Email:</b>
          <span>{auth.currentUser?.email}</span>
        </li>
        <li>
          <b>UID:</b>
          <span>{auth.currentUser?.uid}</span>
        </li>
      </ul>
    </div>
  );
};

export default CurrentUser;
