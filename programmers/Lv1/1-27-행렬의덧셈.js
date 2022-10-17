function solution(arr1, arr2) {
  /* my answer */
  // const result = []
  // for(let i=0; i<arr1.length; i++) {
  // const arr = []
  // for(let j=0; j<arr1[i].length; j++) {
  // arr[j] = arr1[i][j] + arr2[i][j]
  // }
  // result.push(arr)
  // }
  // return result

  /* reference code */
  const result = arr1.map((ele1, idx1) => {
    return ele1.map((ele2, idx2) => {
      return ele2 + arr2[idx1][idx2];
    });
  });
  return result;
}
