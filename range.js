
//push numbers into an array given a range and step to take
function range(start, end, step) {
  let myArray = [];
  if (start != undefined && end != undefined && step != undefined && start < end && step > 0) {
    for (let i = start; i <= end; i = i+step) {
      myArray.push(i);
    }
  }
  return myArray;
}

//test the function above
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));