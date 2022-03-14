// 1. Write a javascript function that reverse a number

function reverseNumber(number){
    number= number+"" //Convert a number to a string
    return number.split('').reverse().join('')
}

console.log("The reverse of the number is "+reverseNumber(12345))

//2. Write a Javascript function which accepts an argument and returns the type.

function checkType(value){
    return(typeof value);
}
console.log(checkType(true));

//3. Write a Javascrpt program to pas a 'Javascript function' as parameter

function test(callback) {
    callback();
}
function func() {
    console.log('Hello World');
}

test(func);


// 4. Write a Javascript function to get the function name
function functionName(){
    console.log(arguments.callee.name);
}
functionName();

var firstName = prompt("Hello and Welcome. Please enter your first name:");
var lastName = prompt("Please enter your Last Name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var petName = prompt("What is the name of your pet?");
alert("Thank you so much for the information.");

// Make all the variables null
var agecond= null;
var nameCond=null;
var heightCond=null;
var petCond=null;

//Code
if(firstName[0]===lastName[0]){
nameCond=true;
}else{
    nameCond=false
}

if(age>21 && age<30){
    agecond=true;
}else{
    agecond=false
}

if(height>=170){
    heightCond=true;
}else{
    agecond=false;
}

if(petName[petName.length-1]=== 'y'){
    petCond=true;
}else{
    petCond=false;
}

if(nameCond && agecond && heightCond && petCond){
    alert("You're a spy, Get Out!");
}else{
    alert("Nothing to see here!");
}

write a function that accepts an array of number(be it decimal) and returns the smallest number and retyrn the largest(maximum)
write a funtion thzt reyurns all the prrime numbers in the array
or return a MessageChannel(You dont have orime numbers)
do the same for odd and even
install node js