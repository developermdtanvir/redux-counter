// reduce function connecpts to comming reducer function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0)
);
