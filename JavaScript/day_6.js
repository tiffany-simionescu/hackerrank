// Sample Input

// 2
// Hacker
// Rank
// Sample Output

// Hce akr
// Rn ak

function processData(input) {
  //Enter your code here
  let newInput = input.split('\n').slice(1);
  newInput.forEach((str) => {
    let evenStr = '';
    let oddStr = '';
      for(let i = 0; i < str.length; i++) {
          i % 2 ? oddStr += str[i] : evenStr += str[i];
      }
      console.log(`${evenStr} ${oddStr}`);
  });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
