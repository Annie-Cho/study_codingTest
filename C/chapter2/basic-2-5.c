/* 배열 요소의 최댓값을 구합니다(값을 입력합니다) */
#include <stdio.h>
#include <stdlib.h>

int maxof(int a[], int length){
    int max = a[0];

    for(int i=1; i<length; i++){
        if(max < a[i]){
            max = a[i];
        }
    }

    return max;
}

int main(void){
    int totalPerson;
    int* heights;

    printf("사람 수 : ");
    scanf("%d", &totalPerson);

    heights = calloc(totalPerson, sizeof(int));
    if(heights == NULL){
        printf("메모리 확보에 실패하였습니다.\n");
        return 0;
    }

    printf("%d 사람의 키를 입력하세요.\n", totalPerson);
    for(int i=0; i<totalPerson; i++){
        printf("height[%d] : ", i);
        scanf("%d", &heights[i]);
    }

    printf("최댓값은 %d입니다.", maxof(heights, totalPerson));
    
    free(heights);
    return 0;
}