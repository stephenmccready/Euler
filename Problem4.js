var n1 = 999;
var n2 = 999;
var palindromes = [];
 
for(n1; n1 > 99; n1--) {
                n2 = 999;
                for(n2; n2 > 99; n2--){
                if(isPalindrome(n1 * n2)) {
                                                palindromes.push(n1 * n2);
    }
  }
}
palindromes.sort();
console.log(palindromes[palindromes.length-1]);
 
function isPalindrome(x) {
                strX = x.toString();
                if(strX.substring(0,1) == strX.substring(5,6)
  && strX.substring(1,2) == strX.substring(4,5)
  && strX.substring(2,3) == strX.substring(3,4))   {
                return true;
  }
  return false;
}
