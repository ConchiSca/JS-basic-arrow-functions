// zet de functie om naar een arrow functie

// const ikRockArrowFunctions = function () {
//     console.log("Joe, ik rock de arrow functions!");
//   };
  
//   ikRockArrowFunctions()

  const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");
  
  ikRockArrowFunctions()


//   const fivePlusSeven = function () {
//     return 5 + 7
//   };
  
//   fivePlusSeven()

const fivePlusSeven = () => 5 + 7;

fivePlusSeven();

//Schrijf een arrow function, op 1 regel 
//(dus met een impliciete return statement), 
//die de params a en b bij-elkaar optelt. Noem de functie myFunction.


const myFuntion = (a, b) => a + b;


//Schrijf een arrow function op 1 regel, 
//die de parameter a behoudt, en altijd a 
//plus 5 returned. Noem de functie addFive.

const addFive = a => a + 5;

//arrow functions een implicit return statement
//hebben wanneer je de code op 1 regel kunt schrijven. 
//Er is 1 uitzondering, namelijk bij het returnen 
//van een object {} . Wanneer je een object returned 
//moet het object in een () gezet worden, om niet 
//verward te worden met de curly braces {} van een function.
//Schrijf een arrow function met de naam createObject 
//met een implicit return statement (dus op 1 regel) die 
//een simpel object returned: {greeting: "hoi"}

const createObject = () => ({greeting: "hoi"});


