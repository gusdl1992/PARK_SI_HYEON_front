

// p.109 ~ 110 증감 연산자
    // - 복합대입연산자 간략하게 사용하려고
    // - 증감연산자는 1씩 증가 또는 1씩 감소 만 가능.
let value1 = 10;

value1 = value1 + 1;        // 1. 변수 호출하고 연산후 결과를 변수에 대입
    // VS       1번과 2번 차이점 : 없다
console.log(value1)    
value1 += 1;                // 2. 1번 간략하게 하기 위해
    // VS       2번과 3번 차이점 : 없다 [ 단 증감연산자는 1 증가 / 감소 만 가능 ]
console.log(value1)
value1++;                   // 3. 2번 간략하게 하기 위해
    // VS       3번과 4번 차이점 : 없다 [ 선위 : 작업하기 전에 증가 , 후위 : 작업 후에 증가]
console.log(value1)
++value1;                   // 3. 2번 간략하게 하기 위해
console.log(value1)

// p.110

let number1 = 10; number1++; console.log( number1 ); // 후위 = 11
let number2 = 10; ++number2; console.log( number2 ); // 전위 = 11

// 차이점 1 : console.log() 우선 ? ++1 증가 우선 ?
let number3 = 10; console.log( number3++ ); // 후위 = 10  출력 후 증가
console.log( number3++ );                   // 11
let number4 = 10; console.log( ++number4 ); // 전위 = 11  출력 전 증가

// 차이점 2 : + , = 우선 ? ++1 증가 우선 ?
let result1 = number4++ +10; console.log( result1 ); //  = 21  대입 후 number4 증가
console.log( result1 );                              //  = 21  result1 증가X
console.log( number4 );                              //  = 12

// p.113\

let string1 ;   // undefined 
let string2 = 0;
let string3 ="";
let string4 = " ";