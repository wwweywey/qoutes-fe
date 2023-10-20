import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { logoutUser, toProfile } from "../utils/helpers";

import Avatar from "../components/Avatar";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = ({ isAuthenticated }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showProfile, setShowProfile] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setShowProfile(Boolean(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <div className="navBar">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 className="Logo">/ETC.</h1>
      </Link>

      <ul>
        {showProfile ? (
          <>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={toProfile}>Profile</MenuItem>
              <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Log in
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
