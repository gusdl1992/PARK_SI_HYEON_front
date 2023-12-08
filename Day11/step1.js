

// p.116 자료형 변환

// 1. 문자열 입력
const input = prompt("message");
const input1 = prompt("message2" , "기본값");

    // 코드 실행 순서
    // 1. const input2 = prompt("message2" , "기본값");    : [실행]클라이언트에게 입력 받는 알람 함수
    // 2. prompt() 결과/반환/리턴된 값                      : [실행 결과]
    // 3. const input = 리턴된 값                          : [ 실행 결과 저장 ]
alert(input);


// 2. 불 입력 [ confirm() : 확인[true]/취소[false] 를 반환 하는 알람 함수]

const input2 = confirm("수락하시겠습니까?");
alert(input2);


// 3. 숫자 자료형으로 변환하기 [ Number() : 문자열 자료형을 숫자형으로 변환 함수 ]
console.log(Number("273"));
console.log(Number("a"));       // NaN => not a number // 숫자로 표현 할수 없어..
console.log(Number("true"));    // true = 1 , false = 0     

// 4. 숫자 연산을 사용해 자료형 변환하기 [ *단 숫자 + "문자열"  : 연결 연산자 조심 ]

console.log("52"-3);        // 49
console.log(true - 1);      // 0 = falses

// 5. 문자열 자료형으로 변환하기 [ String() : 문자열 변환 함수 vs 데이터 + ""]

console.log(String(52.273));    // 52.273 -> "52.273"
console.log(String(true));      // true -> "true"

console.log(52.273+"");         // 52.273 -> "52.273" [ 연결연산자 이용 ]

// 6. 불 자료형으로 변환하기 [ boolean() : 불 자료형으로 변환 함수 ]
console.log(Boolean(0))         // false
console.log(Boolean(NaN))       // false
console.log(Boolean(""))        // false
// console.log(Boolean(nell))      // false
let 변수;
console.log(Boolean(변수))       // false




// 7. 논리 부정 연산자를 사용해 자료형 변환하기
console.log( !273 );            // 0 -> false , 1 - > true 273 -> true !273 -> false
console.log( !!273 );           // 273 -> true !273 -> false !!273 -> true
console.log( !!0 );             // 0 -> false !0 -> true !!0 -> false


// 124p 예제 inch 단위를 cm 단위로 변경하기

// 숫자를 입력 받습니다.
const rawInput = prompt("inch 단위의 숫자를 입력해주세요.");
// 입력받은 데이터를 숫자형으로 변경하고 cm 단위로 변경합니다.
const inch = Number(rawInput);
const cm = inch * 2.54;
// 출력합니다.
alert(`${inch}inch는 ${cm}cm 입니다.`);

// 앞으로 웹개발의 방향

function 변환기능(){
    const 인치 = document.querySelector("input");
    console.log(인치.value);
        // document = HTML 문서
        // query = 질의 / 요청
        // Selector = 선택 
            // document.querySelector() : HTML에 요소 선택
            // HTML 요소를  JS의 변수/객체 로 가져오기 함수
        
        // -------> 처리 -----> java에게 통신 보내기
        // 결과 = input에 입력받은 value를 h3[ innerHTML= 마크업 사이에 ] 대입
        document.querySelector('h3').innerHTML = 인치.value
}


// p125 확인문제

// 1번 문제  정답  :3
// 2번 문제 String() : 문자열 형변환 , Boolean() : 불 타입 형변환 


// p.125 확인문제 3번
const cm정수 = prompt("cm 단위의 숫자를 입력해주세요.");
const 인치 = Number(cm정수) / 2.54;
alert(`${cm정수}cm는 ${인치}inch 입니다.`);

//4번 문제
let 반지름 = Number(prompt('원의 반지름을 입력해주세요.'));
console.log(` 원의 넓이 : ${3.14 * 반지름 * 반지름} / 원의 둘레 : ${2 * 3.14 * 반지름} `);

//5번문제
const 금액 = prompt("달러 단위의 금액을 입력하세요");
const 달러 = Number(금액);
const 원화 = 달러*1207;
console.log(`달러 : ${달러} -> 원화 : ${원화}`)

/*  6번문제 1. 계산기 , 2. 키오스크 , 3. 프린터 , 4. 엘리베이터 , 5. 문자메시지 등등
    
        - 각 생활에서 사용되는 기계/프로그램들 예시 만들기 [ 예시6번 ]
            - 키오스크 , 엘리베이터 , 자율주행 자동차
            예) 편의점 라면포트기
            1. 저장/변수 5개    : 온도 , 면종류 , 시간 , 온수상태 , 완료상태
            2. 기능/함수 5개    : 시작 , 물추가 , 상태변경 , 조리시간추가 , 변종류 선택
            3. 경우의수  5개    : 용기있다/없다 , 조리시간 완료/조리중 , 상태 점검중/사용가능 , 온수부족/충분 , 온도 최대값
            4. 1 ~ 3 시각화 그림
        


    층선택 , 현재층 , 문상태 , 작동상태 , 온도(공기) 상태
    

*/