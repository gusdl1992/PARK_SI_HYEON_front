console.log("JS열림"); // js 실행 안될경우 파일경로 문제


/*
    - 지역변수 특징
    { } 안에서 선언된 변수/상수는  { } 밖으로 나올수 없다. 
    { } 안에서 선언된 변수/상수는 하위 { } 안으로 들어갈수 있다.


    ------------------ js 구역 대한민국 = 전체구역 --------------------------
    let 변수1 = 30;  //전역변수

    -------------------------함수{} 구역[ 경기도구역 ] -----------------------------------------
    function 함수(){
        let 변수2 = 40;   // 지역변수
    }
    ------------------------- 제어문{} 구역 [ 강원도 구역 ]-----------------------------------
    if(조건){
        let 변수3 = 50;  // 지역변수
    }
    ------------------ js 구역  --------------------------
*/


const 회원배열 = []; // 여러 회원 이름을 저장하는 배열
// - 배열을 위에 선언/생성한 이유
    // 1. 선언은 1번만 되어야한다. [ 왜??? 선언이 계속되면 초기화 되서 누적 불가능. ]
    // 2. 여러 { } 에서 호출/시용 되어야 하므로 전역 사용.
        // 1. function 회원등록(){} , 2. function 회원삭제(){}


//document.querySelector('div').innerHTML = 회원리스트;
// document : HTML 전체
    // querySelector('선택자')
        // .innerHTML : <마크업> 여기! <마크업> 

function 회원등록(){    //f start
    console.log('회원등록함수 실행')
        // 1. [입력] : input로 부터 입력받은 값[value] 호출 해서 name상수 저장.
        const name = document.querySelector('#nameInput').value;  


        if( 회원배열.indexOf( name ) >= 0 ){ alert('현재 등록된 이름입니다.[중복]');    return; }
        if( name.length != 3 ){ alert('회원명 3글자로 입력해주세요.'); return; }
        if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2] ) ){ alert('숫자를 입력할수 없어요.'); return;}
    
    회원배열.push( name ); // 입력된 값을 배열에 추가 

    // 3. [출력]
    document.querySelector('#nameList').innerHTML = 회원배열;
    // [ 부가기능1] 등록후 input 상자 초기화 [ input에 value에 빈문자열 넣어주기 ]
    document.querySelector('#nameInput').value ='';
}// f end


// 회원삭제

function 회원삭제(){    // f start
    console.log('회원삭제 함수');
    // 1. [입력]
    const name = document.querySelector('#nameInput').value;
    // 2. [처리] 삭제처리 -> 배열에서 요소제거
        // 입력한 값이 존재하면 삭제 , 없으면 없다고 출력

        let deleteIndex = 회원배열.indexOf(name);
            if(deleteIndex >= 0){ // .indexOf() : 존재하면 0 이상의 인덱스 위치반환
                회원배열.splice( deleteIndex , 1 ); alert('삭제 했습니다.');
            }else{  // 없으면
                alert('존재 하지 않습니다.');
            }

    // 3. [출력 -> 새로고침(배열내 요소가 변경되었으니까. 화면도 다시 출력) ] 재 랜더링
            document.querySelector('#nameList').innerHTML = 회원배열;

} // f end