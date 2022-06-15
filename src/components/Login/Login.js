import React from "react";
import useFirebase from "../../hooks/useFirtebase";

const Login = () => {
  const { user, signInWithGoogle } = useFirebase();

  return (
    <div className="conatiner">
      <h1>Please Login</h1>
      <div className="app-signin">
        <button onClick={signInWithGoogle}>Google </button>
        <button>Facebook </button>
        <button>Github </button>
      </div>
      <form className="form-container">
        <input type="text" name="" id="" placeholder="Name" /> <br />
        <input type="email" name="" id="" placeholder="Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
      </form>
    </div>
  );
};

export default Login;
