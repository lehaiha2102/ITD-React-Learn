import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartItemCountSelector, cartTotalSelector } from "../selectors";

function DialogCart() {
  const [cartItems, setCartItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const cartItemsCount = useSelector(cartItemCountSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem("cart");
    if (cartItemsFromStorage) {
      setCartItems(JSON.parse(cartItemsFromStorage));
    }
  }, []);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleAddToCart = (item) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.slug === item.slug
    );

    if (existingCartItemIndex !== -1) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Sản phẩm chưa tồn tại trong giỏ hàng
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Giới hạn số lượng hiển thị tối đa là 5 sản phẩm
  const displayedCartItems = cartItems.slice(0, 5);

  return (
    <div id="top-cart" className="header-misc-icon d-none d-sm-block">
      <IconButton id="top-cart-trigger" onClick={handleOpen}>
        <ShoppingCartIcon />
        <span className="top-cart-number">{cartItemsCount}</span>
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
          {displayedCartItems.map((item) => (
            <MenuItem
              key={item.slug}
              className="top-cart-item"
              onClick={() => handleAddToCart(item)}
            >
              <div className="top-cart-item-image">
                <a href="#">
                  <img
                    src={`http://localhost:8000/images/products/${JSON.parse(
                      item.product.images
                    )[0]}`}
                    alt={item.product.name}
                  />
                </a>
              </div>
              <div className="top-cart-item-desc">
                <div className="top-cart-item-desc-title">
                  <a href="#">{item.product.name}</a>
                  <span className="top-cart-item-price d-block">
                    {item.product.price}
                  </span>
                </div>
                <div className="top-cart-item-quantity">x {item.quantity}</div>
              </div>
            </MenuItem>
          ))}
          <div className="top-cart-action">
            <span className="top-checkout-price">{cartTotal}</span>
            <Button
              className="button button-3d button-small m-0"
              onClick={handleCartClick}
            >
              View Cart
            </Button>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default DialogCart;
