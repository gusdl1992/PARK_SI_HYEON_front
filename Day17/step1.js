// 0. 전역변수 [ 배역 ]
    // - 속성[상태] 마다 배열을 하나씩 만들면 배열이 너무 많아진다. 관리가 힘들어진다.
    // 객체지향 나오기전... 여러속성들을 하나의 배열에서 관리하고 싶다.
        // 1. boardArray = []
            // - 하나의 배열에 서로다른 유형의 4가지의 데이터를 저장하면 인덱스 관리가 힘들다.
        // 2. boardArray = [ "작성자/비밀번호/제목/내용" , "작성자/비밀번호/제목/내용"]  
            // - 여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 *단 구분이 있어야함 [ 구분 문자는 개발자 마음 ]
            // - 입력 데이터에는 구분 문자가 포함되면 안된다.

const boardArray=[ ]


// 1. 글쓰기[C]         => [ 글쓰기 버튼을 클릭했을때. ]

function 글쓰기(){  //매개변수 : X 리턴 : X
    // 1. HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const passowrd = document.querySelector('#passowrd').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    // 2. 배열에 저장하기
   
    const board = `${writer}/${passowrd}/${title}/${content}`;  console.log(board)
    boardArray.push(board); console.log(boardArray);


    // 3. 배열에 HTML에 출력하기
    모든글출력()
    document.querySelector('#writer').value = ''
    document.querySelector('#passowrd').value = ''
    document.querySelector('#title').value = ''
    document.querySelector('#content').value = ''

    return;
}

// 2-1. 모든글출력[R]   => [ 1. JS가 열렸을떄 최초로 한번   2.글쓰기/글수정/글삭제 처리 할떄마다 새로고침.]

function 모든글출력(){  //매개변수 : X 리턴 : X

    // 
    const tableBody = document.querySelector('table>tbody');
    let html = '';
    for( let i = 0 ; i<boardArray.length ; i++ ){
        // 저장할때 4가지 속성/상태 값을을 "/" 기준으로 하나로 묶었으니까. 다시 "/" 기준으로 분리
        html +=`<tr onclick="개별글출력( ${i} )" >
                    <th>${i}</th>
                    <th>${boardArray[i].split("/")[2]}</th>
                    <th>${boardArray[i].split("/")[0]}</th>
                </tr>`
    }

    tableBody.innerHTML = html;
    return;
}

// 2-2. 개별글출력[R]   => [ 해당 글을 선택했을떄. ]

function 개별글출력( index ){  //매개변수 : (대상)보고자 하는 번호 리턴 : X
    const boardBox = document.querySelector('#boardBox');
    // - replaceAll ( '교체할문자열' , ' 새로운문자열 ' )   : 특정문자열 치환
    // - \n을  <br/>변경 : <textarea> 에서 줄바꿈 처리하면 \n 으로 저장되고 HTML 출력할떄 \n 대신에 <br/> 치환
    let html =  `<div> 작성자 : ${ boardArray[index].split("/")[0]} </div>
                 <div> 제목 : ${boardArray[index].split("/")[2]} </div>
                 <div> 내용 : ${boardArray[index].split("/")[3].replaceAll('\n' , '<br/>')}</div>
                 <input  onclick="글수정(${index})" type="button" value="수정"/>
                 <input  onclick="글삭제(${index})" type="button" value="삭제"/>
                `;
    boardBox.innerHTML = html;
    return;
}

// 3. 글수정[U]         => [ 글수정 버튼을 클릭했을떄 ]

function 글수정(index){  //매개변수 : (대상)수정할 식별번호 리턴 : X
    // 1. 검증[유효성검사] - 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면.
    const checkPw = prompt('비밀번호');
    if(checkPw == boardArray[index].split("/")[1]){
        // 수정할 값들을 입력받아. 
        const updateTitel = prompt('수정할 제목')
        const updateContent = prompt('수정할 내용')
        // 수정처리 [ 기존데이터와 새로운데이터 다시 합쳐서 수정 ]
        boardArray[index] = `
                            ${boardArray[index].split('/')[0]}/
                            ${boardArray[index].split('/')[1]}/
                            ${updateTitel}/
                            ${updateContent} `;
        alert(' 수정 성공')
        // 새로고침
        모든글출력()
        개별글출력(index)
    }else{
        alert('패스워드가 다릅니다. 수정 불가')
    }
    return;
}

// 4. 글삭제[D]         => [ 글삭제 버튼을 클릭했을떄 ]

function 글삭제(index){  //매개변수 : (대상)삭제할 식별번호 리턴 : X

    // 1. 검증[유효성검사] - 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면.
    const checkPw = prompt('비밀번호');
    if(checkPw == boardArray[index].split("/")[1]){
        // 삭제 처리
        boardArray.splice(index , 1);
        alert('삭제 성공')
        // 새로고침
        모든글출력(); document.querySelector('#boardBox').innerHTML = '' // 개별글보기 구역 초기화
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