// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const y = 3;
const a = 5;
const c = (a +y);



//TODO: ADD redeclarable variable
var b = 7;
var b = 8;
b = 23;


//TODO: ADD re-assignable but not redeclarable variable
let d =  9;
{
let d = 12;
}



// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const num =  42;


//TODO: Create a redeclarable variable with a boolean value
var a12 = true;
a12 =  false;

//TODO: Create a re-assignable variable with a string value
var str = "Hello World!";
str = " How are you today?";



// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let text  = "Hello" ;
let txt1 = "Ian";
let txt2 = text.concat("", txt1);


//TODO: Interpolate string (`${}`)
let name1 = "John Doe";
console.log(`My Name is ${name1}`);



//TODO: Convert to uppercase
let text3 = "How are you doing";
let text4 = text3.toUpperCase();l

//TODO: Convert to lowercase
let a1 = "How are you doing";
let a2 = a1.toLowerCase();

//TODO: Index a specific character
const car = [ 'Benz', 'Mazda', 'Volvo' ];
console.log(car[1]); 
//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)




// 4.0 COMPARISON
//TODO: strict equality
console.log (5 === 5); 

//TODO: strict inequality
console.log  (10 !== 5);


//TODO: equality
console.log (5 == 5);

//TODO: inequality
console.log  (10 != 5);

//TODO: greater than
console.log ("10 >  9");

//TODO: less than
console.log("10 < 11");

//TODO: greater or equal to
console.log("10 >= 10");

//TODO: less or equal to
console.log("10 <= 10");


// 5.0 CONTROL FLOW
// TODO: if-else statement
if  (a >= b) {
    message = "I'm big";
} else {
    message = "I'm small";

}


//TODO: switch-case
switch (Menu){
    case "Pizza":
        price = 12;
        break;
    
    case "Salad":
        price = 8;
        break;
        
    default:
        console.log("Invalid menu item");




}






