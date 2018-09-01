function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementsById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementsById("recipe-form-partial").innerHTML)
  
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
