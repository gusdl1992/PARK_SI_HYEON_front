function 글쓰기(){  //매개변수 : X 리턴 : X

    // 1. 입력
    const writer = document.querySelector('#writer').value;
    const passowrd = document.querySelector('#passowrd').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    // 2. 처리
    // 객체화시키기
    const writerMumber = {
        작성자 : writer ,
        비밀번호 : passowrd ,
        제목 : title ,
        내용 : content
    }
    console.log(writerMumber);
    // 객체를 브라우저에 저장.
    // 기존 배열 호출
    let writerMumberArray = JSON.parse( localStorage.getItem('writerMumberArray') )
    // 기존 배열이 없을경우 배열을 새로 생성
    if (writerMumberArray == null){ writerMumberArray = [] };
    // 방금 입력한 글 객체를 배열에 추가
    writerMumberArray.push(writerMumber);
    localStorage.setItem('writerMumberArray', JSON.stringify( writerMumberArray ) );

    document.querySelector('#writer').value = ''
    document.querySelector('#passowrd').value = ''
    document.querySelector('#title').value = ''
    document.querySelector('#content').value = ''
    // input 값 글쓰기 버튼 클릭후 값초기화

    return;
}

