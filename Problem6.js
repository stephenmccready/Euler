/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
var sumOfTheSquares = 0;
 
for(var x = 1; x < 101; x++) {
                sumOfTheSquares += (x * x);
}
 
var theSum = 0;
 
for(var x = 1; x < 101; x++) {
                theSum += x;
}
 
var theSquareOfTheSums = theSum * theSum;
 
console.log(sumOfTheSquares);
console.log(theSquareOfTheSums);
console.log(theSquareOfTheSums - sumOfTheSquares);
