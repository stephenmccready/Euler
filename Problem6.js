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
