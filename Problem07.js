/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10001st prime number?
*/
var primeCount=0;
var num=1;

for(num=1; primeCount<10001; num++){
	if(isPrime(num)) {
  	primeCount++;
  }
}

console.log(primeCount + "st prime is " + (num - 1));

function isPrime(y) {
  for(var i = 2; i < y; i++){
    if(y % i === 0) {
    	return false;
    }
  }
  return y > 1;
}
