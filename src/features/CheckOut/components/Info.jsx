import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import UpdatePhone from "./UpdatePhone";
import UpdateAddress from "./UpdateAddress";
import DeleteAddress from "./DeleteAddress";
import Payment from "./Payment";
import DeliverySchedule from "./DeliverySchedule";

function InFoCheckout() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleUpdatePhoneClickOpen = () => {
    setOpen(true);
    setSelectedItem("phone");
  };
  const handleAddNewAddressClickOpen = () => {
    setOpen(true);
    setSelectedItem("address");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAddressClick = () => {
    setOpen(true);
    setSelectedItem("deleteAddress");
  };

  return (
    <Grid container spacing={1} paddingTop={5}>
      <Grid item xs={8} padding={4} paddingTop={10}>
        <Box paddingTop={5}>
          <Paper elevation={1}>
            <Box>
              <Box display="flex" alignItems="center">
                <Box
                  paddingLeft={3}
                  paddingTop={3}
                  paddingBottom={3}
                  display="flex"
                >
                  <LooksOneIcon style={{ color: "#1abc9c" }} />
                  <Typography>Contact Number</Typography>
                </Box>
                <Box
                  ml="auto"
                  display="flex"
                  paddingRight={3}
                  paddingTop={3}
                  paddingBottom={3}
                >
                  <IconButton onClick={handleUpdatePhoneClickOpen}>
                    <AddCircleOutlineIcon style={{ color: "#1abc9c" }} />
                    <Typography style={{ color: "#1abc9c" }}>Update</Typography>
                  </IconButton>
                </Box>
              </Box>
              <Box
                paddingLeft={3}
                paddingTop={3}
                paddingBottom={3}
                display="flex"
              >
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  style={{ minWidth: "70%" }}
                  disabled
                />
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box paddingTop={5}>
          <Paper elevation={1} paddingTop={5}>
            <Box>
              <Box display="flex" alignItems="center">
                <Box
                  paddingLeft={3}
                  paddingTop={3}
                  paddingBottom={3}
                  display="flex"
                >
                  <LooksTwoIcon style={{ color: "#1abc9c" }} />
                  <Typography>Billing Address</Typography>
                </Box>
                <Box
                  ml="auto"
                  display="flex"
                  alignItems="center"
                  paddingRight={3}
                  paddingTop={3}
                  paddingBottom={3}
                >
                  <IconButton onClick={handleAddNewAddressClickOpen}>
                    <AddCircleOutlineIcon style={{ color: "#1abc9c" }} />
                    <Typography style={{ color: "#1abc9c" }}>Add</Typography>
                  </IconButton>
                </Box>
              </Box>
              <Box display="flex" paddingBottom={3} paddingLeft={3}>
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  style={{ minWidth: "70%" }}
                  disabled
                />
                <Box paddingLeft={3} paddingTop={1}>
                  <IconButton style={{ color: "#1abc9c" }} onClick={handleAddNewAddressClickOpen}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: "#ff0000" }}
                    onClick={handleDeleteAddressClick}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box paddingTop={5}>
          <Paper elevation={1} paddingTop={5}>
            <Box>
              <Box display="flex" alignItems="center">
                <Box
                  paddingLeft={3}
                  paddingTop={3}
                  paddingBottom={3}
                  display="flex"
                >
                  <Looks3Icon style={{ color: "#1abc9c" }} />
                  <Typography>Shipping Address</Typography>
                </Box>
                <Box
                  ml="auto"
                  display="flex"
                  alignItems="center"
                  paddingRight={3}
                  paddingTop={3}
                  paddingBottom={3}
                >
                  <IconButton onClick={handleAddNewAddressClickOpen}>
                    <AddCircleOutlineIcon style={{ color: "#1abc9c" }} />
                    <Typography style={{ color: "#1abc9c" }}>Add</Typography>
                  </IconButton>
                </Box>
              </Box>
              <Box display="flex" paddingBottom={3} paddingLeft={3}>
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  style={{ minWidth: "70%" }}
                  disabled
                />
                <Box paddingLeft={3} paddingTop={1}>
                  <IconButton style={{ color: "#1abc9c" }} onClick={handleAddNewAddressClickOpen}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: "#ff0000" }}
                    onClick={handleDeleteAddressClick}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box paddingTop={5}>
          <Paper elevation={1} paddingTop={5}>
            <Box>
              <Box display="flex" alignItems="center">
                <Box
                  paddingLeft={3}
                  paddingTop={3}
                  paddingBottom={3}
                  display="flex"
                >
                  <Looks4Icon style={{ color: "#1abc9c" }} />
                  <Typography>Delivery Schedule</Typography>
                </Box>
              </Box>
              <Box display="flex" paddingBottom={3} paddingLeft={3}>
                <DeliverySchedule/>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={4} padding={4}>
        <Box paddingTop={2}>
          <div className="table-responsive">
            <table className="table cart">
              <tbody>
                <tr className="cart_item">
                  <td className="border-top-0 cart-product-name">
                    <h4>Cart Totals</h4>
                  </td>
                  <td className="border-top-0 cart-product-name">
                    {/* <span className="amount">{total_price()}</span> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Box>
        <Payment />
        <Box textAlign="center"
        display="flex"
        justifyContent="center"
        paddingTop={3}>
        <Button className="button button-3d float-end">Place Order</Button>
        </Box>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {selectedItem === "phone" && <UpdatePhone />}
          {selectedItem === "address" && <UpdateAddress />}
          {selectedItem === "deleteAddress" && <DeleteAddress />}
          {/* ... */}
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default InFoCheckout;
