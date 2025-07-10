/** 양의 정수를 입력하고 자릿수를 출력하시오.
 * 예를 들어 135인 경우 '그 수는 3자리입니다.', 1314인 경우 '그 수는 4자리입니다.' 라고 출력하시오.
 */
#include <stdio.h>

int main(void){
    int number, count = 0;

    printf("양의 정수 : ");
    scanf("%d", &number);

    while(number > 0){
        number /= 10;
        count++;
    }
    printf("그 수는 %d자리입니다.", count);
    return 0;
}