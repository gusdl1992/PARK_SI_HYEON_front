/*

    p.174 반복문
        - 반복 작업
        - 형태
            for( let i  = 0 ; i < 반복횟수 ; i++ ){
                문장
            }
            for( 초기값 ; 조건문 ; 증감식 ){ 실행코드; }
        
            1. let i = 0        : 반복을 시작할때 처음값 [ 초기값 ]
                i 를 0 부터 시작
            2. i < 반복횟수     : 반복을 할수 있는 조건 [ 조건을 충족 시 반복 실행 ]
                i는 반복횟수 보다 작으면
            3. 문장             : 반복시 실행되는 구역(코드)
            4. i++              : 1회 반복 후 실행되는 증감식 [ i + 1  ]

        - 실행순서
            1. [1-초기값] 변수에 처음값을 초기화
            2. [2-조건문] for{}안/반복문에 들어갈수 있는지 검사 [ t -> {} 안으로  f -> {} 밖으로 ]
            3. [3-실행문] 실행코드.
            4. [4-증감식] 실행문 후에 (초기값변수)증가 또는 감소.
                // [  초기값 1번만 실행되므로 증감식 이후 조건문으로 이동  ]
            5. [2-조건문] 조건검사.
            6. [3-실행문] 실행코드
            7. [4-증감식] 증감식
                //
            8. [2-조건문] 조건검사.
            9. [3-실행문] 실행코드
            10. [4-증감식] 증감식
                // 2조건문에 false 가 될때까지 반복.
*/

// 1. 우유 구매를 10번
console.log('우유구매')
for(let i = 0 ; i < 10 ; i++){
    console.log('우유구매')
    // - let i는 0 부터 10보다 작을때까지 1씩 증가 반복하면서 console.log('우유구매') 출력할꺼야. [ 총10회 ]
}


// p.178 예제1
for( let i = 0 ; i < 5 ; i++ ){ // for s
    // let i는  0부터 5미만 까지 1씩 증가 하면서 console.log 반복 실행. [ 0 1 2  3 4 총5회 실행 ]
    console.log(`${ i } 번째 반복입니다. `)
} // for e

// p.179 예제2
let output = 0 ;
for( let i = 1 ; i <= 100 ; i++ ){ // for s
    // - let i는 1부터 100이하 까지 1씩 증가 하면서 output에 i 를 더하는 반복 실행 [ 총100회 실행 ]
    output += i; // vs output = output + i;
    // - output에 i를 더한 값을 output에 저장
    console.log(`${i} 회 output : ${ output }`)
} // for e

 console.log(`1~100까지 숫자를 모더 더하면 ${ output } 입니다.`);

 // p.180 예제3 for문과 배열(인덱스:0부터 1씩 증가 / 배열내 인덱스 순회/확인 )의 관계
    // - 0부터 마지막인덱스( <= 배열.length-1 또는 < 배열.length ) 까지
    
const todos = [ '우유 구매', '업무 메일 확인하기', '필라테스 수업' ];
    //인덱스 : 0 , 1 , 2    // 길이 : 3
for( let i = 0 ; i < todos.length; i++ ){   //for s
    // i는  0 부터 todos 배열의 마지막 인덱스 까지 1씩 증가 하면서  console.log 반복 실행.
    console.log(`${i}번째 할 일 : ${todos[i]}`);
    // i는 반복변수 : 현재 반복되고 있는 변수의 상태 저장
    // 인덱스 대신에 i 활용.
}// for e


// p.180 역순.
for( let i = todos.length-1 ; i >= 0 ; i-- ){   //for s
    // i는 마지막 인덱스 부터 0 까지 1씩 감소 하면서 console.log 반복 실행
    console.log(`${i}번째 할 일 : ${todos[i]}`);

}// for e

let outPrint = '';  // 공백이 저장된 변수.
// 예2) 1부터 10 이하까지 1씩 증가 반복[ 한줄표기 ]; console.log() 하나당 줄바꿈 자동 

for( let i = 0 ; i < 10 ; i++){
    outPrint += `  ${i} `;  // 공백도 문자!
}
console.log(outPrint);


// 예3) 1부터 10 이하까지 1씩 증가 반복 [ ul 표시 ] 
outPrint = ''; // 위에서 사용했던 변수 공백으로 수정
for( let i = 1 ; i <= 10 ; i++ ){
    outPrint += ` <li> ${i} </li> ` // li 사용
}
// [ HTML출력 ]
document.querySelector('ul').innerHTML = outPrint;

// 예4) 1부터 10이하까지 1씩 증가 반복 [ 누적합계 ]
let sum = 0; // 반복전에는 누적합이 0
for( let i = 1 ; i <= 10 ; i++ ){
    sum += i; // i를 sum에 더한후  sum에 대입
}
/*
    예4 반복문 순서도.
        초기값 : i = 1   , sum = 0
        for 시작
            i               조건[ i <= 10 ]      실행문[ sum += i ]     증감식[ i++ ]
            i = 1           true                    0+1 => 1                    i = 2
            i = 2           true                    1+2 => 3                    i = 3  
            i = 3           true                    3+3 => 6                    i = 4   
            i = 4           true                    6+4 => 10                   i = 5   
            i = 5           true                    10+5 => 15                  i = 6   
            i = 6           true                    15+6 => 21                  i = 7   
            i = 7           true                    21+7 => 28                  i = 8    
            i = 8           true                    28+8 => 36                  i = 9     
            i = 9           true                    36+9 => 45                  i = 10     
            i = 10          true                    45+10 => 3                  i = 11      
            i = 11          flase 반복문 종료               


 */

//  예5) 1부터 100까지 7배수 누적 합계.
    // - 1. i는 0부터 100까지 7씩 증가
    sum = 0;
    for( let i = 0 ; i <= 100 ; i += 7 ){
        sum += i;
    }
    console.log(`1~100까지 7배수 합 : ${sum}`)
    // - 2. i는 1부터 100까지 7배수 i % 7 == 0 
    sum = 0;
    for( let i =1 ; i<=100 ; i++ ){
        if(i % 7 == 0){ sum += i; } // 만약에 i가 나누기 7을 했을떄 나머지가  0이면 i는 7의 배수
    }
    console.log(`1~100까지 7배수 합 : ${sum}`);


    // for 중첩 [ 상위 for문 1회전마다 하위 for문 모두 회전 ]
    for(let 부모 = 1 ; 부모 <= 5 ; 부모++){ // 부모 for start
        // - 부모는 1부터 5이하까지 1씩 증가 반복
        console.log(`======== ${부모}=========`)
        for(let 자식 = 1 ; 자식 <= 3 ; 자식++){ // 자식 for 시작
            console.log(`${부모}의 자식 : ${자식}`)
        }// 자식 for end

    }// 부모 for end

    // 예6) 구구단.
        // 1. 2단 만들기
    for(let 단 = 2 ; 단 < 3 ; 단++ ){ // 1for s
        for( let i = 1 ; i <= 9 ; i++ ){ // 2for s
            console.log(` ${단} X ${i} = ${단*i} `);
        } // 2 for e
    } // 1 for e

        // 2.  2~9단
    for(let 단 = 2 ; 단 <= 9 ; 단++ ){ // 1for s
        for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){ // 2for s
            console.log(` ${단} X ${곱} = ${단*곱} `);
        } // 2 for e
    } // 1 for e