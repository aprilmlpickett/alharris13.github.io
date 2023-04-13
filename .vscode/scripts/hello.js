function printHeadline(message, size){
  var headline = "<h" + size + ">";
  var headlineEnd = "</h" + size + ">";
  document.write( headline+ message + headlineEnd);
}


function sum(firstNum, secNum){
  var total = firstNum + secNum;
  document.write(total);
}

var numberOne = 12, numberTwo = 24;
//Call a function that adds numberOne and Number Two
sum(numberOne, numberTwo);

printHeadline( "Hello world!", 1);
console.log(headline);

printHeadline("Headline 2", 2);

printHeadline("Headline 3", 3);


