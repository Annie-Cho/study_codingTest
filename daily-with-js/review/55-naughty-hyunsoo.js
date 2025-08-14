/**
 * 장난꾸러기 현수
 *
 * 반 학생들을 키가 작은 순서대로 키순을 세워 1번부터 N번까지 번호를 부여한다.
 * 이 때 현수가 본인보다 앞자리의 짝꿍과 자리를 바꾸었고 선생님은 이 사실을 모른채로 번호를 부여하였다.
 * 반 학생들의 키 정보가 주어질 때 현수가 받은 번호와 현수 짝꿍이 받은 번호를 차례로 출력하시오.
 *
 * ex1)[120, 125, 152, 130, 135, 135, 143, 127, 160]
 * => 3 8
 * => 3번 152가 현수이고, 8번 127이 현수 짝꿍이다.
 *
 * ex2)[120, 130, 150, 150, 130, 150]
 * => 3 5
 * => 3번 150이 현수이고, 5번 130이 현수 짝꿍이다.
 */

function naughtyHyunsoo(students = []) {
  const answer = [];

  const originalStudents = students.slice();
  originalStudents.sort((a, b) => a - b);

  for (let i = 0; i < students.length; i++) {
    if (students[i] !== originalStudents[i]) {
      answer.push(i + 1);
    }
  }

  return answer.join(" ");
}

console.log(naughtyHyunsoo([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(naughtyHyunsoo([120, 130, 150, 150, 130, 150]));
