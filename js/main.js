//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', () => getDrink())


function getDrink() {
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON

        .then(data => {
            console.log(data.drinks[0])

            //create a variable to get a random drink
            let random = Math.ceil(Math.random() * data.drinks.length - 1)
            //call the variable to the DOM
            document.querySelector('.drinkName').innerText = data.drinks[random].strDrink
            document.querySelector('img').src = data.drinks[random].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[random].strInstructions

            //to fetch ingredients 
            const ingredients = [...Array(15)].map((el, i) => data.drinks[random][`strIngredient${i + 1}`]).filter(Boolean)
            document.querySelector('ul').innerText = ingredients.join(" + ")


        })

        .catch(err => {
            console.log(`error ${err}`)
        });



}

// fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.drinks[0])
//         document.querySelector('h2').innerText = data.drinks[0].strDrink
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb
//         document.querySelector('h3').innerText = data.drinks[0].strInstructions
        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });