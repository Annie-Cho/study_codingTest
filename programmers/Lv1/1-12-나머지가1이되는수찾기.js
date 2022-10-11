//문제 : https://school.programmers.co.kr/learn/courses/30/lessons/87389
//자연수 : 1이상의 모든 정수

function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
}
