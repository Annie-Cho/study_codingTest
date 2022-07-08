/* my answer */
function evenOdd(num) {
	if(num === undefined || typeof(num) !== "number") {
    return "값을 잘못입력하셨습니다."
  }

  if(num === 0) {
    console.log("Zero")
  } else if(num % 2 === 0) {
    console.log("Even")
  } else {
    console.log("Odd")
  }
}

evenOdd(12)
evenOdd(15)
evenOdd(0)
evenOdd("str")