/* int형 배열을 동적으로 생성하고 해제합니다. */
#include <stdio.h>
#include <stdlib.h>

int main(void){
    int total;
    int* x;

    printf("요소 개수 : ");
    scanf("%d", &total);

    x = calloc(total, sizeof(int));

    if(x == NULL){
        puts("메모리 확보에 실패했습니다.");
    } else{
        printf("%d개의 정수를 입력하세요.\n", total);
        for(int i=0; i<total; i++){
            printf("a[%d] : ", i);
            scanf("%d", &x[i]);
        }

        printf("각 요솟값은 아래와 같습니다.\n");
        for(int i=0; i<total; i++){
            printf("a[%d] = %d\n", i, x[i]);
        }

        free(x);
    }

    return 0;
}
