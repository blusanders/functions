
//******************
// dog breeds
//******************

const calculateAgeInDogYears = (age) => {
    const ageInDogYears = age / 7
    return ageInDogYears

}

const dogAge = calculateAgeInDogYears(22)


const favBreed = (breed) => {
    if (breed==="meow"){
        return "I like cats."
    }else{
        return "my fav dog breed is " + breed;
    }
}

//const myFavDogBreed = "When it comes to pets, " + favBreed("Aussie");
const myFavDogBreed = "When it comes to pets, " + favBreed("meow");
//console.log(myFavDogBreed)


//******************
// add nums
//******************

const add = (num2, num1, num3) => {
    return num1 + num2 + num3;
}

const sumNums = add(17,4,11);
//console.log(sumNums);


//******************
// car go
//******************


const go = (direction, speed) => {
    let message = `The car is moving ${direction} at ${speed} mph.`;
    if (speed>75){
        message += " SLOW DOWN!"; 
    }
    return message;
} 

const carInfo = go("in circles", 99);
//console.log(carInfo);


//******************
// even or odd
//******************

const evenOrOdd = (num) => {
    //trying single line if statement
    return (num % 2 ===0 ? "even" : "odd");
}

const checkEvenOdd = [2,0,111,56,78,85,223,45,6]
for (const x in checkEvenOdd){
    //console.log(evenOrOdd(checkEvenOdd[x]));
}


//******************
// startsWith
//******************

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
//console.log(words);

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */

 const kWords = (wordArray) => {
    let noK = [];
    for (const x in wordArray){
        if (wordArray[x].startsWith("k")){noK.push(wordArray[x])}
    }
    return noK;
} 

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
const stringOfArray = (kWords) => {
    return kWords.join();
} 

/*
    Invoke the filtering function and store its return value
 */
const justK=kWords(words);
//console.log(justK);

/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
//console.log(stringOfArray(justK));


//******************
// tuna
//******************

const svenChances = (times) => {
    let chances = Math.random()*times;
    if (chances<=1){
        return true;
    }else{return false;}
}

let chanceOfFish = svenChances(3);
let msg="";

if (chanceOfFish){
    msg="Sven hooked a tuna! :) ";
}else{
    msg= "Sven came up empty-handed.  :(";
    }

//console.log(msg);


//******************
// fast food
//******************

const orderMeal = (sandwich,side,drink,dessert) => {
    return {
        sandwich: sandwich,
        side: side,
        drink: drink,
        dessert: dessert
    }
}

const takeOutBag = orderMeal("Turkey", "Pie", "Tea", "Chips")
//console.log(takeOutBag);


//******************
// chores
//******************

const twice = number => number * 2
const timesFive = number => number * 5
const square = number => number * number
const cubed = number => number * number * number

const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}

const number = 7
const by2 = bigify(number, twice)  // 14
const by5 = bigify(number, timesFive)  // 35
const byItself = bigify(number, square)  // 49
const threed = bigify(number, cubed)  // 49

const person = {
    firstName: "Blu",
    lastName: "Sanders"
}

const choreOne = person => `${person.firstName} ${person.lastName} mowed the lawn`
const choreTwo = person => `${person.firstName} ${person.lastName} went to the gym`
const choreThree = person => `${person.firstName} ${person.lastName} meditated`
const choreFour = person => `${person.firstName} ${person.lastName} got drunk`
const choreFive = person => `${person.firstName} ${person.lastName} planted some flowers`
const choreSix = person => `${person.firstName} ${person.lastName} went to the store`

const dayPlanner = (person, chore1, chore2, chore3, day) =>{
    let result = `${chore1(person)} and ${chore2(person)} and ${chore3(person)} on ${day}.`
    return result; 
}

console.log(dayPlanner(person, choreFive, choreTwo, choreOne, "Monday"));

