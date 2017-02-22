'use strict';
var recipe = {};

function addIngredient(recipe, name, amount) {
	recipe[name] = amount;
  	return recipe;
}

function removeIngredient(recipe, ingredient){
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, amount){
  recipe[ingredient] = amount;
  return recipe;
}
