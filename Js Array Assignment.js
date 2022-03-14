//Assignment

//write a function that accepts an array of number(be it decimal) and returns the smallest number and return the largest(maximum)
//write a funtion that returns all the prrime numbers in the array or return a Message(You dont have prime numbers)
//Do the same for odd and even

//Test
console.log("Hello");



//A function that accepts an array of numbers and return the largest number

function largeFunc(){
    var myNum = [ 10 , 8 , 78 , 92 , 73];
    var largestNum= 92;

    if (myNum[0] >= largestNum){
        console.log(myNum[0] +" is the largest");
    }else if(myNum[1] >= largestNum){
        console.log(myNum[1] +" is the largest");
    }else if(myNum[2] >= largestNum){
        console.log(myNum[2] +" is the largest");
    }else if(myNum[3] >= largestNum){
        console.log(myNum[3] +" is the largest");
    }else if(myNum[4] >= largestNum){
        console.log(myNum[4] +" is the largest");
    }else{
        console.log("Nothing to see here");
    }
}


//A function that accepts an array of numbers and return the smallest number

function smallFunc(){
    var myNum = [ 10 , 8 , 78 , 92 , 73];
    var smallestNum= 8;

    if (myNum[0] <= smallestNum){
        console.log(myNum[0] +" is the smallest");
    }else if(myNum[1] <= smallestNum){
        console.log(myNum[1] +" is the smallest");
    }else if(myNum[2] <= smallestNum){
        console.log(myNum[2] +" is the smallest");
    }else if(myNum[3] <= smallestNum){
        console.log(myNum[3] +" is the smallest");
    }else if(myNum[4] <= smallestNum){
        console.log(myNum[4] +" is the smallest");
    }else{
        console.log("Nothing to see here");
    }
}


//write a funtion that returns all the prime numbers in the array or return a Message(You dont have prime numbers)
var arr = [ 10 , 8 , 78 , 92 , 73];

function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

arr.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      console.log(`${element} is a prime number`);
    } else {
      console.log(`${element} is NOT a prime number`);
    }
  });

  console.log("This is for even numbers");

//write a funtion that returns all the even numbers in the array or return a Message(You dont have even numbers)
var arr = [ 10 , 8 , 78 , 92 , 73];

function checkEven(number) {
      for (let i = 0; i < number; i++) {
        if (number % 2 == 0) {
          return true;
        }
      }
      return false;
    }
  

arr.forEach(function (element) {
    const isEven = checkEven(element);
    if (isEven) {
      console.log(`${element} is an even number`);
    } else {
      console.log(`${element} is NOT an even number`);
    }
  });

console.log("This is for odd numbers");
  //write a funtion that returns all the odd numbers in the array or return a Message(You dont have odd numbers)
var arr = [ 10 , 8 , 78 , 92 , 73];

function checkOdd(number) {
      for (let i = 0; i < number; i++) {
        if (number % 2 == 0) {
          return false;
        }
      }
      return true;
    }
  

arr.forEach(function (element) {
    const isOdd = checkOdd(element);
    if (isOdd) {
      console.log(`${element} is an odd number`);
    } else {
      console.log(`${element} is NOT an odd number`);
    }
  });

