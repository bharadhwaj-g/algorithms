// Question -
// https://www.hackerrank.com/challenges/plus-minus/problem

// Solution
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function plusMinus(arr) {
  // Complete this function
  let postiveCount = 0;
  let negativeCount = 0;
  let zerosCount = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      postiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zerosCount++;
    }
  }
  process.stdout.write("" + postiveCount / len + "\n");
  process.stdout.write("" + negativeCount / len + "\n");
  process.stdout.write("" + zerosCount / len + "\n");
}

function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  plusMinus(arr);

}