/* n단의 피라미드를 출력하는 함수를 작성하시오 */
// #include <stdio.h>

// void pyramid(int n){
//     int i, j, k, l;

//     for(i=0; i<n; i++){
//         for(j=0; j<(n*2-1)/2-i; j++){
//             printf("_");
//         };
        
//         for(k=0; k<(n*2-1); k+=2){
//             printf("*");
//         }
//         printf("\n");
//     }
// }

// int main(void){
//     int number;

//     printf("몇 단 피라미드입니까? ");
//     scanf("%d", &number);

//     pyramid(number);

//     return 0;
// }