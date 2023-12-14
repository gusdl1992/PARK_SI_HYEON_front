// 전역 자료 [ 함수 밖에서 선언 ]
const 날짜목록 = [];    // 할일의 내용을 저장
const 항목목록 = [];    // 할일의 상태를 저장
const 금액목록 = [];    // 할일의 상태를 저장


// 1. 등록 함수 : 매개변수X , 리턴값X
function 입력함수(){
    console.log("등록함수")
    //값 받아오기
    const 날짜 = document.querySelector('#contentDay').value
    const 항목 = document.querySelector('#contentList').value
    const 금액 = document.querySelector('#contentMoney').value
    let 테스트 = 항목.split("")
    let 테스트2 =' ';
    // 값 배열에 대입
    날짜목록.push(날짜);
    항목목록.push(항목);
    금액목록.push(Number(금액));
    //출력
    출력함수();
    // 텍스트 값 초기화
    document.querySelector('#contentDay').value = '' ; 
    document.querySelector('#contentList').value = ' ' ; 
    document.querySelector('#contentMoney').value = ' ' ; alert('등록성공')
    
    console.log(테스트)

}

// 삭제함수
function 삭제함수( 삭제인덱스값 ){
    날짜목록.splice(삭제인덱스값 , 1);
    항목목록.splice(삭제인덱스값 , 1);
    금액목록.splice(삭제인덱스값 , 1);
    //[3. 출력]
    출력함수();

}




// 출력 함수
function 출력함수(){
    let 금액 = 0;
    // 1. [ 어디에 ] todoBottom에
    const todoBottom = document.querySelector('#content');
    const totalMoney = document.querySelector('#total');
    // 2. [ 무엇을 ] 배열에 있는 여러  요소들을 HTML화       JS입장에서 HTML코드는 문자열.
    let html = ' '; // 초기값
    let total = ' '; 
    // 1. 배열내 모든 요소를 하나씩 꺼내기
    for( let i = 0; i < 날짜목록.length ; i++ ){
        // HTML 변수에 여러 DIV 누계
        html += `<div class="todo"> 
                    <div class="Day">${날짜목록[i]}</div>
                    <div class="list">${항목목록[i]}</div>
                    <div class="money">${금액목록[i]}원</div>
                    <div class="Butn"><input onclick="삭제함수(${i})" type="button" value="삭제"></div>
                </div> `
    }

    for( let i = 0; i < 날짜목록.length ; i++ ){
        금액 += 금액목록[i];
        total = `<h3>총합계 : ${금액} 원</h3>`
    }
    // 3. [ 대입 ] innerHTML 에 저장된 변수를 대입
    todoBottom.innerHTML = html;
    totalMoney.innerHTML = total;
    
}