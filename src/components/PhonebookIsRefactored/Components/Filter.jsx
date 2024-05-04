import React from "react";
import css from "./Filter.module.css"
import PropTypes from 'prop-types'


export function Filter({ valueFilter }) 
{
  const handleFilterrr = (e) => {let inputFilter = e.target.value;
                                 valueFilter(inputFilter)};

  return (
    <label className={css.filter}>
      Find contacts by name:<br />
      <input type="text" onChange={handleFilterrr} />
    </label>
  );
}

Filter.propTypes = {valueFilter: PropTypes.func.isRequired}