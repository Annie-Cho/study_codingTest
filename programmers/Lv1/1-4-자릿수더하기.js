function solution(n){
    const result = String(n).split('')
    return result.reduce((acc, ele) => {
      return acc + Number(ele)
    }, 0)
}