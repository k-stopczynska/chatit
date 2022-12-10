import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Login = (props) => {
  const [login, setLogin] = useState();
  const [name, setName] = useState();

  const getUserLogin = (e) => {
    setLogin(e.target.value);
  };

  const getUserName = (e) => {
    setName(e.target.value);
  };

  const registerHandler = () => {
    setLogin(uuidv4());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user = { name, login };
    localStorage.setItem('user', JSON.stringify(user));
    setName("");
    setLogin("");
    props.disactivate(true);
  };

  return (
    <form className="login__form" onSubmit={submitHandler}>
      <label className="label__login" htmlFor="login">
        Login
      </label>
      <input
        className="input__login"
        type="text"
        name="login"
        id="login"
        onChange={getUserLogin}
        value={login}
      />
      <label className="label__login" htmlFor="name">
        Name
      </label>
      <input
        className="input__login"
        type="text"
        name="name"
        id="name"
        onChange={getUserName}
        value={name}
      />
      <div className="buttons__container">
        <button
          className="button__login"
          type="submit"
          onSubmit={submitHandler}
        >
          Log In
        </button>
        <button
          className="button__login"
          type="button"
          onClick={registerHandler}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Login;
