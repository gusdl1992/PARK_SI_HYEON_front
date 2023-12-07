// p.102 : 상수와 변수


/*
    1. 상수만들기 [4단계]
        1. const        키워드 작성          왜? 상수인지 변수인지 식별용
        2. 상수명       이름[식별자]          왜? 상수가 여러개 있으므로 그중에서 구별
        3. =            대입연산자 [ 값을 변수에 넣는 역할 ]  
        4. 자료         저장할 값

*/
const pi = 3.141592

// 2. 상수 호출하는 방법 [ 상수 이름 작성]
console.log(pi); // 상수 출력
// console.log(김현수); // 김현수 is not defined !!! 키워드 X

// 3. 상수의 값을 변경은 불가능
// pi = 3.97; // Assignment to constant variable. 상수 변수에 할당 되었다는 오류

const r = 10;

// 4. 상수의 연산
console.log( 2 * pi * r ); 
// PI상수[상자] 안에 있는 값을 꺼내기 우선 = 상수 호출

// 5. 동일한 상수명 사용 [ 상수명은 식별용 이므로 중복 불가능  ]
// const pi = 3.97; // Identifier 'pi' has already been declared 식별자 pi가 이미 선언 되었다는 오류 메세지

// 6. 상수의 값 대입을 안했을떄. [ 상수 만들때 값을 넣는 과정 = 초기화 , 초기화가 없으면 오류 발생 ]
//const pi2; // Missing initializer in const declaration  -> const 선언에 초기화가 없습니다. 에러발생


// p.105 변수 만들기
/*
    1. 변수 만들기 [4단계]
        1. let
        2. 변수명
        3. =
        4. 값
*/
let pi3 = 3.141592;

// 2. 변수 호출
console.log(pi3);
console.log( "pi3 =" + pi3 ); // 연결 연산자 : "문자열" + 변수의값 => 문자열
console.log( `pi3 = ${pi3} `); // 템플릿 문자열 ` 문~자~~~~${ 변수/상수/자료 }~~~열 ` 

// 3. 변수의 값 변경 [ 값 변경시에도 변수 호출 후 다시 대입 ]
pi3 = 3.15;  console.log(pi3);

// 4. 변수의 연산
let r3 = 10;
console.log( 2 * pi3 * r3 );

// var 와 let 키워드 차이
let value1 = 10;
// let value1 = 10;     //불가능 , 초기화 1번 [ 동일한 변수명으로 선언시 선언불가]
var value2 = 10;
var value2 = 10;        // 가능 [ 동일한 이름이 있을경우 덮어쓴다. ]

// p.108 복합 대입 연산자
let value = 10;
    // 컴퓨터는 동시에 다발적으로 연산을 처리X 연산 하나씩 처리
value += 10;
    // VS
value = value + 10;
/*
    = 기준으로 오른쪽 연산
        1. 10          
        2. 10 + 10          // 호출 후 연산
        3. 20               // 연산 결과
        4. =                // 연산 후 대입
        5. value = 20       // 변수 수정
*/
console.log(value);         // 30 출력

// ******** JS에서 HTML(문자열 자료형) 를 작성할떄
let list = "";      // "list" 변수에 비문자열 넣은 상태로 선언

list += `<ul>`
list += `  <li> Hello </li>`
list += `  <li> JavaScript </li>`
list += `</ul>`

document.write(list);


// 예제 1 : 2개의 숫자를 입력 받아 더한 결과 값 을 html에 <h3> 안에 출력

let num1 = prompt("더 할 값을 입력 하시오");      // 숫자를 써도 문자열로 입력 받는다.  
num1 = Number(num1);                            // 문자열 숫자로 형변환
let num2 = prompt("더 할 값을 입력 하시오");
num2 = Number(num2)

let result = num1 + num2
let list2 = "";
list2 += `<h3> 예제1 결과 ${result}</h3>`
document.write(list2);


// 예제 2 : 2개의 숫자를 입력 받아 더 큰수를 html에 <h3> 안에 출력
let num3 = Number(prompt("큰 수 비교할 값을 입력 하시오")); // 입력을 먼저 받고 숫자로 형변환
let num4 = Number(prompt("큰 수 비교할 값을 입력 하시오"));

let result2 = num3 > num4 ? num3 : num4;  
// 삼항 연산자 : 조건 ? 참 : 거짓
document.write(`<h3> 예제2 결과 ${result2} </h3>`);  //  템플릿 문자열을 사용