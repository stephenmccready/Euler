var num = 600851475143;   // 600,851,475,143
var numsqrt = parseInt(Math.sqrt(num));
for(var x = numsqrt; x > 3; x--){
                if(isPrime(x)){
    if((num % x) == 0)  {
      console.log('RESULT:');
                console.log(x);
      break;
    }
  }
}
 
function isPrime(y) {
  for(var i = 2; i < y; i++)
    if(y % i === 0) return false;
  return y > 1;
}
