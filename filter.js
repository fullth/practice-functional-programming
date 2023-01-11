const arr = [1, 2, 3, 4, 5];

const filter = (func, iter) => {
  const result = [];

  for (const el of iter) {
    if (func(el)) {
      result.push(el);
    }
  }

  return result;
};

console.log(filter((el) => el % 2, arr));
console.log(arr.filter((el) => el % 2));
