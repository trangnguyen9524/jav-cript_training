function joinWithCharacter(array, charactor) {
  return (result = array.join(charactor));
}

// Ví dụ khi sử dụng
var cars = ["Honda", "Mazda", "Mercedes"];

var result = joinWithCharacter(cars, " - ");

console.log(result); // Expected: "Honda - Mazda - Mercedes
