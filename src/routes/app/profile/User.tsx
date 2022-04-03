import * as React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [userData, setUserData] = React.useState();

  React.useEffect(() => {
    // get user data here
  }, []);

  return (
    <div className="User">
      This is the user data for user ID <b>{id}</b>
    </div>
  );
};

export default User;
