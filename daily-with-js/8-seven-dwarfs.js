/**
 * 일곱 난쟁이
 *
 * 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
 * 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
 * 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다.
 * 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이
 * 100이 됨을 기억해 냈다.
 * 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
 * 가능한 정답이 여러 가지인 경우 아무거나 출력한다.
 *
 * 입력 :
 * 20 7 23 19 10 15 25 8 13
 *
 * 출력(입력된 순서대로 일곱 난쟁이의 키를 출력한다.) :
 * 20 7 23 19 10 8 13
 */

/*
function solution(heights){
    const sum = heights.reduce((sum, height) => sum + height, 0);

    for(let i=0; i<heights.length-1; i++){
        for(let j=i+1; j<heights.length; j++){
            let total = sum - (heights[i] + heights[j]);
            if(total === 100){
                // 내 버전
                // return heights.filter((val, idx) => idx !== i && idx !== j);

                // 강의 버전 - 내 버전에서는 filter로 인해 한 번 더 loop를 돌게되는데 바로 splice하는 것이 시간 복잡도 측면에서 좋아보인다.
                heights.splice(j, 1);
                heights.splice(i, 1);
                return heights;
            }
        }
    }

    console.log('error');

    console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
}
*/

/**
 * Tip : 모두의 합을 구한 후 -100 한 값을 구한 후 두 값을 더했을 때 해당 값이 출력되면 OK
 */

function findDwarfs(heights) {
  const sum = heights.reduce((acc, cur) => acc + cur, 0);
  const diff = sum - 100;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      if (diff === heights[i] + heights[j]) {
        return heights.filter((_, idx) => idx !== i && idx !== j);
      }
    }
  }
  return null;
}

console.log(findDwarfs([20, 7, 23, 19, 10, 15, 25, 8, 13]));
