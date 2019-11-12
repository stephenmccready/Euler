var result = 0;

for(let x = 3; x<1000; x++){
	if(x % 3 == 0 || x % 5 == 0){
  	result = result + x;
  }
  console.log(result);
}
