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

    return;
}

// 2-1. 모든글출력[R]   => [ 1. JS가 열렸을떄 최초로 한번   2.글쓰기/글수정/글삭제 처리 할떄마다 새로고침.]

function 모든글출력(){  //매개변수 : X 리턴 : X

    // 
    const tableBody = document.querySelector('table>tbody');
    let html = '';
    for( let i = 0 ; i<boardArray.length ; i++ ){
        console.log(boardArray[i]);
        // 저장할때 4가지 속성/상태 값을을 "/" 기준으로 하나로 묶었으니까. 다시 "/" 기준으로 분리
        html +=`<tr>
                    <th>${i}</th>
                    <th>${boardArray[i].split("/")[2]}</th>
                    <th>${boardArray[i].split("/")[0]}</th>
                </tr>`
    }

    tableBody.innerHTML = html;


    return;
}

// 2-2. 개별글출력[R]   => [ 해당 글을 선택했을떄. ]

function 개별글출력(){  //매개변수 : (대상)보고자 하는 번호 리턴 : X
    return;
}

// 3. 글수정[U]         => [ 글수정 버튼을 클릭했을떄 ]

function 글수정(){  //매개변수 : (대상)수정할 식별번호 리턴 : X
    return;
}

// 4. 글삭제[D]         => [ 글삭제 버튼을 클릭했을떄 ]

function 글삭제(){  //매개변수 : (대상)삭제할 식별번호 리턴 : X
    return;
}




/*
    함수 만들때 고민할점.
        1. 언제 실행하는 함수인지?
        2. 함수 안으로 넣을 매개변수?
        3. 함수 밖으로 반활할 값?
        4. 무엇을 실행 하는지?
*/