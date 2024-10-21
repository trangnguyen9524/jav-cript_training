//Exercise 1: using if-else statement to resolve a problem
function run(a) {
  if (a % 3 === 0 && a % 15 !== 0) {
    return 1;
  } else if (a % 5 === 0 && a % 15 !== 0) {
    return 2;
  } else {
    a % 15 === 0;
  }
  {
    return 3;
  }
}
// Expectation
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3

//Exercise 2: using switch statement
function run(fruits) {
    var result;
    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
       case "Apple":
            result = "This is an Apple";
            break;
        default:
            result = "No fruits";
    }
    return result;

//Exercise 3: using ternary operator
var age
function getCanVoteMessage (age) {
    return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
}
// Expectation
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'
