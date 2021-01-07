const axios = require('axios');

// instead of the basic results you get from this API when searching by ingredient,
// this helper takes those results and makes an API request to each drink and
// returns all data including ingredients.
async function getAllDrinkData(basicResults) {
  const allDrinkData = await Promise.all(basicResults.map(async (drink) => {
    const drinkDetails = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`,
    )
      .then((details) => details.data.drinks[0])
      .catch((err) => console.error(err));
    return drinkDetails;
  }));
  return allDrinkData;
}

const ingredientsChecker = (inputs, details) => inputs.every((item) => details.includes(item));

async function advancedSearchFilter(formInputs) {
  const inputIngredients = [];
  for (let i = 1; i <= 5; i += 1) {
    if (formInputs[`ingredient${i}`]) {
      inputIngredients.push(formInputs[`ingredient${i}`].toLowerCase());
    }
  }
  // console.log('inputIngredients', inputIngredients);

  const filtered = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${formInputs.ingredient1}`)
    .then((firstIngredientResults) => getAllDrinkData(firstIngredientResults.data.drinks)
      .then((allData) => {
        const filteredData = allData.filter((drink) => {
          const ingredients = [];
          for (let i = 1; i <= 15; i += 1) {
            if (drink[`strIngredient${i}`]) {
              ingredients.push(drink[`strIngredient${i}`].toLowerCase());
            }
          }
          // console.log('ingredients: ', ingredients);
          return ingredientsChecker(inputIngredients, ingredients);
        });
        return filteredData;
      })
      .catch((err) => console.error(err)))
    .catch((err) => console.error(err));

  return filtered;
}

module.exports = {
  advancedSearchFilter,
};
