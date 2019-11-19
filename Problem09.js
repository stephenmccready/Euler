/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
var a=3, b=4, c=5, productABC=0;
for(a=3; a<1000; a++) {
	var aSQ = a * a;
  for(b=a+1;b<1000; b++) {
  	var bSQ = b * b;
  	var c = Math.sqrt(aSQ + bSQ);  	
    if(Number.isInteger(c) && c > b){
    	if((a+b+c)==1000) {
      	productABC = a*b*c;
//				document.getElementById("result").innerHTML +=  "result: " + a + " : " + b + " : "+ c
//				document.getElementById("result").innerHTML +=  "<br>product: " + productABC; 
				console.log("result: " + a + " : " + b + " : "+ c);
				console.log("product: " + productABC;);
      	a = 1000;
      	b = 1000;
      	break;
      } else {
    		if((a+b+c)>1000){
        	b=1000;
        	break;
        }
      }
    }  
  }
}
