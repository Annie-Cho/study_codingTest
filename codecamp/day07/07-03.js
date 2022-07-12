/* !!! */

function solution(s) {
    var answer = true;
    
    /* my answer */
    // if((s.length === 4 || s.length === 6)) {
    // 	if(s.includes('e') === false && isNaN(s) === false) {
    //     return true
    //   } else {
    //     return false
    //   }
    // } else {
    //   return false
    // }
    
    /* reference code */
    if(s.length !== 4 && s.length !== 6) {
        answer = false
    } 
    
    for(let i=0; i<s.length; i++) {
        if(isNaN(s[i])) {
            answer = false
        }
    }
    
    return answer;
}