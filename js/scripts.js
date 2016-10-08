// Back End
var countUp = function(countBy, countArray) {
	for (i= 0; i < countBy; i++) {
		countArray.push( i+1);
}
countArray.forEach(function(checkTwnty) {
  if (checkTwnty % 20 === 0) {
        countArray.splice( checkTwnty -1, 1,"score");
  }
});
countArray.forEach(function(checkFteen) {
  if (checkFteen % 3 === 0 && checkFteen % 5 === 0) {
        countArray.splice( checkFteen -1, 1,"pingpong");
  }
});
countArray.forEach(function(checkThree) {
  if (checkThree % 3 === 0) {
        countArray.splice( checkThree -1, 1,"ping");
  }
});
countArray.forEach(function(checkFive) {
  if (checkFive % 5 === 0) {
        countArray.splice( checkFive -1, 1,"pong");
  }
});
};

//Front End
 $(document).ready(function() {
   $("form#num-form").submit(function(event) {
    event.preventDefault();
    var countBy = parseInt($("input#numb-by").val());
    var countArray = [];
    var pongPing = countUp(countBy,countArray);
		$("#results").text(countArray);
	});
});

//var Something = function(limit, countBy, resultMath) {


//for (i=1; i<= limit; i++) {
 //   resultMath.push(  i * countBy);

//}
