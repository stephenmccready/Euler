/*
In the game of darts a player throws three darts at a target board which is split into twenty equal sized sections numbered one to twenty.
The score of a dart is determined by the number of the region that the dart lands in. A dart landing outside the red/green outer ring scores zero. The black and cream regions inside this ring represent single scores. However, the red/green outer ring and middle ring score double and treble scores respectively.

At the centre of the board are two concentric circles called the bull region, or bulls-eye. The outer bull is worth 25 points and the inner bull is a double, worth 50 points.

There are many variations of rules but in the most popular game the players will begin with a score 301 or 501 and the first player to reduce their running total to zero is a winner. However, it is normal to play a "doubles out" system, which means that the player must land a double (including the double bulls-eye at the centre of the board) on their final dart to win; any other dart that would reduce their running total to one or lower means the score for that set of three darts is "bust".

When a player is able to finish on their current score it is called a "checkout" and the highest checkout is 170: T20 T20 D25 (two treble 20s and double bull).

There are exactly eleven distinct ways to checkout on a score of 6:
D3	 	 
D1	D2	 
S2	D2	 
D2	D1	 
S4	D1	 
S1	S1	D2
S1	T1	D1
S1	S3	D1
D1	D1	D1
D1	S2	D1
S2	S2	D1
Note that D1 D2 is considered different to D2 D1 as they finish on different doubles. However, the combination S1 T1 D1 is considered the same as T1 S1 D1.

In addition we shall not include misses in considering combinations; for example, D3 is the same as 0 D3 and 0 0 D3.

Incredibly there are 42,336 distinct ways of checking out in total.
How many distinct ways can a player checkout with a score less than 100?
*/
var start = new Date();
document.getElementById("result").innerHTML = "Start: " + start.getTime(); 

var checkouts=0;
// A = Single D = Double, T = Treble
// Use A instead of S for single so that it's less than D or T for later comparisons
var dart=['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','A14','A15','A16','A17','A18','A19',
  'A20','A25','A50','D1','D2','D3','D4','D5','D6','D7','D8','D9','D10',
  'D11','D12','D13','D14','D15','D16','D17','D18','D19','D20',
	'T1','T2','T3','T4','T5','T6','T7','T8','T9','T10',
  'T11','T12','T13','T14','T15','T16','T17','T18','T19','T20'];
var dartValue=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,50,
	2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
	3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60];

for(var targetScore=99; targetScore>1; targetScore--){
	document.getElementById("result").innerHTML += "<br>Target Score: " + targetScore; 
  if(doubleFinish(targetScore)) {
  	checkouts++;
  }
  twoDartFinish(targetScore);
  threeDartFinish(targetScore);
}

document.getElementById("result").innerHTML += "<br>Checkouts: " + checkouts;
var end = new Date();
document.getElementById("result").innerHTML += "<br>End: " + end.getTime();  
document.getElementById("result").innerHTML += "<br>Time Taken: " + (end.getTime() - start.getTime());  

function twoDartFinish(score) {
	for(let x=0; x<dart.length; x++) {
    var targetScore = score;
    if(dartValue[x]<targetScore) {
      targetScore = targetScore - dartValue[x];	// First Dart
      if(doubleFinish(targetScore)){						// Secord Dart
        checkouts++;
      }
		}
	}
}

function threeDartFinish(score) {
	for(let x=0; x<dartValue.length; x++) {
    var targetScore = score;
    if(dartValue[x]<targetScore) {
      targetScore = targetScore - dartValue[x];			// First Dart
      var firstDartType = dart[x];
      var firstDartScore = dartValue[x];
 			for(let y=0; y<dartValue.length; y++) {
      	var targetScore2 = targetScore;
    		if(dartValue[y]<targetScore2) {
      		targetScore2 = targetScore2 - dartValue[y];	// Second Dart
          var secondDartType = dart[y];
          var secondDartScore = dartValue[y];
      		if(doubleFinish(targetScore2)){							// Third Dart
          	if(firstDartType <= secondDartType) {
        				checkouts++;
            }
      		} 
      	}
      }
		}
	}
}

function doubleFinish(score) {
	if((score%2) == 0 && (score<=40 || score==50)) {
    		return true;
	}
	return false;
}
