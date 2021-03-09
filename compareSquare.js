function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  const new1 = array1.sort(function (a, b) {
    return a - b;
  });
  const new2 = array2.sort(function (a, b) {
    return a - b;
  });

  const newAgain = new1.map((element) => element * element);
  return newAgain.every((element, i) => element === new2[i]);
}

a1 = [5, 10, 2, 2, 6, 9, 2, 4, 1, 1, 0, 8, 3, 9, 4, 0, 5, 3, 2, 0, 1, 7];
a2 = [
  81,
  0,
  25,
  25,
  1,
  16,
  4,
  4,
  36,
  100,
  1,
  64,
  16,
  4,
  1,
  49,
  0,
  0,
  4,
  81,
  9,
  9,
];
console.log(comp(a1, a2));
