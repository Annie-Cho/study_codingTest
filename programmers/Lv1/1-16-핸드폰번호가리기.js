/*
[String]
* split() : string을 배열로 변환한다.
* ex) split('') : 한 단어씩 배열로 변환, split(' ') : 띄어쓰기를 기준으로 분리하여 변환, split() : string 전체를 배열로 감싸 변환

* padStart(targetLength, padString) : 문자열의 앞쪽에 padString을 채워넣을껀데 문자열 및 padString포함 총 길이는 targetLength이다.
* ex) str = '4444'; str.padStart(11, '*') => *******4444
* padString에 아무것도 안 넣으면 자동적으로 공백이 들어간다.

* padEnd(targetLength, padString) : 문자열의 뒷쪽에 padString을 채워넣을껀데 문자열 및 padString포함 총 길이는 targetLengthㅇ다.
* ex) str = '4444'; str.padEnd(11, '*') => '4444*******'
* padString에 아무것도 안 넣으면 자동적으로 공백이 들어간다.

[Array]
* fill(value, start, end) : value로 배열을 채우는데 start, end로 원하는 위치를 지정할 수 있다.
* ex) arr.fill('*', 0, -4) 

* join(seperator) : seperator를 사용하여 배열을 하나의 문자열로 변환한다.(합쳐준다)
* ex) arr.join() : 자동적으로 ,(컴마)가 들어간 상태로 문자열이 반환된다.(a,b,c 이런식으로), join('') : 빈칸없이 하나의 문자열로 합쳐준다. join(' ') : 빈칸을 사이에 두고 문자열로 합쳐진다.

[String, Array 공통]
* slice(start, end) : start와 end를 활용하여 문자열 및 배열에서 원하는 위치와 끝까지의 값을 반환해준다.
* ex) str.slice(5), str.slice(1, 4), arr.slice(2, 4), arr.slice(-2) : 뒤에서 2개

*/

function solution(phone_number) {
  /* code 1 */
  // return phone_number.split('').fill('*', 0, -4).join('')

  /* code 2 */
  return phone_number.slice(-4).padStart(phone_number.length, "*");
}
