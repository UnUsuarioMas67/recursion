const mergeSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.ceil(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};

const merge = function (left, right) {
  const result = [];

  let l = 0,
    r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  while (l < left.length) {
    result.push(left[l]);
    l++;
  }
  while (r < right.length) {
    result.push(right[r]);
    r++;
  }

  return result;
};

console.log(
  mergeSort([
    16, 99, 27, 84, 30, 77, 39, 61, 48, 53, 91, 100, 10, 23, 35, 77, 89, 98, 51, 73, 89, 66, 34, 57, 12, 45, 27, 92, 58,
  ])
);
