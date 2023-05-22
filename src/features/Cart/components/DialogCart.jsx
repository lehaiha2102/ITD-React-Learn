import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function DialogCart() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="top-cart" className="header-misc-icon d-none d-sm-block">
      <IconButton id="top-cart-trigger" onClick={handleOpen}>
        <ShoppingCartIcon />
        <span className="top-cart-number">5</span>
      </IconButton>
      <div className="top-cart-content">
        <div className="top-cart-title">
          <h4>Shopping Cart</h4>
        </div>
        <Menu
          className="top-cart-items"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "top-cart-trigger",
          }}
        >
          <MenuItem className="top-cart-item">
            <div className="top-cart-item-image">
              <a href="#">
                <img
                  src="images/shop/small/1.jpg"
                  alt="Blue Round-Neck Tshirt"
                />
              </a>
            </div>
            <div className="top-cart-item-desc">
              <div className="top-cart-item-desc-title">
                <a href="#">Blue Round-Neck Tshirt with a Button</a>
                <span className="top-cart-item-price d-block">$19.99</span>
              </div>
              <div className="top-cart-item-quantity">x 2</div>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default DialogCart;
