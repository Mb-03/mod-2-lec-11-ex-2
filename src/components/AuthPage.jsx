import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthPage = () => {
  const { user, logIn, logOut } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  return (
    <div>
      {user ? (
        <>
          <h1>Hello</h1>
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <>
          <h1>LogIn</h1>
          <input
            value={username}
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
          <button onClick={() => logIn(username)}>Log In</button>
        </>
      )}
    </div>
  );
};

export default AuthPage;
