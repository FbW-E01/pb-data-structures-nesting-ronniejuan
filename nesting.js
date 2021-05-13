// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
// let board = [
//   [1, 2, 3],
//   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
//   [true, false]
// ];
// ```
 let board = [
   [1, 2, 3],
   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
   [true, false]
 ];

for (let i = 0; i < board.length; i++) {
   const  element = board[i];

   for (let i = 0; i < element.length; i++) {
       const element2 = element[i];
       
  
           console.log(element2)
 }
 }

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods. 
// * 2.4 Add a method that loops through and print all the doggo's favorite food.


const doggo={
    name:"Raul",
    breed: "Streeter",
    Food:["Bugs","Lamb Meet","Birds","KFC"]
};


 console.log(doggo.Food[1])

const  favoriteFood = doggo.Food

for (let i = 0; i < favoriteFood.length; i++) {
console.log(favoriteFood[i])
}



// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as
//  properties butter, sugar, flour etc. Each property should have a string as its value. 
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 

const recipes = {
     ingredient :{
         meat:"Lamb",
         bread:"Burger Buns",
         vegetables:"Tomato",
         Sauce:"Mayo",
         Sugar:""
    }
}

recipes.ingredient.ginger = ""; // adding element into the second object.
 console.log(recipes)

recipes.ingredient.Sugar = "Brown Sugar";
 console.log(recipes)

const justIngredient = recipes.ingredient;


    console.log(recipes.ingredient)
    

