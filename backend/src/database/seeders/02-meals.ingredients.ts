/* eslint-disable max-len */
/* eslint-disable max-lines */
import { QueryInterface } from 'sequelize';

export default {

  // eslint-disable-next-line max-lines-per-function
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'meals_ingredients',
      [
        {
          strIngredient: 'Chicken',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Salmon',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Beef',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pork',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Avocado',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Apple Cider Vinegar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Asparagus',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Aubergine',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Baby Plum Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Bacon',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Baking Powder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Balsamic Vinegar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Basil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Basil Leaves',
          strDescription: 'n',
          strType: null,
        },
        {
          strIngredient: 'Basmati Rice',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Bay Leaf',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Bay Leaves',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Beef Brisket',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Beef Fillet',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Beef Gravy',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Beef Stock',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Bicarbonate Of Soda',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Biryani Masala',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Black Pepper',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Black Treacle',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Borlotti Beans',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Bowtie Pasta',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Bramley Apples',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Brandy',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Bread',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Breadcrumbs',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Broccoli',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Brown Lentils',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Brown Rice',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Brown Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Butter',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cacao',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cajun',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Canned Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cannellini Beans',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cardamom',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Carrots',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cashew Nuts',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cashews',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Caster Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cayenne Pepper',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Celeriac',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Celery',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Celery Salt',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Challots',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Charlotte Potatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cheddar Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cheese Curds',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cherry Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chestnut Mushroom',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chicken Breast',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chicken Breasts',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chicken Legs',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chicken Stock',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chicken Thighs',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chickpeas',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chili Powder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chilled Butter',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chilli',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chilli Powder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chinese Broccoli',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chocolate Chips',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chopped Onion',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chopped Parsley',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chopped Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chorizo',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Christmas Pudding',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cilantro',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cinnamon',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cinnamon Stick',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cloves',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Coco Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cocoa',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Coconut Cream',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Coconut Milk',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Colby Jack Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cold Water',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Condensed Milk',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Coriander',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Coriander Leaves',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Coriander Seeds',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Corn Tortillas',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cornstarch',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cream',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Creme Fraiche',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cubed Feta Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cucumber',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cumin',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cumin Seeds',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Curry Powder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dark Brown Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dark Soft Brown Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dark Soy Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Demerara Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Diced Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Digestive Biscuits',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dill',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Doner Meat',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Double Cream',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dried Oregano',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dry White Wine',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Egg Plants',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Egg Rolls',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Egg White',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Egg Yolks',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Eggs',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Enchilada Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'English Mustard',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Extra Virgin Olive Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fajita Seasoning',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Farfalle',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fennel Bulb',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fennel Seeds',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fenugreek',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Feta',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fish Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Flaked Almonds',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Flax Eggs',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Flour',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Flour Tortilla',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Floury Potatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Free-range Egg, Beaten',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Free-range Eggs, Beaten',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'French Lentils',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fresh Basil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fresh Thyme',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Freshly Chopped Parsley',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fries',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Full Fat Yogurt',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Garam Masala',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Garlic',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Garlic Clove',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Garlic Powder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Garlic Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ghee',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ginger',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ginger Cordial',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ginger Garlic Paste',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ginger Paste',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Golden Syrup',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Gouda Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Granulated Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Grape Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Greek Yogurt',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Green Beans',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Green Chilli',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Green Olives',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Green Red Lentils',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Green Salsa',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ground Almonds',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ground Cumin',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ground Ginger',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Gruy\u00e8re',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Hard Taco Shells',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Harissa Spice',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Heavy Cream',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Honey',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Horseradish',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Hot Beef Stock',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Hotsauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ice Cream',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Italian Fennel Sausages',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Italian Seasoning',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Jalapeno',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Jasmine Rice',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Jerusalem Artichokes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Kale',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Khus Khus',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'King Prawns',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Kosher Salt',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lamb',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lamb Loin Chops',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lamb Mince',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lasagne Sheets',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lean Minced Beef',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Leek',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lemon',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lemon Juice',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lemon Zest',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lemons',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lettuce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lime',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Little Gem Lettuce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Macaroni',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mackerel',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Madras Paste',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Marjoram',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Massaman Curry Paste',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Medjool Dates',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Meringue Nests',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Milk',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Minced Garlic',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Miniature Marshmallows',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mint',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Monterey Jack Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mozzarella Balls',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Muscovado Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mushrooms',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mustard',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mustard Powder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mustard Seeds',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Nutmeg',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Olive Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Onion Salt',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Onions',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Orange',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Orange Zest',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Oregano',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Oyster Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Paprika',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Parma Ham',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Parmesan',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Parmesan Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Parmigiano-reggiano',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Parsley',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Peanut Butter',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Peanut Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Peanuts',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Peas',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pecorino',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Penne Rigate',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pepper',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pine Nuts',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pitted Black Olives',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Plain Chocolate',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Plain Flour',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Plum Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Potato Starch',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Potatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Prawns',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Puff Pastry',
          strDescription: null,
          strType: 'Pastry',
        },
        {
          strIngredient: 'Raspberry Jam',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Raw King Prawns',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Chile Flakes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Chilli',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Chilli Powder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Onions',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Pepper',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Pepper Flakes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Wine',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Refried Beans',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Rice',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Rice Noodles',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Rice Stick Noodles',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Rice Vermicelli',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Rigatoni',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Rocket',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Rolled Oats',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Saffron',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sage',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sake',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Salsa',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Salt',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Salted Butter',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sausages',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sea Salt',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Self-raising Flour',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Semi-skimmed Milk',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sesame Seed',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Shallots',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Shredded Mexican Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Shredded Monterey Jack Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Small Potatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Smoked Paprika',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Smoky Paprika',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sour Cream',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Soy Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Soya Milk',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Spaghetti',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Spinach',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Spring Onions',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Squash',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Stir-fry Vegetables',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Strawberries',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sultanas',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sunflower Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tamarind Ball',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tamarind Paste',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Thai Fish Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Thai Green Curry Paste',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Thai Red Curry Paste',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Thyme',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tomato Ketchup',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tomato Puree',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Toor Dal',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tuna',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Turmeric',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Turmeric Powder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Turnips',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vanilla',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vanilla Extract',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Veal',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vegan Butter',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vegetable Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vegetable Stock',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vegetable Stock Cube',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vinaigrette Dressing',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vine Leaves',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vinegar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Water',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'White Chocolate Chips',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'White Fish',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'White Fish Fillets',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'White Vinegar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'White Wine',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Whole Milk',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Whole Wheat',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Wholegrain Bread',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Worcestershire Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Yogurt',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Zucchini',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pretzels',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cream Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Icing Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Toffee Popcorn',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Caramel',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Caramel Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tagliatelle',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fettuccine',
          strDescription: '',
          strType: null,
        },
        {
          strIngredient: 'Clotted Cream',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Corn Flour',
          strDescription: '',
          strType: null,
        },
        {
          strIngredient: 'Mussels',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fideo',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Monkfish',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vermicelli Pasta',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Baby Squid',
          strDescription: '',
          strType: null,
        },
        {
          strIngredient: 'Squid',
          strDescription: '',
          strType: null,
        },
        {
          strIngredient: 'Fish Stock',
          strDescription: '',
          strType: null,
        },
        {
          strIngredient: 'Pilchards',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Black Olives',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Onion',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tomato',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Duck',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Duck Legs',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chicken Stock Cube',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pappardelle Pasta',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Paccheri Pasta',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Linguine Pasta',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sugar Snap Peas',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Crusty Bread',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fromage Frais',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Clams',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Passata',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Rapeseed Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Stilton Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lamb Leg',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lamb Shoulder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Apricot',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Butternut Squash',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Couscous',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Minced Beef',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Turkey Mince',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Barbeque Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sweetcorn',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Goose Fat',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Duck Fat',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fennel',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Wine Vinegar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Haricot Beans',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Rosemary',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Butter Beans',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pinto Beans',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tomato Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mascarpone',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mozzarella',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ricotta',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dried Apricots',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Capers',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Banana',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Raspberries',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Blueberries',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Walnuts',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pecan Nuts',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Maple Syrup',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Light Brown Soft Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dark Brown Soft Sugar',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dark Chocolate Chips',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Milk Chocolate',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dark Chocolate',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pumpkin',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Shortcrust Pastry',
          strDescription: null,
          strType: 'Pastry',
        },
        {
          strIngredient: 'Peanut Cookies',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Gelatine Leafs',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Peanut Brittle',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Peaches',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Yellow Pepper',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Green Pepper',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Courgettes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tinned Tomatos',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chestnuts',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Wild Mushrooms',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Truffle Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Paneer',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Naan Bread',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lentils',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Roasted Vegetables',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Kidney Beans',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mixed Grain',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tahini',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tortillas',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Udon Noodles',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cabbage',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Shiitake Mushrooms',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mirin',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sesame Seed Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Baguette',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Vine Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Suet',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Swede',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ham',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Oysters',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Stout',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lard',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Lamb Kidney',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Beef Kidney',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Haddock',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Smoked Haddock',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Brussels Sprouts',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Raisins',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Currants',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Custard',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Mixed Peel',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Redcurrants',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Blackberries',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Hazlenuts',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Braeburn Apples',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Food Colouring',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pink Food Colouring',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Blue Food Colouring',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Yellow Food Colouring',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Apricot Jam',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Marzipan',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Almonds',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Black Pudding',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Baked Beans',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'White Flour',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Yeast',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Fruit Mix',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dried Fruit',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cherry',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Glace Cherry',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Treacle',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Oatmeal',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Oats',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Egg',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Beef Shin',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Bouquet Garni',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Single Cream',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Red Wine Jelly',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Apples',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Goats Cheese',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Prosciutto',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Unsalted Butter',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Brie',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tarragon Leaves',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Chives',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Pears',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'White Chocolate',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Star Anise',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tiger Prawns',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Custard Powder',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Desiccated Coconut',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Frozen Peas',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Minced Pork',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Creamed Corn',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Sun-Dried Tomatoes',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Dijon Mustard',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Tabasco Sauce',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Canola Oil',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Cod',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Salt Cod',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ackee',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Jerk',
          strDescription: null,
          strType: null,
        },
        {
          strIngredient: 'Ground Beef',
          strDescription: null,
          strType: null,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('meals_ingredients', {});
  },
};
