import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CartIcons from "./CartIcons";
import { Link, useNavigate } from "react-router-dom";

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = JSON.parse(localStorage.getItem("auth"));

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
    handleMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {user
        ? [
            <MenuItem key="profile" onClick={handleMenuClose}>
              <Link
                to={`/profile/${user.user.uniqueId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Profile
              </Link>
            </MenuItem>,
            <MenuItem key="orders" onClick={handleMenuClose}>
              <Link
                to="/My-order"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                My Orders
              </Link>
            </MenuItem>,
            <MenuItem key="logout" onClick={handleLogout}>
              Logout
            </MenuItem>,
          ]
        : [
            <MenuItem key="login" onClick={handleMenuClose}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </MenuItem>,
            <MenuItem key="register" onClick={handleMenuClose}>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Register
              </Link>
            </MenuItem>,
          ]}
    </Menu>
  );

  return (
    <div style={{ position: "sticky", top: "0px", zIndex: "1" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link
                className="text-light text-decoration-none"
                to={"/homepage"}
              >
                Nova
              </Link>
            </Typography>

            <Link to={"/cart"}>
              <CartIcons />
            </Link>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {user ? (
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  {user.user.name.split(" ")[0]}
                </IconButton>
              ) : (
                <>
                  <Button color="inherit">
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Login
                    </Link>
                  </Button>
                  <Button color="inherit">
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Register
                    </Link>
                  </Button>
                </>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {user ? (
                  <h5 style={{ position: "relative", top: "5px" }}>
                    {user.user.name.charAt(0).toUpperCase()}
                  </h5>
                ) : (
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
    </div>
  );
}
