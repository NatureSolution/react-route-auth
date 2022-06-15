import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <h1>Please Register Here</h1>
      <div className="app-signin">
        <button>Google </button>
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

export default Register;
