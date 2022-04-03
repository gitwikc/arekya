import { signInWithEmailAndPassword } from "firebase/auth";
import * as React from "react";
import { auth } from "../../firebase";
import InputField from "../ui/InputField";

const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [viewPassword, setViewPassword] = React.useState<boolean>(false);
  const toggleViewPassword = () => setViewPassword((password) => !password);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    // Login using email, password
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("Signed in as", userCredential.user);
    });
  };

  return (
    <div className="Login">
      <form className="login_form" onSubmit={handleSubmit}>
        <InputField
          id="email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="Email"
        />
        <InputField
          id="password"
          type={viewPassword ? "text" : "password"}
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <div className="view_password">
          <input
            id="view_password"
            type="checkbox"
            checked={viewPassword}
            onChange={(e) => setViewPassword(e.target.checked)}
          />
          <label htmlFor="view_password">view password</label>
        </div>
        <div className="btn">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
