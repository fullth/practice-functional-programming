const arr = [1, 2, 3, 4, 5];

const map = (func, iter) => {
  const result = [];

  for (const el of iter) {
    result.push(func(el));
  }

  return result;
};

// 배열의 요소에 *2 처리한 배열을 return.
console.log(map((el) => el * 2, arr));

// 내장함수 map과 동일한 역할을 수행하는지 확인.
console.log(arr.map((el) => el * 2));
