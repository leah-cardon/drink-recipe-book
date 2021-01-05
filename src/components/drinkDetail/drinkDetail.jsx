import React from 'react';
import PropTypes from 'prop-types';

function DrinkDetail({ drink, reset }) {
  return (
    <div
      onClick={() => reset(false)}
    >
      I AM A DRINK DETAIL
    </div>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.shape.isRequired,
};

export default DrinkDetail;
