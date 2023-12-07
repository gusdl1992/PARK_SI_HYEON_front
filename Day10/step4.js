

/* 연산자 연습 문제 */


// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력

let ex1Num1 = Number(prompt("국어 성적을 입력 하시오"));
let ex1Num2 = Number(prompt("영어 성적을 입력 하시오"));
let ex1Num3 = Number(prompt("수학 성적을 입력 하시오"));
let ex1Result = ex1Num1 + ex1Num2 + ex1Num3;
let ex1Average = parseInt(ex1Result/3);
console.log(`국어 : ${ex1Num1} 영어 : ${ex1Num2} 수학 : ${ex1Num3}  총점 : ${ex1Result}  평균 : ${ex1Average}`);




// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력
const pi = 3.14;
let ex2Num1 = Number(prompt("문제2 반지름을 입력 하시오"));
let ex2Result = ex2Num1 * ex2Num1 * pi;
console.log(`입력 받은 반지름 : ${ex2Num1} 원 넓이 : ${ex2Result}`)

// -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력[- 54.5   84.3 두 실수 입력시   결과 : 64%]
let ex3Num1 = Number(prompt("문제3 문제 1번 실수 를 입력 하시오"));
let ex3Num2 = Number(prompt("문제3 문제2번 실수 를 입력 하시오"));
let ex3Result = parseInt((ex3Num1/ex3Num2)*100);
console.log(`1번 실수 : ${ex3Num1} 2번 실수  : ${ex3Num2} 결과 : ${ex3Result}`)

// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력
let ex4Num1 = Number(prompt("문제4 문제정수를 입력 하시오"));
let ex4Result = ex4Num1%2;
console.log(ex4Result == 0 ? "짝수 " + false : "홀수 " + true);

// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력
let ex5Num1 = Number(prompt("문제5 문제정수를 입력 하시오"));
let ex5Result = ex5Num1%7;
console.log(ex5Result == 0 ? "7의배수 " + true : "7의 배수 아님 " + false);

// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용]
// 1번 방법
let 금액1 = prompt("문제6 십만원 단위로 금약을 입력 하시오");
console.log(`십만원 : ${금액1[0]}장 , 만원 : ${금액1[1]}장  , 천원 ${금액1[2]}장`);
//2번 방법
let 금액2 = Number(prompt("문제6 십만원 단위로 금약을 입력 하시오"));
let 십만원권 = parseInt(금액2/100000); // 십만원권 계산
금액2 -= (십만원권*100000);          // 원금에 십만원권 계산 빼기
let 만원권 = parseInt(금액2/10000); // 만원권 계산
금액2 -= (만원권*10000);             // 원금에 만원권 계산 빼기
let 천원권 = parseInt(금액2/1000); // 춴원권 계산
console.log (` 십만원 : ${십만원권}장 만원 ${만원권}장 천원 ${천원권}장`);


// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]
let ex7Num1 = prompt("문제7 아이디를 입력 하시오");
let ex7Num2 = Number(prompt("문제7 비밀번호를 입력 하시오"));

console.log( (ex7Num1 == "admin") && (ex7Num2 == 1234)? "결과 " + true  : "결과 " + false );

// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
let ex8Num1 = Number(prompt("문제8 정수를 입렵 하시오"));
let ex8Num2 = ex8Num1/2;     // 홀 짝 구분
let ex8Num3 = ex8Num1%7;     // 7의 배수 구분
console.log( (ex8Num2 == 1) && (ex8Num3 == 0)? "홀수 이면서 7배수 " + ture  : "홀수 이면서 7배수 " + false );

// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력
let ex9Num1 = Number(prompt("문제9 정수를 입렵 하시오"));
let ex9Num2 = Number(prompt("문제9 정수를 입렵 하시오"));
console.log( ex9Num1 > ex9Num2 ? ex9Num1 : ex9Num2);

// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력 
let ex10Num1 = Number(prompt("문제10 정수를 입렵 하시오"));
let ex10Num2 = Number(prompt("문제10 정수를 입렵 하시오"));
let ex10Num3 = Number(prompt("문제10 정수를 입렵 하시오"));
let ex10Result = ex10Num1 > ex10Num2 ? ex10Num1 : ex10Num2;
console.log( ex10Result > ex10Num3 ? ex10Result : ex10Num3);


//  문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]

