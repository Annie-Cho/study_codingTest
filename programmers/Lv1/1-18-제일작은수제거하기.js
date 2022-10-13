/*
[Array]
splice(start, deleteCount, item1, item2, ...)
- 배열의 기존 요소 삭제 또는 교체 및 새로운 요소를 추가하는 메소드
    - start : 배열의 인덱스 값
    - deleteCount : 배열에서 제거할 요소의 갯수
    - item1, item2, ... : 배열에 추가할 요소
ex)
const months = ['January', 'February', 'April', 'May']
months.splice(2, 0, 'March')    //['January', 'February', 'March', 'April', 'May'] => 'March'추가
months.splice(3, 2)             //['January', 'February', 'March']  => 'April', 'May' 삭제
months.splice(4, 0, 'April', 'May')     //['January', 'February', 'March', 'April', 'May'] => 'April', 'May' 추가
*/
function solution(arr) {
  const min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  return arr.length > 0 ? arr : [-1];
}
