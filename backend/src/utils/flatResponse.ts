const flatResponseArray = (response: any) => {
  const { meals } = response;
  const fixedResponse = meals.map((meal: any) => {
    const flattenedMeal = meal.toJSON();
    flattenedMeal.strCategory = meal.strCategory ? meal.strCategory.strCategory : null;
    flattenedMeal.strArea = meal.strArea ? meal.strArea.strArea : null;
    flattenedMeal.strIngredient1 = meal.strIngredient1 ? meal.strIngredient1.strIngredient : null;
    flattenedMeal.strIngredient2 = meal.strIngredient2 ? meal.strIngredient2.strIngredient : null;
    flattenedMeal.strIngredient3 = meal.strIngredient3 ? meal.strIngredient3.strIngredient : null;
    return flattenedMeal;
  });
  return { meals: fixedResponse };
};

const flatResponseObject = (response: any) => {
  const { meals } = response;

  const flattenedMeal = meals.toJSON();
  flattenedMeal.strCategory = meals.strCategory ? meals.strCategory.strCategory : null;
  flattenedMeal.strArea = meals.strArea ? meals.strArea.strArea : null;
  flattenedMeal.strIngredient1 = meals.strIngredient1 ? meals.strIngredient1.strIngredient : null;
  flattenedMeal.strIngredient2 = meals.strIngredient2 ? meals.strIngredient2.strIngredient : null;
  flattenedMeal.strIngredient3 = meals.strIngredient3 ? meals.strIngredient3.strIngredient : null;

  return { meals: flattenedMeal };
};

export {
  flatResponseArray,
  flatResponseObject,
};
