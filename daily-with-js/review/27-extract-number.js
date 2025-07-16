/**
 * 숫자만 추출
 *
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 자연수로 만들어라.
 * ex) tge0a1h205er -> 1205
 */

function extractNumber(str = "") {
  // 정규식 패턴 사용하기
  const answer = str.match(/[0-9]/g).join("");
  return Number(answer); // parseInt(answer);

  // isNaN 사용하기
  //   let answer = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (!isNaN(str[i])) answer += str[i];
  //   }
  //   return Number(answer);
}

console.log(extractNumber("tge0a1h205er"));
