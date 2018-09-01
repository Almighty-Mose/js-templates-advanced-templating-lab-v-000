function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function CreateRecipe() {
  let recipe = getRecipeVals();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}

function getRecipeVals() {
  let ingredientNodes = document.getElementsByName("ingredients");
  let ingredients = [];
  for(let i = 0; i < ingredientNodes.length; i++) {
    if(ingredientNodes[i].value !== "") {
      ingredients.push(ingredientNodes[i].value);
    }
  }
  let name = document.getElementById('recipeName').value;
  let description = document.getElementById('recipeDesc').value;
  let recipe = {name, ingredients, description};
  return(recipe);
}

function updateRecipe() {
  let recipe = getRecipeVals();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}
