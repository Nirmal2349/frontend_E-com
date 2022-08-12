import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const sendLoginRequest = async (userName, password) => {
  console.log(userName);
  console.log(password);
  const body = {
    userName,
    password,
  };
  console.log(body);
  const response = await fetch("/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // body: JSON.stringify(body), // body data type must match "Content-Type" header
  });
  console.log(await response.json());
};
export function Loginup() {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  return (
    <>
      <div className="login__form">
        <input
          type="email"
          name="email"
          id="emailAddress"
          className="form-control "
          aria-describedby="inputGroupPrepend"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />
        <input
          type="password"
          className="form-control"
          id="password"
          aria-describedby="inputGroupPrepend"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          id="submit"
          className="btn btn-outline-primary w-100"
          onClick={() => {
            sendLoginRequest(userName, password);
          }}
        >
          login
        </button>
        <div>
          forgetpassword
          <NavLink activeclassName="active" className="link" to="/forgetpassword">
            ?
          </NavLink>
        </div>
        <NavLink activeclassName="active" className="link" to="/signup">
          signup
        </NavLink>
      </div>
    </>
  );
}
