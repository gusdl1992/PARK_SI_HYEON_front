

// p.331 키보드 이벤트

// 1. HTML 모두 로드 되었을떄
document.addEventListener('DOMContentLoaded', function(){

    // 2. 특정 html 요소를 객체로 호출
    const textarea = document.querySelector('textarea');
    const h1 = document.querySelector('h1');

    // 3. textarea 요소의 이벤트 등록
    textarea.addEventListener('keyup', function(  event  ){
        // *event : 매개변수로 이벤트의 정보('keyup')를 받습니다.
        console.log(event);
        console.log(event.code);        // 입력한 키의 문자열 표시
        console.log(event.keyCode);     // 입력한 키의 숫자로 표시
        console.log(event.altKey);      // [조합키] alt 눌렀는지
        console.log(event.ctrlKey);     // [조합키] ctrl 눌렀는지
        console.log(event.shiftKey);    // [조합키] shift 눌렀는지
        // 4. 글자수
        const length = textarea.value.length;
        // 5. 대입
        h1.textContent = `글자 수 : ${length}`;
    })

    // [p.333]
    // 1. 별 기본 설정
    const star = document.querySelector('h2');
    star.style.position = 'absolute'; // CSS 절대위치

    let x = 0;          // 가로위치
    let y = 0;          // 세로위치
    const block = 20    // 이동단위


    // 2. 별 위치를 그려주는 함수   [실행조건 : 1. 최초1번 2. keydown 할때마다]
    const print = function(){
        star.style.left = `${x * block}px`
        star.style.top = `${y * block}px`
    }

    print()
    // 3. 별 위치를 이동하는 이벤트
        // 3-1 키보드 방향키의 키번호
        const left = 37;
        const up = 38;
        const right = 39;
        const down = 40;
        // body에서 키를 눌렀을때 이벤트 발생
        document.body.addEventListener('keydown', function(e){
            console.log(e);
            if(e.keyCode == left){          // 왼쪽 방향키를 눌렀을떄. x 1감소
                x--;
            }else if(e.keyCode == up){      // 위 방향키를 눌렀을떄. y 1감소
                y--
            }else if(e.keyCode == right){   // 오른쪽 방향키를 눌렀을떄. x 1증가
                x++
            }else if(e.keyCode == down){    // 아래 방향키를 눌렀을떄. y 1증가
                y++
            }else{}

            print()
        })

})