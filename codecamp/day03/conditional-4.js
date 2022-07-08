// 1월 : 31일
// 2월 : 28일
// 3월 : 31일
// 4월 : 30일
// 5월 : 31일
// 6월 : 30일
// 7월 : 31일
// 8월 : 31일s
// 9월 : 30일
// 10월 : 31일
// 11월 : 30일
// 12월 : 31일


/* my answer */
function days(month) {
    if(month === 1 || month === 3 || month === 5 || 
       month === 7 || month === 8 || month === 10 || 
       month === 12) {
      return 31
    } else if(month === 4 || month === 6 || month === 9 || 
          month === 11) {
        return 30
    } else {
        return 28
    }
  }
  
  days(1)
  days(2)
  days(4)
  
  
  
  /* 객체로도 풀 수 있다!! -> 좀 더 간결하게 푸는 법! */
  const monthList = {
    1: 31,
    2: 28,
    3: 31, 
    4: 30,
    5: 31, 
    6: 31,
    7: 31, 
    8: 31, 
    9: 30, 
    10: 31,
    11: 30, 
    12: 31
  }
  
  function days(month) {
    return monthList[month]
  }