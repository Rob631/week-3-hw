//Question 1 a - c
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let total = ages.push(65);
let lastElement = ages[ages.length - 1];

console.log(lastElement);
console.log(lastElement - ages[0]);

console.log(ages);
console.log(lastElement - ages[0]);

let lengthOne = ages.length;
let sum = 0;
let average 
for(let i = 0; i < ages.length; i++){
    sum += ages[i];
    average = sum / ages.length;
}

console.log(average);

//Question 2 a - b
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let lengths = names.map(function(element) {
    return element.length;
});

console.log(lengths);
let sumChar = 0
let averageOfNames;
for(let i = 0; i < names.length; i++){
    sumChar += names[i].length;
    averageOfNames = sumChar / names.length;
}

console.log(sumChar);

console.log(averageOfNames);

//Quesiton 5
let namesArray = ['Kelly', 'Sam', 'Kate'];
let nameLengths = []
for(let i = 0; i < namesArray.length; i++){
    namesArray[i].length;
    nameLengths.push(namesArray[i].length);
}  

console.log(nameLengths);

//Question 6
let newSum = 0
for(let i = 0; i < nameLengths.length; i++){
   newSum += nameLengths[i];
};
console.log(newSum)

//Question 7
function repeat(string, times){
    let repeat = "";
    for(let i = 0; i < times; i++){
        repeat += string;

    }
    console.log(repeat);
}
repeat("hello", 3);

//Question 8
function makeFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

let fullName = makeFullName('Roberto', 'Diaz');
console.log('Welcome, ' + fullName);

//Queation 9
let newNum = [80,90,100]; 

function isSumGreater(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    let result;
     if (sum > 100){
        result = true;
    } else {
        result = false;
    }
    return result;  
}
console.log(isSumGreater(newNum));

//Question 10
let num1 = [55, 27, 89, 90, 10];

function avgOfTwo(arr){
    let total = 0
    for(i = 0; i < arr.length; i++){
        total = total + arr[i];
    }
    return total / arr.length;
}
console.log(avgOfTwo(num1));

//Queation 11
let firstArr = [99, 65, 95];
let secondArr = [57, 49, 100];
function getAverage(arr){
    let sum = 0
    let totalAvg;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        totalAvg = sum / arr.length;
    }
    return totalAvg;
}
console.log(getAverage(secondArr));


function twoArrays (arr1, arr2){
 arr1 = getAverage(arr1);
 arr2 = getAverage(arr2);

let results; 
if(arr1 > arr2){
    results = true;
} else{
    results = false;
}
   return results;
}
console.log(twoArrays(firstArr, secondArr));

//question 12
let temp = 97;
let money = 12.00;
function willBuyDrink(isHotOutside, moneyInPocket){
    isHotOutside > 55;
    moneyInPocket > 10.50;
    let respond;
    if(isHotOutside && moneyInPocket > 10.50){
        respond = true;
    }else{
        respond = false;
    }
    return respond; 
}
console.log(willBuyDrink(temp, money));

//Question 13
let fahrenheit = 32;
function convertToCelsius(celsius){
   celsius = (fahrenheit - 32) * 5 / 9;
   return celsius
}
//I created this funciton to convert fahrenheit into clesius. 
console.log(convertToCelsius(fahrenheit));