

// p.267
// 1. toFixed(소수점)   : 해당 소수점 까지 출력[반올림]
const i = 123.456789;
console.log(i.toFixed(2));  // 123.46
console.log(i.toFixed(3));  // 123.457

// 2. Number(숫자)  :유효성검사 [ 자료형에 따라 연산이 달라지니까.  ]
const m = Number('숫자로 변환활 수 없는 경우');     // Number('문자열');
console.log(m);                                    // m : NaN
console.log(m === NaN);                            // false // NaN 비교 X
console.log(Number.isNaN(m));                      // true  // isNaN() 함수 이용한 비교 O

// 3. isFinite( 연산 ) : 유효성검사 : 연산의 결과가 무한대 처리 되면 오버플로우 발생 
const n = 10/0;
console.log(n);
const o = -10/0;
console.log(o);
console.log(Number.isFinite(n));    // false
console.log(Number.isFinite(o));
console.log(Number.isFinite(1));    // true 셀수있는 값으로 true 반환
console.log(Number.isFinite(10));

// p.269
// 1. .trim() : 문자열 양쪽끝에 공백 없애기 왜??? 의미 있는 공백 , 의미 없는 공백(공백 메모리)
console.log(`       앞과                뒤에 공백도 들어가고           `.trim() );

// 2. .split() : 특정 문자열 기준으로 자를떄 . [ 배열 반환 ]

const timeList = "12:30\n15:21";
console.log(timeList);
const timeArray =  timeList.split("\n"); // 2조각
console.log(timeArray);
const time = timeArray[0];
console.log(time);
const hour = time.split(":");
console.log(hour);

// 3. JSON : 다른 애플리케이션과[ JS 아닌 프로그램] 통신할때 데이터 교환 목적 활용
    // 1. JS 객체  ----> JSON문자열 : JSON.stringify()
    // 2. JSON문자열 ----> JS객체 : JSON.parse()


// p. 356. 좀 더 알아보기2
// localStorage [ JS가 꺼지고/사라져도 사라지지 않는 메모리 ] *개방 보안 취약
    // - localStorage       : 브라우저[크롬,엣지]에 저장 , 브라우저 자체가 꺼지면 사라짐 , 다른 탭에서 공유
    // - sessionStorage     : 브라우저[크롬,엣지]에 저장 , 탭 꺼지면 메모리도 사라짐.   , 같은 탭에서 공유
// localStorage.setItem( 키 , 값 );
localStorage.setItem( '이름' , '유재석' );  // '이름' 이라는 키로 '유재석' 값을 저장.
console.log(localStorage.getItem('이름'));

        // vs

// JS메모리 저장 [ JS가 꺼지면/사라지면 같이 사라짐. HTML 새로고침 바뀌면 JS메모리 초기화 ]
const _obhect = { 이름 : '유재석' }
console.log(_obhect)


// 예2) localStorage : 브라우저(소프트웨어)에 저장이 되는데... 브라우저는 객체를 몰라요.. 문자열..
const 회원목록 = [ {이름 : '유재석'} , {이름 : '강호동'} ]
localStorage.setItem('회원정보목록' , [ { 이름 : '유재석'}, { 이름 : '강호동' } ]);

localStorage.setItem('회원정보목록2' ,  JSON.stringify(회원목록));
