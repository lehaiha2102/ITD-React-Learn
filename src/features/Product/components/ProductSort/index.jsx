import { Box, Button, Slider, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function formatCurrency(value) {
    const formattedValue = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value);

    return formattedValue;
}

function valuetext(value) {
    return formatCurrency(value);
}
ProductSort.propTypes = {
    categories: PropTypes.array,
    manufacturers: PropTypes.array,
};

export default function ProductSort({ categories, manufacturers, onFilterChange }) {
    const [filterValues, setFilterValues] = useState({
      selectedCategories: [],
      selectedManufacturers: [],
      priceRange: [0, 40000000],
    });
  
    const handleFilterClick = () => {
        onFilterChange(filterValues);
      };
  
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
  
      setFilterValues((prevValues) => ({
        ...prevValues,
        [name]: checked
          ? [...prevValues[name], event.target.value]
          : prevValues[name].filter((value) => value !== event.target.value),
      }));
    };
  
    const handleSliderChange = (event, newValue) => {
      setFilterValues((prevValues) => ({
        ...prevValues,
        priceRange: newValue,
      }));
    };
  
    return (
      <Box>
        <h2>Sort by</h2>
        <Typography>Categories</Typography>
        <FormGroup>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  name="selectedCategories"
                  value={category}
                  checked={filterValues.selectedCategories.includes(category)}
                  onChange={handleCheckboxChange}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>
        <Typography>Manufacturers</Typography>
        <FormGroup>
          {manufacturers.map((manufacturer) => (
            <FormControlLabel
              key={manufacturer}
              control={
                <Checkbox
                  name="selectedManufacturers"
                  value={manufacturer}
                  checked={filterValues.selectedManufacturers.includes(manufacturer)}
                  onChange={handleCheckboxChange}
                />
              }
              label={manufacturer}
            />
          ))}
        </FormGroup>
        <h3>Price</h3>
        <br />
        <Slider
          value={filterValues.priceRange}
          onChange={handleSliderChange}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          step={1000000}
          marks
          min={0}
          max={100000000}
        />
        <Box display="flex" justifyContent="center" textAlign="center">
          <Button variant="outlined" onClick={handleFilterClick}>
            Filter
          </Button>
        </Box>
      </Box>
    );
  }
  