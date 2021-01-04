const axios = require('axios');
// IOCE:

// I: response from api (using form data to get all drinks that include first ingredient), form data
// O: array of drinks to put in state that match query
// C:
// E:

// filter down data by if it includes all the other ingredients too
// and if it is alcoholic/non-alcoholic if that option was chosen
// return filtered data

async function getAllDrinkData(basicResults) {
  const allDrinkData = await Promise.all(basicResults.map(async (drink) => {
    const drinkDetails = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`,
    )
      .then((details) => details.data.drinks[0])
      .catch((err) => console.error(err));
    console.log('data for each drink: ', drinkDetails);
    return drinkDetails;
  }));
  return allDrinkData;
}

async function advancedSearchFilter(formInputs) {
  // lowercase both ingredient and form input value before comparing
  // for each result, do api lookup on its id
  // and check strIngredient[1-15] for each non '' ingredient in formInputs
  // (put strIngredient1-15 into array and filter by non-null values then iterate through those)
  // filter firstIngredientResults by all cocktails that pass the test with all ingredients

  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${formInputs.ingredient1}`)
    .then((firstIngredientResults) => {
      getAllDrinkData(firstIngredientResults.data.drinks)
        .then((allData) => {
          console.log('alldata: ', allData);
        });
    })
    .catch((err) => console.error(err));
}

module.exports = {
  advancedSearchFilter,
};
