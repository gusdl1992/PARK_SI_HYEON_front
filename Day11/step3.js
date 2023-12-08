

// if 문 연습문제
// prompt 대신에 input 으로 입력 받기
// 풀이 결과를 console.log 대신에 span 에 출력


// 문제1 : 세 점수를 각 input 으로입력받아 총점 과 평균을  span 에 출력하시오.
// 참고
// 1. HTML 마크업 정보를 JS변수로 가져오는 함수.
// document.querySelector(' 마크업 또는 #ID명 또는 .class명 ')
// 2. .value 속성 값 가져오기
// document.querySelector(' 마크업 또는 #ID명 또는 .class명 ').value
// 3. .innerHTML 속성


/*
    변수/상수 : 자료를 저장해서 반복적으로 호출해서 재사용
    함수      : 코드를 저장해서 호출을 여러번 가능[ 재활용 ]


*/

// 함수선언
function 연습버튼을클릭했을떄실행되는코드모음상자(){
    // input에 입력받은 값 가져오기
    alert("첫번쨰 버튼을 클릭했네");

    // 1. 입력
    //입력
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;
    
    // 2. 처리
    let sumValue = Number(value1) + Number(value2) + Number(value3);
    let avgValue = sumValue/3;

    // 3.[출력]
    document.querySelector('#result').innerHTML = ` 평균 : ${sumValue}점 평균 : ${avgValue}점 `;
}

// 문제2 : 2개의 정수를 입력받아 더 큰 수를 출력
function 문제2함수(){
    //입력
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    // 처리

    let result = "";   // if 조건에 따른 실행코드 결과를 저장하는 변수
    // 처음에는 빈문자열

    // 1. 만약에 첫번째 수가 더 크면 결과변수에 첫번째 수를 저장
    if( value1 > value2 ){ result = value1 }
    // 2. 만약에 첫번째 수가 더작으면 결과변수에 두번째 수를 저장
    else if(value1 < value2){ result = value2 }
    // 그외는 두수는 같다 문자열 저장
    else{ result = "두수는 같다." }

    // 3.[출력]
    document.querySelector('#result').innerHTML = `${result}`;

}

//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 문제3함수(){

    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);

    if( value1 > value2 ){
        if(value1 > value3){
            document.querySelector('#result').innerHTML = `${value1}`;
        }else{
            document.querySelector('#result').innerHTML = `${value3}`;
        }   
    }else if(value1 < value2){
        if(value2 > value3){
            document.querySelector('#result').innerHTML = `${value2}`;
        }else{
            document.querySelector('#result').innerHTML = `${value3}`;
        }   
    }else{
        document.querySelector('#result').innerHTML = `${value1} 숫자가 모두 같습니다.`;
    }

}


//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4함수(){
    let value1 = Number(document.querySelector('#input1').value);
    if( value1 >= 90 ){
        document.querySelector('#result').innerHTML = `${value1} 합격입니다.`;        
    }else{
        document.querySelector('#result').innerHTML = `${value1} 불합격입니다.`;
    }


}


/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/

function 문제5함수(){
    let value1 = Number(document.querySelector('#input1').value);
    if( value1 >= 90 ){
        document.querySelector('#result').innerHTML = `${value1} A 입니다.`;
    }else if(value1 >= 80){
        document.querySelector('#result').innerHTML = `${value1} B 입니다.`;
    }else if(value1 >= 70){
        document.querySelector('#result').innerHTML = `${value1} C 입니다.`;
    }else{ document.querySelector('#result').innerHTML = `${value1} 재시험 입니다.`; }

}


/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/

function 문제6함수(){
let value1 = document.querySelector('#input1').value;
let value2 = Number(document.querySelector('#input2').value);

    if(value1 == "admin"){
        if(value2 == 1234){
            document.querySelector('#result').innerHTML = ` 로그인 성공! `;
        }else{
            document.querySelector('#result').innerHTML = ` 비밀번호가 다릅니다. `;
        }
    }else{document.querySelector('#result').innerHTML = ` 로그인 실패! 아이디를 확인하세요! `;}

}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 

function 문제7함수오름차순(){

    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    let temp = 0;
   
    if( value1 > value2 ){
        temp = value1;
        value1 = value2;
        value2 = temp;   
    } 
    if(value1 > value3){  
        temp = value1;
        value1 = value3;
        value3 = temp;  
    }
    if(value2 > value3){
        temp = value2;
        value2 = value3;
        value3 = temp;
    }
    document.querySelector('#result').innerHTML = ` 1번박스 : ${value1} 2번박스 : ${value2} 3번박스 : ${value3}`;
}
function 문제7함수내림차순(){
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    let temp = 0;

    if(value1 < value2 ){temp = value1; value1 = value2; value2 = temp; };
    if(value1 < value3 ){temp = value1; value1 = value3; value3 = temp; };
    if(value2 < value3 ){temp = value2; value2 = value3; value3 = temp; };
    document.querySelector('#result').innerHTML = ` 1번박스 : ${value1} 2번박스 : ${value2} 3번박스 : ${value3}`;
}