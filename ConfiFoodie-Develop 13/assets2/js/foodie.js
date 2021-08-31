// Write a fetch request to the Giphy API

fetch('https://api.spoonacular.com/recipes/random?apiKey=b562a936cd5b4f80a3386ac652e6f2e6')
    .then(Response => Response.json())
    .then(data => {
        console.log(data.recipes[0])
        console.log(data.recipes[0].title)
        console.log(data.recipes[0].title)
        var titleElement = document.querySelector('#titleRecipe')
        var titleRecipe = data.recipes[0].title
        titleElement.innerText = titleRecipe
        var summaryElement = document.querySelector('#recipeSummary')
        var summaryRecipe = data.recipes[0].summary
        summaryElement.innerHTML = summaryRecipe
        var imgElement = document.querySelector('#recipeImg')
        var imgSummary = data.recipes[0].image
        console.log(imgSummary)
        imgElement.src = imgSummary
        var recipeElement = document.querySelector('#recipeInstructions')
        var recipeInstructions = data.recipes[0].instructions
        recipeElement.innerHTML = recipeInstructions
        var ingredientsElement = document.querySelector('#extendedIngredients')
        var extendedIngredients = data.recipes[0].extendedIngredients
        console.log(extendedIngredients)
        ingredientsElement.innerHTML = extendedIngredients
        let extendedIngredients = ["math.random"];
        for (let i = 0; i < ingredients.lenght; i++)
        // extendedIngredients
    })