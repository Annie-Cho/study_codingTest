# Level 1 Summary

## 배열, 문자열 메소드 총정리 ([1-16])

### 문자열(String)

- split()
  - string을 배열로 변환한다.

```javascript
const str = "hello world";
str.split(""); //한 단어씩 배열로 변환
str.split(" "); //공백을 기준으로 분리하여 변환
str.split(); //string전체를 배열로 감싸 변환
```

- padStart(targetLength, padString)
  - 문자열의 앞쪽에 padString을 채워넣을껀데 문자열 및 padString포함 총 길이는 targetLength이다.
  - padString에 아무것도 안 넣으면 자동적으로 공백이 들어간다.

```javascript
const str = "4444";
str.padStart(11, "*"); //'*******4444'
```

- padEnd(targetLength, padString)
  - 문자열의 뒷쪽에 padString을 채워넣을껀데 문자열 및 padString포함 총 길이는 targetLength이다.
  - padString에 아무것도 안 넣으면 자동적으로 공백이 들어간다.

```javascript
const str = "4444";
str.padEnd(11, "*"); //'4444*******'
```
<br>

### 배열(Array)

- fill(value, start, end)
  - value로 배열을 채우는데 start, end로 원하는 위치를 지정할 수 있다.

```javascript
const arr = [0, 0, 0, 0, 0, 0];
arr.fill("*", 0, -4); //['*', '*', 0, 0, 0, 0]
```

- join(seperator)
  - seperator를 사용하여 배열을 하나의 문자열로 변환한다.(합쳐준다)

```javascript
const arr = ["h", "e", "l", "l", "o"];
arr.join(); //'h,e,l,l,o' 자동적으로 ,(컴마)가 들어간 상태로 문자열이 반환된다.
arr.join(""); //'hello' 빈칸없이 하나의 문자열로 합쳐준다.
arr.join(" "); //'h e l l o' 빈칸을 사이에 두고 문자열로 합쳐진다.
```
<br>

- splice(start, deleteCount, item1, item2, ...)
  - 배열의 기존 요소 삭제 또는 교체 및 새로운 요소를 추가하는 메소드
    - start : 배열의 인덱스 값
    - deleteCount : 배열에서 제거할 요소의 갯수
    - item1, item2, ... : 배열에 추가할 요소

```javascript
const months = ["January", "February", "April", "May"];
months.splice(2, 0, "March"); //['January', 'February', 'March', 'April', 'May'] => 'March'추가
months.splice(3, 2); //['January', 'February', 'March']  => 'April', 'May' 삭제
months.splice(4, 0, "April", "May"); //['January', 'February', 'March', 'April', 'May'] => 'April', 'May' 추가
```

### 문자열, 배열 공통

- slice(start, end)
  - start와 end를 활용하여 문자열 및 배열에서 원하는 위치와 끝까지의 값을 반환해준다.
  - end값이 기입되었을 경우, end의 앞자리까지 반환해준다.

```javascript
//문자열
const str = "hello world";
str.slice(5); //' world'
str.slice(1, 4); //'ell'

//배열
const arr = ["h", "e", "l", "l", "o"];
arr.slice(2, 4); //['l', 'l']
arr.slice(-2); //['l', 'o'] => 뒤에서 2개를 가져온다.
```
<br>

## 약수/자연수/정수 ([1-3], [1-12])

- 약수 : 떨어지는 수
- 자연수 : 1이상의 모든 정수
- 정수 : 양의 정수(자연수), 0, 음의 정수를 모두 포함한 영역

<br>

## 제곱근 구하기 ([1-5])

- 제곱근 구하기

```javascript
//거듭 제곱
const num1 = 5 ** 2; //25

//제곱근 구하는 메소드
const num2 = Math.pow(5, 2); //25
```
<br>

## 단항연산자(+)를 이용하여 손쉽게 문자열을 숫자로 변환하기 ([1-9])

- 단항연산자 +를 문자열 앞에 붙이면 손쉽게 숫자로 변환시킬 수 있다.

```javascript
+"121"; // 숫자 121
```

- 참고 : [JS튜토리얼](https://developer.mozilla.org/ko/docs/Web/JavaScript/Language_Overview)

<br>

## 고정 크기 배열 선언과 동시에 0으로 초기하기 ([1-11])

```javascript
const result = new Array(5).fill(0); //[0, 0, 0, 0, 0]
```
<br>

## 등차수열의 합(가우스) ([1-14])

```text
01 + 02 + 03 + 04 + 05
05 + 04 + 03 + 02 + 01
----------------------
06   06   06   06   06
```

- 1 ~ 5와 5 ~ 1의 값들을 각각 더했을 때 위와 같이 6의 값이 동일하게 나오는 것을 확인할 수 있다. 06 _ 5만큼 해주면 원하는 수를 얻을 수 있을 것 같지만, 5를 곱해버리면 현재 1 ~ 5까지의 값들이 2번 더해진 격이 되므로 5 / 2를 해준 값을 곱해주면 더한 값이 나온다. 따라서 1 ~ 5까지의 합은 (1 + 5) _ (5 / 2)
- [등차수열의 합](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=junhyuk7272&logNo=221247061276)
<br>

## indexOf() : Array에서 특정 값 찾기 ([1-15])

```javascript
const arr = ["hi", "hello", "안녕"];
const result = arr.indexOf("hello"); //1
```
