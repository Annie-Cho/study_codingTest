function solution(n) {

    /* my answer */
    // var answer = n;
  	// let middleNum = Math.floor(n/2)
  	// for(let i=1; i<=middleNum; i++) {
  	// if(n % i === 0) {
  	// answer += i
  	// }
  	// }
    
    /* reference code 1 */
    // var answer = n;
    // for(let i=1; i<=n/2; i++) {
    //   if(n % i === 0) {
    //     answer += i
    //   }
    // }
    
    /* reference code 2 */
    const arr = new Array(n).fill(1)
    
    answer = arr.reduce((cur, ele, idx) => {
        const num = ele + idx
        return n % num !== 0? cur: cur+num
        /* 약수가 아니라면 그대로 return cur, 약수라면 cur + num 해줌 */
    }, 0)
    
    return answer;
}