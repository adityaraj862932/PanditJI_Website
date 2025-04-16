import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      {isRegister ? <Signup toggleForm={toggleForm} /> : <Login toggleForm={toggleForm} />}
    </>
  );
};

export default AuthPage;
