var countArray = [];
var countBy = prompt("Enter a number to count by");



var doSomething = function(countBy, countArray) {
for (i= 0; i < countBy; i++) {
	countArray.push( i+1);
}
alert(countArray);


countArray.forEach(function(checkThree) {

  if (checkThree % 3 === 0) {



        countArray.splice( checkThree -1, 1,"ping");


  }
});





};

doSomething(countBy,countArray);

alert(countArray);

//var Something = function(limit, countBy, resultMath) {


//for (i=1; i<= limit; i++) {
 //   resultMath.push(  i * countBy);

//}
