

// HTML를 모두 읽었을때 해당 함수 실행.
document.addEventListener('DOMContentLoaded', function(){
    // 클릭 카운터 선언
    let counter = 0;
    // 이벤트 연결 상태 불리언 선언
    let isConnect = false
    // HTML 태그 및 id 가져오기
    const h1 = document.querySelector('h1')
    const p = document.querySelector('p')
    const connectButton = document.querySelector('#connect')
    const disconnectButton = document.querySelector('#disconnect')

    // 익명함수 상수명 listener 선언 
    const listener = function(event){
        // listener 함수 호출시 클릭횟수 +1
        h1.textContent = `클릭 횟수: ${counter++}`
    }

    // 이벤트 연결 버튼 클릭시 실행 이벤트
    connectButton.addEventListener('click', function(){
        // isConnect 가 false 일경우  실행
        if(isConnect === false){
            // 클릭 이벤트 발생시 listener 함수 호출 및 연결
            h1.addEventListener('click', listener)
            // HTML p 태그 부분 문자열 변경
            p.textContent = '이벤트 연결 상태: 연결'
            // isConnect true 교체
            isConnect = true;
        }
    })

    // 이벤트 연결 버튼 클릭시 실행 이벤트
    disconnectButton.addEventListener('click' , function(){
        // isConnect 가 ture 일경우 실행
        if(isConnect === true){
            // 클릭 이벤트 발생 시 연결된 이벤트 제거
            h1.removeEventListener('click', listener)
            // HTML p 태그 부분 문자열 변경
            p.textContent = '이벤트 연결 상태: 해제'
            // isConnect false 교체
            isConnect = false;
        }
    })

})


/*
    p.326

    확인문제 1 : 2 = DOMContentLoaded
    확인문제 2 : h1 , #header , span , .active , input
    확인문제 3 : 4 = htmlContent
    확인문제 4 : 
        1. borderRadius
        2. fontFamily
        3. lineHeight
        4. wudth
        5. boxSizing





*/