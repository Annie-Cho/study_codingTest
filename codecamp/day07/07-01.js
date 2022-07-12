function solution(s) {
    var answer = '';
    
    /* my answer */
  	// let standard = Math.floor(s.length/2)
  	// if(s.length % 2 === 0) {
  	// answer = s.charAt(standard-1) + s.charAt(standard)
  	// } else {
  	// answer = s.charAt(standard)
  	// }
    
    /* reference code 1 */
    // let center = Math.floor(s.length/2)
    // let answer2 = s[center]
    // if(s.lengh % 2 === 0) {
    //     answer2 = s[center-1] + answer2
    // }
    
    
	  /* reference code 2 */
    let center = Math.floor(s.length/2)
    answer = s.length % 2 === 1? s[center] : s.slice(center-1, center+1)
    
    return answer;
}