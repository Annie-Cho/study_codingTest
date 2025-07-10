/* 배열의 요소 개수와 각 요소의 값을 출력합니다. */
#include <stdio.h>

int main(void){
    int i;
    int a[5] = {1, 2, 3, 4, 5};     // 초기화 - 고정크기.  크기보다 작게 초기화했다면 나머지 요소는 0으로 초기화된다.
    // int a[] = {1, 2, 3, 4, 5, 6}; // 초기화 - 컴파일 시 크기가 고정된다.
    int na = sizeof(a) / sizeof(a[0]);
    printf("배열 a의 요소 개수는 %d이다.\n", na);

    for(i=0; i<na; i++){
        printf("a[%d] = %d\n", i, a[i]);
    }

    return 0;
}