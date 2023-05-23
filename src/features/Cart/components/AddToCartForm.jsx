import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null, product }) {
  const schema = yup.object({
    quantity: yup
      .number()
      .required("Please enter product quantity if you want to add it to the cart")
      .min(1, "The number of products added to the cart must be at least one")
      .max(
        product.quantity,
        "The number of products added to the cart exceeds the available quantity"
      ),
  }).required();

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setValue, watch } = form;
  const quantity = watch('quantity');

  const DecreaseQuantity = () => {
    setValue('quantity', quantity - 1);
  };

  const IncreaseQuantity = () => {
    setValue('quantity', quantity + 1);
  };

  const handleFormSubmit = handleSubmit((data) => {
    if (onSubmit) {
      onSubmit(data);
    }
  });

  return (
    <form
      className="cart mb-0 d-flex justify-content-between align-items-center"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleFormSubmit}
    >
      <div className="quantity clearfix">
        <input
          type="button"
          value="-"
          className="minus"
          onClick={DecreaseQuantity}
        />
        <input
          type="number"
          step={1}
          min={1}
          name="quantity"
          value={quantity}
          title="Qty"
          className="qty"
          readOnly
        />
        <input
          type="button"
          value="+"
          className="plus"
          onClick={IncreaseQuantity}
        />
      </div>
      <button type="submit" className="add-to-cart button button-large m-0">
        Add to cart
      </button>
    </form>
  );
}

export default AddToCartForm;
