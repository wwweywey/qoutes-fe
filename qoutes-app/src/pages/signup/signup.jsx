import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./signup.scss";

import { isPasswordValid, areAllPropertiesEmpty } from "../../utils/helpers";

const defaultObject = {
  username: "",
  password: "",
  confirmPassword: "",
};

const apiUrl = import.meta.env.VITE_API_URL;

const SignUp = () => {
  const [formValues, setFormValues] = useState(defaultObject);
  const [errorMessages, setErrorMessages] = useState(defaultObject);
  const [usernameIsTaken, setUsernameIsTaken] = useState(false);
  const [showSuccesMessage, setShowSuccesMessage] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const newValues = { [event.target.name]: event.target.value };
    setFormValues((prevValues) => {
      return { ...prevValues, ...newValues };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validatePassword = isPasswordValid(formValues);
    const errors = {
      ...errorMessages,
      username: formValues.username === "" ? "Please enter a username!" : "",
      password: validatePassword.errorMessage,
    };
    setErrorMessages(errors);

    const noErrors = areAllPropertiesEmpty(errors);
    registerUser(noErrors);
  };

  const registerUserRequest = async (userData) => {
    const api = `${apiUrl}/api/v1/register`;
    console.log(userData);
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      return true;
    } catch (error) {
      console.error("Error registration:", error);
      return false;
    }
  };
  const registerUser = async (noErrors) => {
    if (noErrors) {
      const registrationSuccessful = await registerUserRequest(formValues);
      if (registrationSuccessful) {
        setShowSuccesMessage(true);
        setFormValues(defaultObject);
        setTimeout(() => {
          navigate("/login");
        }, 400);
      }
    }
  };

  return (
    <>
      <h1>SIGN UP TODAY!</h1>
      {showSuccesMessage && (
        <div className="success-confirmation">
          <h2>Successfully registered</h2>
        </div>
      )}
      <div className="formContainer">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: 500, maxWidth: "100%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              type="text"
              name="username"
              id="username"
              label="Username"
              fullWidth
              inputProps={{
                autoComplete: "off-off",
              }}
              value={formValues.username}
              error={errorMessages.username || usernameIsTaken}
              helperText={
                usernameIsTaken ? "Username is taken!" : errorMessages.username
              }
              // helperText={errorMessages.username}
              onChange={handleInputChange}
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
                autoComplete: "off-off",
              }}
              value={formValues.password}
              error={Boolean(errorMessages.password)}
              helperText={errorMessages.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextField
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              label="Confirm Password"
              fullWidth
              inputProps={{
                autoComplete: "off-off", // Turn off autocomplete
              }}
              value={formValues.confirmPassword}
              error={errorMessages.password !== ""} // Set the error prop based on the condition
              onChange={handleInputChange}
            />
          </div>

          <p className="errorMessage">{errorMessages.confirmPassword}</p>
          <label className="user-agrreement">
            <input type="checkbox" />I agree to the terms and conditions as set
            out by the user agreement.
          </label>
          <br />

          <button type="submit" className="submitButton">
            Register
          </button>
          <p>
            Already a member? <Link to="/login">Log-in now</Link>
          </p>
        </Box>
      </div>
    </>
  );
};

export default SignUp;
