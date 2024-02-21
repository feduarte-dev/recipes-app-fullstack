"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const areas_model_1 = require("./areas.model");
const meals_categories_model_1 = require("./meals.categories.model");
const meals_ingredients_model_1 = require("./meals.ingredients.model");
class SequelizeMeals extends sequelize_1.Model {
}
SequelizeMeals.init({
    idMeal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    strMeal: {
        type: sequelize_1.DataTypes.STRING,
    },
    strDrinkAlternate: {
        type: sequelize_1.DataTypes.STRING,
    },
    strCategoryId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strAreaId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strInstructions: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMealThumb: {
        type: sequelize_1.DataTypes.STRING,
    },
    strTags: {
        type: sequelize_1.DataTypes.STRING,
    },
    strYoutube: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient1Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient2Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient3Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient4Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient5Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient6Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient7Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient8Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient9Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient10Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient11Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient12Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient13Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient14Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient15Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient16Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient17Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient18Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient19Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strIngredient20Id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strMeasure1: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure2: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure3: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure4: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure5: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure6: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure7: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure8: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure9: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure10: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure11: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure12: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure13: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure14: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure15: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure16: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure17: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure18: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure19: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure20: {
        type: sequelize_1.DataTypes.STRING,
    },
    strSource: {
        type: sequelize_1.DataTypes.STRING,
    },
    strImageSource: {
        type: sequelize_1.DataTypes.STRING,
    },
    strCreativeCommonsConfirmed: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateModified: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'meals',
    timestamps: false,
});
SequelizeMeals.belongsTo(meals_categories_model_1.default, {
    foreignKey: 'strCategoryId',
    as: 'strCategory',
});
SequelizeMeals.belongsTo(areas_model_1.default, {
    foreignKey: 'strAreaId',
    as: 'strArea',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient1Id',
    as: 'strIngredient1',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient2Id',
    as: 'strIngredient2',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient3Id',
    as: 'strIngredient3',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient4Id',
    as: 'strIngredient4',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient5Id',
    as: 'strIngredient5',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient6Id',
    as: 'strIngredient6',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient7Id',
    as: 'strIngredient7',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient8Id',
    as: 'strIngredient8',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient9Id',
    as: 'strIngredient9',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient10Id',
    as: 'strIngredient10',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient11Id',
    as: 'strIngredient11',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient12Id',
    as: 'strIngredient12',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient13Id',
    as: 'strIngredient13',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient14Id',
    as: 'strIngredient14',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient15Id',
    as: 'strIngredient15',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient16Id',
    as: 'strIngredient16',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient17Id',
    as: 'strIngredient17',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient18Id',
    as: 'strIngredient18',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient19Id',
    as: 'strIngredient19',
});
SequelizeMeals.belongsTo(meals_ingredients_model_1.default, {
    foreignKey: 'strIngredient20Id',
    as: 'strIngredient20',
});
exports.default = SequelizeMeals;
//# sourceMappingURL=meals.model.js.map