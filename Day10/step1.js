
console.log("자바 스크립트 실행2");

// p.90

console.log(); // 크롬 f12 개발자 도구에 출력하는 함수

console.log( 5+3*2 );
console.log( (5+3)*2 );

console.log( 5-3*2 ); // -1

console.log( 10%2 ); // 나머지 값
console.log( 10%3 ); // 나머지 값 1
console.log( 10%4 ); // 나머지 값 2

console.log( 10/2 ) // 나눈 값 5
console.log( 10/3 ) // 나눈 값 3.3333333333333335

// 몫 구하기 [ parseInt() : 정수로 변환해주는 함수 = 소수점 버리기 ]

console.log ( parseInt(10/3)) // 3.3333333333333335 -> 3

// p.90 ~ 91
console.log (true);
console.log (false);

console.log ( 52 > 273 );                               // 52가 273 보다 크다   // false
console.log ( 52 < 273 );                               // 52가 273 보다 작다   // true
console.log ( 10 === 10 ); console.log ( 10 == 10 );    // true  , true
console.log ( 10 === "10" ); console.log ( 10 == "10" );// false , true
console.log ( '가방'>'하마'); //false
    // 0 1 2 3 4 ~~ , a b c d ~~ , ㄱ ㄴ ㄷ ㄹ 

console.log( 52 >= 273 ); // 크거나 같다 false
console.log( 52 <= 273 ); // 작거나 같다 true
console.log( 10 != 11 );  // 10 과 11은 다르다. true

console.log( !true );     // true -> false
console.log( !false );     // false -> true

console.log(  true && true);    // true 그리고 true => true
console.log( true && false );   // true 그리고 false => false       
console.log( false && true );   // false 그리고 true => false
console.log( false && false );  // false 그리고 false => false

console.log( true || true );    // true 또는 true => true
console.log( true || false );   // true 또는 false => true
console.log( false || true );   // false 또는 true => true
console.log( false || false );  // false 또는 false => false

// p.96 ~ 97 자료형 검사 ( 현재 자료가 숫자인가? 문자열인가? 불인가? 확인 작업 )
    // - 왜?? 유효성검사[ 데이터가 확인? -- 자료형에 마다 다른 로직/기능 작업 ]

console.log( typeof("안녕하세요") ); // "안녕하세요" 의 자료형 확인 string[문자열]
console.log( typeof(273) );         // 273의 자료형 확인 number[숫자]
console.log( typeof(true) );        // true의 자료형 확인 boolean[불]

console.log( typeof "안녕하세요" );
console.log( typeof 50 );   console.log( typeof (50-30) );   
console.log( typeof false );console.log( typeof ( 50<30 ) );    

// p.98 *템플릿 문자열* (서로 다른 자료형들을 존재할때는 + 연결연산자)
console.log( "표현식 273 + 52 의 값은 " + (273+52) + " 입니다 " );
    // 문자열 + 숫자 + 문자열
    // +연결연산자 이용하면 되지만 .. 너무많으면 복잡해진다.

console.log( `표현식 273 + 52 의 값은 ${273+52} 입니다.` );
    // `백틱 (탭 위에 `)
    // 1. ``  으로 전체를 감싼다.
    // 2. 데이터를 출력할 위치에 ${ 데이터 }

// p.99
console.log( 1 == "1" );        // 데이터만 비교 했을떄는 같다. [ 자료형 비교X ]
console.log( false == 0 );      // false는 0과 같다. true 는 1  [ 2지수 -> 0.1 -> false,true ]
console.log( "" == [] );        // 빈문자열 과 빈배열과 같은 의미
console.log( 0 == [] );         // 0 과 빈배열과 같은 값 의미


/*
// p.100 마무리 확인문제
    1. 불 , 숫자 ,숫자 ,불
    2. # 연습문제 , ////
    3. 
        녕
        하
        세
        요
    
    4.
        console.log(2+2-2*2/2*2);  // 0
        console.log(2-2+2/2*2+2);  // 4

*/

