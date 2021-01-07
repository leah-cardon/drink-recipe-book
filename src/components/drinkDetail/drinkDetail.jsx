import React from 'react';
import PropTypes from 'prop-types';

function DrinkDetail({ drink, reset }) {
  const measurements = [];
  const ingredients = [];

  for (let i = 1; i <= 15; i += 1) {
    if (drink[`strMeasure${i}`]) {
      measurements.push(<div>{drink[`strMeasure${i}`]}</div>);
    }
  }

  for (let i = 1; i <= 15; i += 1) {
    if (drink[`strIngredient${i}`]) {
      ingredients.push(<div>{drink[`strIngredient${i}`]}</div>);
    }
  }

  return (
    <div
      className="drinkDetail"
      onClick={() => reset(false)}
    >
      <div className="largerPicContainer">
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="thumbnail"
        />
      </div>
      <div>
        <h1>{drink.strDrink}</h1>
        <div className="twoColumns">
          <div>
            {measurements}
          </div>
          <div>
            {ingredients}
          </div>
        </div>
        <div>
          {drink.strInstructions}
        </div>
      </div>
    </div>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.shape.isRequired,
  reset: PropTypes.func.isRequired,
};

export default DrinkDetail;
