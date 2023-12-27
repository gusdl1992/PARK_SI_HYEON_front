
// p.352  누적예제 할일목록 만들기

document.addEventListener('DOMContentLoaded', function(){
    // HTML 문서 객체 가져오기
    const input = document.querySelector('#todo');
    const todoList = document.querySelector('#todo-list');
    const addButton = document.querySelector('#add-button');

    // 할일목록 카운터 증가 변수
    let keyCount = 0;

    // todo 생성 함수 시작
    const addTodo = function(){
        // 빈 값 유효성 검사 
        if(input.value.trim() === ''){
            alert('할 일을 입력해주세요.')
            return;
        }

        // HTML #todo-list 부분에 들어갈 HTML 태그 생성
        const item = document.createElement('div');
        const checkbox = document.createElement('input');
        const text = document.createElement('span');
        const button = document.createElement('button');

        // todoList 식별할 키를 생성 및 함수 실행마다 값 증가
        const key = keyCount;
        keyCount += 1;

        // HTML #todo-list 부분에 div태그 안에 들어갈 내용
        item.setAttribute('data-key' , key) // data-key 라는 속성 추가 하여 key 값 대입
        item.appendChild(checkbox)  // input 요소 추가
        item.appendChild(text)      // span 요소 추가
        item.appendChild(button)    // button 요소 추가
        todoList.appendChild(item)  // todoList 에 item(div) 추가
        console.log(item)

        // checkbox 객체를 조작
        checkbox.type = 'checkbox'; // 생성 input 에 타입 체크박스로 설정
        checkbox.addEventListener('change' , function(event){

            item.style.textDecoration = event.target.checked ? 'line-through' : '';

        })// e end

        // text 객체를 조작합니다.
        
        text.textContent = input.value;

        // button 객체를 조작
        button.textContent = '제거하기'
        button.addEventListener('click' , function(){
            console.log(key);
            removeTodo(key)
        }) // e end

        // 입력 양식의 내용을 비웁니다.
        input.value = '';

    } // f end

    const removeTodo = function(key){
        // 식별키로 문서객체를 제거합니다.
        console.log(key);
        const item = document.querySelector(`[data-key="${key}"]`)
        todoList.removeChild(item)
    }

    // 이벤트 연결
    addButton.addEventListener('click', addTodo);
    input.addEventListener('keyup', function(event){
        // 입력양식에서 엔터키를 누르면 addtodo()함수 호출
        const ENTER = 13;
        if(event.keyCode === ENTER){
            addTodo()
        }
    })

    
}) // DOMContentLoaded end