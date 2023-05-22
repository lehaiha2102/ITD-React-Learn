import { Button, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Logo from "../../../../public/morales.svg";
import Register from "../../../features/Auth/Register";
import Login from "../../../features/Auth/Login/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DialogCart from "../../../features/Cart/components/DialogCart";

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
      {/* Header
		============================================= */}
      <header id="header" className="full-header header-size-md">
        <div id="header-wrap">
          <div className="container">
            <div className="header-row justify-content-lg-between">
              {/* Logo
						============================================= */}
              <div id="logo" className="me-lg-4">
                <a href="demo-shop.html" className="standard-logo">
                  <img src={Logo} alt="Canvas Logo" />
                </a>
                <a href="demo-shop.html" className="retina-logo">
                  <img src={Logo} alt="Canvas Logo" />
                </a>
              </div>
              {/* #logo end */}
              <div className="header-misc">
                {/* Top Search
							============================================= */}
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
                {/* #top-search end */}
                {/* Top Cart
							============================================= */}
                <DialogCart/>
                {/* Top Search
							============================================= */}
                <div id="top-search" className="header-misc-icon">
                  <a href="#" id="top-search-trigger">
                    <i className="icon-line-search" />
                    <i className="icon-line-cross" />
                  </a>
                </div>
                {/* #top-search end */}
              </div>
              <div id="primary-menu-trigger">
                <svg className="svg-trigger" viewBox="0 0 100 100">
                  <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                  <path d="m 30,50 h 40" />
                  <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                </svg>
              </div>
              {/* Primary Navigation
						============================================= */}
              <nav className="primary-menu with-arrows me-lg-auto">
                <ul className="menu-container">
                  <li className="menu-item current">
                    <a className="menu-link" href="#">
                      <div>Home</div>
                    </a>
                  </li>
                  <li className="menu-item mega-menu">
                    <a className="menu-link" href="#">
                      <div>Men</div>
                    </a>
                    <div className="mega-menu-content mega-menu-style-2">
                      <div className="container">
                        <div className="row">
                          <ul className="sub-menu-container mega-menu-column border-start-0 col-lg-3">
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Footwear</div>
                              </a>
                              <ul className="sub-menu-container">
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Casual Shoes</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Formal Shoes</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sports shoes</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Flip Flops</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Slippers</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sandals</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>
                                      Show all{" "}
                                      <i className="icon-angle-right" />
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Clothing</div>
                              </a>
                              <ul className="sub-menu-container">
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Casual Shirts</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>T-Shirts</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Collared Tees</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Pants / Trousers</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>
                                      Show all{" "}
                                      <i className="icon-angle-right" />
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <ul className="sub-menu-container mega-menu-column border-start-0 col-lg-3">
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Sportswear</div>
                              </a>
                              <ul className="sub-menu-container">
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sports Casual Shirts</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sports T-Shirts</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sports Collared Tees</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sports Shoes</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Jackets</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Swimwears</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>
                                      Show all{" "}
                                      <i className="icon-angle-right" />
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Innerwears</div>
                              </a>
                              <ul className="sub-menu-container">
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Boxers</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Vests</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sleepwears</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>
                                      Show all{" "}
                                      <i className="icon-angle-right" />
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <ul className="sub-menu-container mega-menu-column border-start-0 col-lg-3">
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Innerwears</div>
                              </a>
                              <ul className="sub-menu-container">
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Boxers</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Vests</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sleepwears</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>
                                      Show all{" "}
                                      <i className="icon-angle-right" />
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Sunglasses</div>
                              </a>
                            </li>
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Watches</div>
                              </a>
                            </li>
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Bags</div>
                              </a>
                            </li>
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Headphones</div>
                              </a>
                            </li>
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Accessories</div>
                              </a>
                            </li>
                          </ul>
                          <ul className="sub-menu-container mega-menu-column col-lg-3 border-start-0">
                            <li className="card p-0 bg-transparent border-0">
                              {/* <img className="card-img-top" src="demos/shop/images/menu-image.jpg" alt="image cap" /> */}
                              <a
                                href="#"
                                className="btn btn-link text-start fw-medium ps-0 bg-transparent"
                              >
                                <u>Editor's Pick</u>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item mega-menu mega-menu-small">
                    <a className="menu-link" href="#">
                      <div>Women</div>
                    </a>
                    <div className="mega-menu-content mega-menu-style-2">
                      <div className="container">
                        <div className="row">
                          <ul className="sub-menu-container mega-menu-column col-lg-6">
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Footwear</div>
                              </a>
                              <ul className="sub-menu-container">
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Casual Shoes</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Formal Shoes</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sports shoes</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Flip Flops</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Slippers</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Sandals</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Party Shoes</div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <ul className="sub-menu-container mega-menu-column col-lg-6">
                            <li className="menu-item mega-menu-title">
                              <a className="menu-link" href="#">
                                <div>Clothing</div>
                              </a>
                              <ul className="sub-menu-container">
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Casual Shirts</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>T-Shirts</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Collared Tees</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Pants / Trousers</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Ethnic Wear</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Jeans</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a className="menu-link" href="#">
                                    <div>Swimwear</div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      <div>Accessories</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      <div>Blog</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      <div>Sales</div>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* #primary-menu end */}
              <form
                className="top-search-form"
                action="search.html"
                method="get"
              >
                <input
                  type="text"
                  name="q"
                  className="form-control"
                  defaultValue
                  placeholder="Type & Hit Enter.."
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="header-wrap-clone" />
      </header>
      {/* #header end */}
    </div>
  );
}

export default Header;
