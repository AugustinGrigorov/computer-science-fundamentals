function merge(arr1, arr2) {
  const result = [];
  let arrIndex1 = 0;
  let arrIndex2 = 0;
  while (arrIndex1 < arr1.length && arrIndex2 < arr2.length) {
    if (arr1[arrIndex1] > arr2[arrIndex2]) {
      result.push(arr2[arrIndex2]);
      arrIndex2 += 1;
    } else {
      result.push(arr1[arrIndex1]);
      arrIndex1 += 1;
    }
  }
  if (arrIndex1 < arr1.length) {
    Array.prototype.push.apply(result, arr1.slice(arrIndex1));
  } else {
    Array.prototype.push.apply(result, arr2.slice(arrIndex2));
  }
  return result;
}

const mergeSort = (arr) => {
  if (arr.length > 1) {
    const splitAt = Math.floor(arr.length / 2);
    const arr1 = arr.slice(0, splitAt);
    const arr2 = arr.slice(splitAt);
    return merge(mergeSort(arr1), mergeSort(arr2));
  }
  return arr;
};

exports.mergeSort = mergeSort;
