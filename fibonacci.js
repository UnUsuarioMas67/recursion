const fibs = function (n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
};

const fibsRec = function (n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  }

  const arr = fibsRec(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
};

console.log(fibs(10));
console.log(fibsRec(10));
