var start = 20 * 19;
var isFound = 'N';
console.log(start);
 
for(var x = start; isFound == 'N'; x = x + start) {
                if(isMultiByAll(x)){
                console.log(x);
    isFound = 'Y';
                break;
  }
}
 
console.log("END");
 
function isMultiByAll(x) {
                if(x % 18 == 0 && x % 17 == 0 && x % 16 == 0
                                && x % 15 == 0 && x % 14 == 0 && x % 13 == 0 && x % 12 == 0 && x % 11 == 0){
                return true;
  }
                return false;
}