let 정수1 = Number(prompt("문제11 정수를 입렵 하시오"));
let 정수2 = Number(prompt("문제11 정수를 입렵 하시오"));
let 정수3 = Number(prompt("문제11 정수를 입렵 하시오"));
let temp = 0;
    // - 자리수 각 비교 해서 스왑하는 방법
        // 첫번째 자리 비교 [비교 2번]
        temp = 정수1 > 정수2 ? 정수2 : 정수1;       // 정수2  temp 에 저장
        정수2 = 정수1 > 정수2 ? 정수1 : 정수2;      // 정수 1 -> 정수2 
        정수1 = 정수1 > 정수2 ? temp : temp;       // temp -> 정수1

        temp = 정수1 > 정수3 ? 정수3 : 정수1;       // 정수2  temp 에 저장
        정수3 = 정수1 > 정수3 ? 정수1 : 정수3;       // 정수 1 -> 정수2 
        정수1 = 정수1 > 정수3 ? temp : temp;       // temp -> 정수1

        // 2. 두번쨰 자리 비교 [비교 1번]
        temp = 정수2 > 정수3 ? 정수3 : 정수2;
        정수3 = 정수2 > 정수3 ? 정수2 : 정수3;
        정수2 = 정수2 > 정수3 ? temp : temp
        // 3. 세번째 자리비교 X;
console.log(` 정수1 : ${정수1} 정수2 : ${정수2} 정수3 : ${정수3} `)

    // - 최대값 , 최소값 , 미들값 구해서 계산하는 방법 [ 수가 많아지면 힘들어... ]
/*
    오름차순 하는 방법 [ 정렬 ]
        7 5 9 
        a b c

        1. a 와 b 비교   a > b     a 가 더 크면 자리 바꾸기 [ 스왑 ]
        ---- 모든 자리수 마다

        a 자리는 b , c 와 비교
        b 자리는 c 와 비교 [ a자리와 비교를 안하는 이유 : 비교 당했으니까. ]
        c 자리는 X  [ b, c 자리와 비교를 안하는 이유 : 비규 당했으니까. ]

    - 변수 와 변수의 값 바꾸는 방법[ 스왑 ]
    a 와 b 를 스왑
    1. a에 b를 대입
        a = b                   [ 문제점 : a의 값은 사라짐 ]
    2. b에 a를 대입

    - 스왑 하는 방법
    1. temp 임의[임시저장소] 생성
    2. temp에 a를 대입
    3. a 에 b를 대입
    4. b 에 temp를 대입

*/

/*
   [ JS 연산자 과제1 ]
  
   
   
   
   문제12 : [ 가위바위보 게임 ] 
   - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
   - 승리자 판단과 무승부 경우의수를 출력하시오.
   [입력]
      플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
      플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   [경우의수 판단]
      플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
      플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
      비겼을경우 '무승부' 출력
*/

// 문제12 

let ex12Num1 = Number(prompt("가위바위보 게임 --- 가위 0 바위 1 보 2 입력 하시오"));
let ex12Num2 = Number(prompt("가위바위보 게임 --- 가위 0 바위 1 보 2 입력 하시오"));
console.log(`
${ 
   ex12Num1 == 0 && ex12Num2 == 1 ? "플레이어2 승리" :
   ex12Num1 == 0 && ex12Num2 == 2 ? "플레이어1 승리" :
   ex12Num2 == 0 && ex12Num1 == 1 ? "플레이어1 승리" :
   ex12Num2 == 0 && ex12Num1 == 2 ? "플레이어2 승리" : "무승부"   
};
`)

/* 12번 문제 요약 코드
let player1 = Number(prompt('플레이어1'))
let player2 = Number(prompt('플레이어2'))
let answer = player1==player2 ? 
                    '무승부' :  player1==(player2+1)%3 ? 
                                '플레이어1 승리' :  '플레이어2 승리';
console.log( answer )


// 12번 문제 요약 코드 보고 정리
  동일 숫자  비교 x
  다른 숫자일때만 비교 
  플레이어 1이 가위(0) 일시
  플레이어2 가 보(2) 를 내면 2+1 -> 3%3 나머지 연산으로 0 이 나와
  0 == 0 true 로 인한 플레이어 1승리
  플레이어 1이 가위(0) 이고
  플레이어2가 바위(1) 일시 1+1 -> 2%3 나머지 연산으로 0이 나오지않아
  false 로 플레이어 2 승리


*/

// p.144
/*
    확인문제1 : 1번
    확인문제2 : 2번
    확인문제3 :
        3-1 : 2번째 줄에서 초기화가 없다
        3-2 : 오류 없다
    확인문제4 : 상수라서 증감이 불가능.
*/
