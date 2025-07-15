/**
 * 숫자만 추출
 *
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 자연수로 만들어라.
 * ex) tge0a1h205er -> 1205
 */

function extractNumber(newString) {
  /* 정규식 활용하기 
  const numberString = newString.match(/[0-9]/g);
  return Number(numberString.join(""));
  */

  /* 내장함수 활용하기 */
  let numberString = "";
  for (let word of newString) {
    if (!isNaN(word)) {
      numberString += word;
    }
  }

  return Number(numberString); // or parseInt(numberString)

  /* 만약 리턴 시 Number나 parseInt를 사용하지 말라고 한 경우
  let number = 0;
  for (let word of newString) {
    if (!isNaN(word)) {
      number = number * 10 + Number(word);
    }
  }
  return number;
   */
}

console.log(extractNumber("tge0a1h205er"));
