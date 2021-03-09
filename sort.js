const normalSort = (array) => {
  console.log(array.sort());
};

const ascendingSort = (array) => {
  console.log(
    array.sort(function (a, b) {
      return a - b;
    })
  );
};

const descendingSort = (array) => {
  console.log(
    array.sort(function (a, b) {
      return b - a;
    })
  );
};
a1 = [5, 10, 2, 2, 6, 9, 2, 4, 1, 1, 0, 8, 3, 9, 4, 0, 5, 3, 2, 0, 1, 7];
normalSort(a1);
ascendingSort(a1);
descendingSort(a1);
