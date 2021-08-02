// Write a fetch request to the Giphy API

fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=b562a936cd5b4f80a3386ac652e6f2e6')
    .then(Response => Response.json())
    .then(data => {
        console.log(data)

    })