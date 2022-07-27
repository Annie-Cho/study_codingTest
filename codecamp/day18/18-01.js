/*
프로그래머스 : 완주하지 못한 선수
=> 여기서는 훨씬 더 적은 for문을 사용하여 효율성을 극대화 시키는 것이 관건!!

reference code는 filter()를 통하여 모든 배열에 접근하므로 my answer가 좀 더 빠르다..
*/
function solution(participant, completion) {
    /* my answer */
    let result = ''
    participant.sort()
    completion.sort()
    for(let i=0; i<participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i]
        }
    }
    return result

    /* reference code */
    // participant.sort()
    // completion.sort()
    // const answer = participant.filter((ele, i) => {
    //     return ele !== completion[i]
    // })
    // return answer[0]
}