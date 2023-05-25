import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../../public/morales.svg";
import productApi from "../../../api/productApi";
import Login from "../../../features/Auth/Login/Login";
import Register from "../../../features/Auth/Register";
import { logout } from "../../../features/Auth/userSlice";
import DialogCart from "../../../features/Cart/components/DialogCart";
import SearchInput from "../../form-controls/SearchInput";

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};
function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
    setAnchorEl(null);
  };

  const handleSearch = (keyword) => {
    navigate(`/products/search/${keyword}`)
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{
          overflow: "auto",
        }}
      >
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center" minHeight="50px" minWidth={600}>
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center" minHeight="50px" minWidth={600}>
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
      <header id="header" className="full-header header-size-md">
        <div id="header-wrap">
          <div className="container">
            <div className="header-row justify-content-lg-between">
              <div id="logo" className="me-lg-4">
                <Link to="/" className="standard-logo">
                  <img src={Logo} alt="Canvas Logo" />
                </Link>
                <Link to="/" className="retina-logo">
                  <img src={Logo} alt="Canvas Logo" />
                </Link>
              </div>
              <div className="header-misc">
                <div id="top-account">
                  {!isLoggedIn && (
                    <>
                      <Button
                        color="success"
                        style={{
                          border: "none",
                        }}
                        variant="outlined"
                        onClick={handleClickOpen}
                      >
                        <i
                          className="icon-line2-user me-1 position-relative"
                          style={{ top: 1 }}
                        />
                        <span className="d-none d-sm-inline-block font-primary fw-medium">
                          Login
                        </span>
                      </Button>
                    </>
                  )}
                  {isLoggedIn && (
                    <>
                      <IconButton color="inherit" onClick={handleClickMenu}>
                        <AccountCircleIcon />
                      </IconButton>
                    </>
                  )}
                </div>
                <DialogCart />
              </div>
              <div id="primary-menu-trigger">
                <svg className="svg-trigger" viewBox="0 0 100 100">
                  <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                  <path d="m 30,50 h 40" />
                  <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                </svg>
              </div>
              <nav className="primary-menu with-arrows me-lg-auto">
                <ul className="menu-container">
                  <li className="menu-item current">
                    <div
                      id="top-search"
                      className="header-misc-icon search-container"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SearchInput
                        id="top-search-trigger"
                        onSearch={handleSearch}
                      />
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-wrap-clone" />
      </header>
    </div>
  );
}

export default Header;
