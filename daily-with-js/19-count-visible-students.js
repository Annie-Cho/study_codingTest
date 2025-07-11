/**
 * 보이는 학생
 *
 * 선생님이 N(1<=N<=100)명의 학생을 일렬로 세웠을 떄,
 * 맨 앞에 서있는 선생님이 볼 수 있는 학생 수를 구하시오.
 * (앞에 서있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않음)
 *
 * ex)
 * 130 135 148 140 145 150 150 153
 * => 5명(130, 135, 148, 150, 153)
 */

function countVisibleStudents(students) {
  let lastStudent = students[0];
  let answer = 1;

  for (let i = 1; i < students.length; i++) {
    if (students[i] > lastStudent) {
      answer++;
      lastStudent = students[i];
    }
  }

  return answer;
}

console.log(countVisibleStudents([130, 135, 148, 140, 145, 150, 150, 153]));
