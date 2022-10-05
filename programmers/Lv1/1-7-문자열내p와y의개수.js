/* my code */
function solution(s){
    let numP = 0
    let numY = 0
        s.toUpperCase().split('').forEach((ele) => {
        if(ele === 'P') {
            numP ++
        } else if(ele === 'Y') {
            numY ++
        }
         })
  
    return numP === numY ? true : false
}

/* reference code */ //객체를 이용하자!
// function solution(s){
//     const numbers = {P: 0, Y: 0}
    
//     const result = s.toUpperCase()
//     for(let i=0; i<result.length; i++) {
//         numbers[result[i]] === undefined ? numbers[result[i]] === 1 : numbers[result[i]] ++
//     }
    
//     return numbers.P === numbers.Y ? true: false
// }

/* reference code 2 */ //이미 만들어진 string을 활용하여 객체를 생성한 후 원하는 값을 얻자!
function solution(s) {
    const result = s.toUpperCase()
    const numbers = {}

    for(let i=0; i<result.length; i++) {
        numbers[result[i]] === undefined ? numbers[result[i]] = 1 : numbers[result[i]] ++
    }

    return numbers.P === numbers.Y
}