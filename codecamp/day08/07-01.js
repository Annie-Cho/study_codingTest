/* 프로그래머스 : 문자열 내 p와 y의 개수 */

function solution(s){
    // var answer = true;

    /* my answer */
    // let countP = 0
    // let countY = 0
    // let result = s.toLowerCase()
    // for(let i=0; i<result.length; i++) {
    //     if(result[i] === 'p') {
    //         countP ++
    //     } else if(result[i] === 'y') {
    //         countY ++
    //     }
    // }
    
    /* reference code 1*/
    // let result = s.toLowerCase()
    // let obj = {p: 0, y: 0}
    // for(let i=0; i<result.length; i++) {
    //     // console.log(obj, s[i], obj[result[i]])
    //     obj[result[i]] === undefined ? obj[result[i]] = 1 : obj[result[i]]++
    //     // 객체 프로퍼티가 생성되는 건 막지는 못했지만 문제에 영향이 되지는 않는다.
    //     // obj[result[i]] ++
    // }
    // console.log(obj)
    
    
    /* reference code 2 => 1번을 보안하여 만든 코드.. 객체 프로퍼티를 어차피 키값을 통해서 만드니까 굳이 p, y를 먼저 객체로 안 만들어줘도 됨*/
    // let result = s.toLowerCase()
    // let obj = {}
    // for(let i=0; i<result.length; i++) {
    //     obj[result[i]] === undefined ? obj[result[i]] = 1 : obj[result[i]]++
    // }
    // console.log(obj)
    
    
    /* reference code 3 */
    let obj = {}
    s = s.toLowerCase()
    let arr = s.split('')
    
    arr.forEach((ele, idx) => {
        obj[ele] === undefined ? obj[ele] = 1 : obj[ele]++
    })
    console.log(obj)
    return obj.p === obj.y
    
    // return answer = countP !== countY ? false : true 
    // return countP !== countY ? false : true 
}