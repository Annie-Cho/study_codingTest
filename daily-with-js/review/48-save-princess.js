/**
 * 공주 구하기
 *
 * 정보 왕국의 왕자 N명이 이웃 나라 외동딸 공주를 구하러 간다.
 * 왕자들을 나이순으로 1번부터 N번까지 차례로 번호를 매긴다.
 * 그리고 1번 왕자부터 N번 왕자까지 시계 방향으로 돌아가며 동그랗게 앉게한다.
 * 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외친다.
 * 한 왕자가 특정숫자 K를 외치면 그 왕자는 제외되고 다음 왕자부터 다시 1부터 번호를 외친다.
 * ex) 1(1!) 2(2!) 3(삭제) 4(1!) 5(2!) 6(삭제)
 *
 * 마지막 남은 왕자의 번호를 출력하시오.
 * ex) 8 3 (8명, 3번)
 * => 7
 */

function savePrincess(total, no) {
  const queue = Array.from({ length: total }, (_, i) => i + 1);

  while (queue.length !== 1) {
    for (let i = 0; i < no - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }

  return queue.pop();
}

console.log(savePrincess(8, 3));
