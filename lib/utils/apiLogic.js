const axios = require('axios');
// IOCE:

// I: response from api (using form data to get all drinks that include first ingredient), form data
// O: array of drinks to put in state that match query
// C:
// E:

// filter down data by if it includes all the other ingredients too
// and if it is alcoholic/non-alcoholic if that option was chosen
// return filtered data

async function advancedSearchFilter(formInputs) {
  // lowercase both ingredient and form input value before comparing
  // for each result, do api lookup on its id and check strIngredient[1-15] for each non '' ingredient in formInputs
  // filter firstIngredientResults by all cocktails that pass the test with all ingredients
  // how to do all this asynchronously without messing it up??

  //map with async/await

  let firstIngredientResults = [];

  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${formInputs.ingredient1}`)
    .then((data) => {
      firstIngredientResults = data;
      console.log('firstIngredientResults: ', firstIngredientResults);
    })
    .catch((err) => console.error(err));


  // const fullDrinkData = await Promise.all(firstIngredientResults.map(async (drink) => {
  //   const data = await axios.get(
  //     `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
  //     .catch((err) => console.error(err));
  //   console.log(data);
  // }));


}

// async function allDrinksCheckIngredient() {

// };

module.exports = {
  advancedSearchFilter,
};
