function solution(s) {
  /* my answer */
  //   const str = s.split(" ");
  //   const result = [];
  //   for (let i = 0; i < str.length; i++) {
  //     result.push(
  //       str[i]
  //         .split("")
  //         .map((ele, idx) => {
  //           return idx % 2 === 0 ? ele.toUpperCase() : ele.toLowerCase();
  //         })
  //         .join("")
  //     );
  //   }
  //   return result.join(" ");

  /* reference code */
  const answer = s
    .split(" ")
    .map((ele1) => {
      return ele1
        .split("")
        .map((ele2, idx2) => {
          return idx2 % 2 === 0 ? ele2.toUpperCase() : ele2.toLowerCase();
        })
        .join("");
    })
    .join(" ");

  return answer;
}
