var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    reader.question("Enter # ", function (numString1) {
      var num1 = parseInt(numString1);
      sum += num1;
      console.log(sum);

      //recrusive Call
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  else {
    completionCallback(sum);
  }

};

//test function
addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
