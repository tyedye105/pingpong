var countArray = [];
var countBy = prompt("Enter a number to count by");

alert(countBy);

var doSomething = function(countBy, countArray) {
for (i= 0; i <= countBy; i++) {
	countArray.push( i+1);
}
alert(countArray);
alert("hi");
};

doSomething(countBy,countArray);

//var Something = function(limit, countBy, resultMath) {


//for (i=1; i<= limit; i++) {
 //   resultMath.push(  i * countBy);

//}
