import jwtDecode from "jwt-decode"; // You'll need a library like 'jwt-decode'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

// Function to check if the token is valid
// Check if the user is authenticated by checking the presence of a valid JWT token
export const isTokenValid = () => {
    const token = localStorage.getItem("token");

    if (!token) return false; // Token doesn't exist
    try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);

        // Check if the token is expired
        const currentTime = Date.now() / 1000; // Convert to seconds
        return decodedToken.exp > currentTime;
    } catch (error) {
        // Token is invalid or couldn't be decoded
        return false;
    }
};

export const isPasswordValid = (obj) => {
    const { password, confirmPassword } = obj;
    console.log(password, confirmPassword);

    if (password !== confirmPassword) {
        return {
            notMatch: true,
            isValid: false,
            errorMessage: "Passwords don't match.",
        };
    }

    if (password.length < 8) {
        return {
            isValid: false,
            errorMessage: "Password must be at least 8 characters long.",
        };
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        return {
            isValid: false,
            errorMessage:
                "Password must contain both uppercase and lowercase letters.",
        };
    }

    if (!/\d/.test(password)) {
        return {
            isValid: false,
            errorMessage: "Password must contain at least one digit.",
        };
    }

    if (!/[!@#$?]/.test(password)) {
        return {
            isValid: false,
            errorMessage:
                "Password must contain at least one special character (!, @, #, ?, $).",
        };
    }
    return { isValid: true, errorMessage: "" };
};

export const areAllPropertiesEmpty = (obj) => {
    return Object.values(obj).every((value) => value === "");
};

export const logoutUser = () => {

    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.href = '/'

}


export const userIsAuthenticated = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    return loggedInUser
}

export const toProfile = () => {
    window.location.href = '/profile'
    // window.location.href = '/'
}
