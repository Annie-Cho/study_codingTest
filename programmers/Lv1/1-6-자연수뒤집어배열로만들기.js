function solution(n) {
	return String(n).split('').reverse().map((ele) => {
    return Number(ele)
  })
}