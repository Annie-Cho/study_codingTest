/**
 * 장난꾸러기 현수
 *
 * 반 학생들을 키가 작은 순서대로 키순을 세워 1번부터 N번까지 번호를 부여한다.
 * 이 때 현수가 본인보다 앞자리의 짝꿍과 자리를 바꾸었고 선생님은 이 사실을 모른채로 번호를 부여하였다.
 * 반 학생들의 키 정보가 주어질 때 현수가 받은 번호와 현수 짝꿍이 받은 번호를 차례로 출력하시오.
 *
 * ex1) 9, [120, 125, 152, 130, 135, 135, 143, 127, 160]
 * => 3 8
 * => 3번 152가 현수이고, 8번 127이 현수 짝꿍이다.
 *
 * ex2) 6 [120, 130, 150, 150, 130, 150]
 * => 3 5
 * => 3번 150이 현수이고, 5번 130이 현수 짝꿍이다.
 */

/** 내가 처음 푼 풀이 -> 잘못된 풀이!!!!!!!!!!!!!!!!!! 
function naughtyHyunsoo(totalCount, heights) {
  let hyunsoo = 0;
  let pair = 0;
  let i;

  for (i = 0; i < totalCount; i++) {
    if (heights[i] > heights[i + 1]) {
      hyunsoo = i + 1;
      break;
    }
  }

  for (i = i + 1; i < totalCount; i++) {
    console.log(i, heights[i], i + 1, heights[i + 1]);
    if (heights[i] > heights[i + 1]) {
      pair = i + 2;
      break;
    }
  }

  return `${hyunsoo} ${pair}`;
}
  */

/** for문을 사용한 정답 
function naughtyHyunsoo(totalCount, heights = []) {
  const answer = [];

  // 깊은 복사
  const originalHeights = heights.slice();
  //   const originalHeights = Array.from(
  //     { length: totalCount },
  //     (_, i) => heights[i]
  //   );

  // 임의로 삽입 정렬 -> but, 그냥 아무 정렬 사용해도 무방함
  for (let i = 1; i < totalCount - 1; i++) {
    const cur = originalHeights[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (originalHeights[j] > cur) {
        originalHeights[j + 1] = originalHeights[j];
      } else {
        break;
      }
    }
    originalHeights[j + 1] = cur;
  }

  //   console.log(originalHeights, heights);

  for (let i = 0; i < totalCount; i++) {
    if (heights[i] !== originalHeights[i]) {
      answer.push(i + 1);
    }
  }

  return answer.join(" ");
}
  */

/** 내장함수 사용하기 */
function naughtyHyunsoo(totalCount = 0, heights = []) {
  const answer = [];
  const originalHeights = heights.slice();

  originalHeights.sort((a, b) => a - b);

  for (let i = 0; i < totalCount; i++) {
    if (originalHeights[i] !== heights[i]) {
      answer.push(i + 1);
      if (answer.length === 2) break;
    }
  }

  return answer.join(" ");
}

console.log(naughtyHyunsoo(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(naughtyHyunsoo(6, [120, 130, 150, 150, 130, 150]));
