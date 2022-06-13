function howManyHundreds(number) {
  var hundreds = 0;
  var count = number;
  while (count >= 100) {
    hundreds++;
    count -= 100;
  }
  return hundreds;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);