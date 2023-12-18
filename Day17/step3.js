
const boardArray=[ ]

// 1. 글쓰기[C]         => [ 글쓰기 버튼을 클릭했을때. ]

function 글쓰기(){  //매개변수 : X 리턴 : X
    const writer = document.querySelector('#writer').value;
    const passowrd = document.querySelector('#passowrd').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
   
    // **!!! 직접 / 구분해서 하나로 만들었는데 이제는 객체로 하나로 만들기.
    const board = { 작성자 : writer , 비밀번호 : passowrd , 제목 :  title, 내용 : content}
    // 객체내 속성 추가
    board.조회수 = 0;   //객체내 없는 key 호출할때 key 생성 //이제 등록했으니까 조회수는 0부터 시작
    // 배열에 객체 저장
    boardArray.push(board)
    모든글출력()
    // 글쓰기 후 모든글 출력

    document.querySelector('#writer').value = ''
    document.querySelector('#passowrd').value = ''
    document.querySelector('#title').value = ''
    document.querySelector('#content').value = ''
    // input 값 글쓰기 버튼 클릭후 값초기화

    return;
}

// 2-1. 모든글출력[R]   => [ 1. JS가 열렸을떄 최초로 한번   2.글쓰기/글수정/글삭제 처리 할떄마다 새로고침.]

function 모든글출력(){  //매개변수 : X 리턴 : X
// 글이 수정(삭제)되거나 등록 되었을때 함수 실행

    const tableBody = document.querySelector('table>tbody');
    // HTML table > tbody 마크업 부분을 tableBody 저장
    let html = '';
    // tableBody 에 넣어줄 html 선언
    for( let i = 0 ; i<boardArray.length ; i++ ){
        // 배열의 크기만큼 반복문 수행
        // 저장할때 4가지 속성/상태 값을을 "/" 기준으로 하나로 묶었으니까. 다시 "/" 기준으로 분리
        html +=`<tr onclick="개별글출력( ${i} )" >
                    <th>${i}</th>
                    <th>${boardArray[i].제목}</th>
                    <th>${boardArray[i].작성자}</th>
                    <th>${boardArray[i].조회수}</th>
                </tr>`
    }
        // html 에 글번호 제목 작성자 대입
    tableBody.innerHTML = html;
    // table > tbody 부분에 innerHTML 로 html 변수에 문자열을 출력
    return;
}

// 2-2. 개별글출력[R]   => [ 해당 글을 선택했을떄. ]

function 개별글출력( index ){  //매개변수 : (대상)보고자 하는 번호 리턴 : X
    // * 조회수 증가.
    boardArray[index].조회수 += 1;
    // 증가된 조회수 새로고침
    모든글출력();

    const boardBox = document.querySelector('#boardBox');

    let html =  `<div> 작성자 : ${ boardArray[index].작성자} 조회수: ${boardArray[index].조회수}</div>
                 <div> 제목 : ${boardArray[index].제목} </div>
                 <div> 내용 : ${boardArray[index].내용.replaceAll('\n' , '<br/>')}</div>
                 <input  onclick="글수정(${index})" type="button" value="수정"/>
                 <input  onclick="글삭제(${index})" type="button" value="삭제"/>
                `;
    // 모든글에서 목록에서 개별글출력 클릭시 변수 html 부분에 boardArray 해당 인덱스값을 html 변수에 대입
    boardBox.innerHTML = html;

    
    return;
}

// 3. 글수정[U]         => [ 글수정 버튼을 클릭했을떄 ]

function 글수정(index){  //매개변수 : (대상)수정할 식별번호 리턴 : X
    // 개별글의 해당 인덱스 값 매개변수로 받기
    // 1. 검증[유효성검사] - 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면.
    const checkPw = prompt('비밀번호');
    if(checkPw == boardArray[index].비밀번호){
        // 수정할 값들을 입력받아. 
        const updateTitel = prompt('수정할 제목')
        // prompt 로 수정할 제목값을 받아 updateTitel 대입
        const updateContent = prompt('수정할 내용')
        // prompt 로 수정할 내용값을 받아 updateContent 대입
        
        
        // 배열에 객체에 내용 업데이트
        boardArray[index].제목 = updateTitel
        boardArray[index].내용 = updateContent

        alert(' 수정 성공')
        // 새로고침
        모든글출력()
        개별글출력(index)
        //해당 인덱스의 개별글만 새로고침
    }else{
        alert('패스워드가 다릅니다. 수정 불가')
    }
    return;
}

// 4. 글삭제[D]         => [ 글삭제 버튼을 클릭했을떄 ]

function 글삭제(index){  //매개변수 : (대상)삭제할 식별번호 리턴 : X

    // 1. 검증[유효성검사] - 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면.
    const checkPw = prompt('비밀번호');
    if(checkPw == boardArray[index].비밀번호){
        // 삭제 처리
        boardArray.splice(index , 1);
        alert('삭제 성공')
        // 새로고침
        모든글출력();
        document.querySelector('#boardBox').innerHTML = '' // 개별글보기 구역 초기화
    }else{
        alert('패스워드가 다릅니다. 삭제 불가')
    }

    return;
}


/*
    함수 만들때 고민할점.
        1. 언제 실행하는 함수인지?
        2. 함수 안으로 넣을 매개변수?
        3. 함수 밖으로 반활할 값?
        4. 무엇을 실행 하는지?
*/