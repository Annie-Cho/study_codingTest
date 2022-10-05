function solution(n) {
    const result = Math.sqrt(n)
    if(Number.isInteger(result)) {
        return (result + 1) ** 2            //거듭제곱
        // return Math.pow(result+1, 2)     //제곱근 구하기 메소드
    } else {
        return -1
    }
}
