// Question -
// https://www.hackerrank.com/challenges/diagonal-difference/problem

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

function diagonalDifference(a) {
  // Complete this function
  let len = parseInt(a.length);
  let rightDig = 0;
  let leftDig = 0;
  for (let i = 0; i < len; i++) {
    rightDig = rightDig + parseInt(a[i][i]);
    leftDig = leftDig + parseInt(a[i][len - i - 1]);
  }
  return Math.abs(rightDig - leftDig);
}

function main() {
  var n = parseInt(readLine());
  var a = [];
  for (a_i = 0; a_i < n; a_i++) {
    a[a_i] = readLine().split(' ');
    a[a_i] = a[a_i].map(Number);
  }
  var result = diagonalDifference(a);
  process.stdout.write("" + result + "\n");

}