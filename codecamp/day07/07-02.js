function solution(seoul) {
    var answer = '';
    
    /* my answer */
    // for(let i=0; i<seoul.length; i++) {
    //   if(seoul[i] === "Kim") {
    //     answer = `김서방은 ${i}에 있다`
    //     break;
    //   }
    // }
    // return answer;
    
    /* reference code */
    const x = seoul.indexOf('Kim')
    console.log(x)
    return `김서방은 ${x}에 있다`
    
}