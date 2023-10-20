import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Snackbar } from "@mui/material";

import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";

import "./login.scss";

import { loginUserRequest } from "../../services/loginService";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const res = await loginUserRequest({ username, password });

    if (res) {
      window.location.href = "/";
    }
  };
  return (
    <>
      <h1>LOGIN TO YOUR ACCOUNT</h1>
      <div className="formContainer">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-11221root": { m: 2, width: 500, maxWidth: "100%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <div>
            <TextField
              type="text"
              name="username"
              id="username"
              label="Username"
              inputProps={{
                autoComplete: "off-off",
              }}
              required
              fullWidth
              inputRef={usernameRef}
            />
          </div>
          <div>
            <TextField
              type="password"
              name="password"
              id="password"
              label="Password"
              fullWidth
              inputProps={{
                autoComplete: "off-off", // Turn off autocomplete
              }}
              required
              inputRef={passwordRef}
            />
          </div>
          <p>Forgot password?</p>

          <Button type="submit" variant="contained">
            Log in
          </Button>
          <br />
          <p>
            not a member? <Link to="/signup">Sign-up now</Link>
          </p>
        </Box>
      </div>
    </>
  );
};

export default Login;
