모든글출력() // 페이지 이동시 첫실행

function 모든글출력(){  //매개변수 : X 리턴 : X
    // [입력]
    // HTML table > tbody 마크업 부분을 tableBody 저장
    const tableBody = document.querySelector('table>tbody');

    // HTML에 저장되어있는 writerMumberArray 배열 값 가져오기
    const writerMumberArray = JSON.parse( localStorage.getItem('writerMumberArray') )
    console.log(writerMumberArray);
    console.log(writerMumberArray.length);
    // for 사용하여 객체 값 출력
    let html = '';
    for(let i = 0; i<writerMumberArray.length ; i++){
        html +=`<tr onclick="개별글출력( ${i} )" >
                    <th>${i}</th>
                    <th>${writerMumberArray[i].제목}</th>
                    <th>${writerMumberArray[i].작성자}</th>
                </tr>`
    }

    // table > tbody 부분에 innerHTML 로 html 변수에 문자열을 출력
    tableBody.innerHTML = html;
    
    return;
}

// 개별글출력 클릭됬을때 해당 인덱스값을 넘겨주고 사이트 이동
function 개별글출력( index ){  //매개변수 : (대상)보고자 하는 번호 리턴 : X
    localStorage.setItem('개별인덱스' , index)
    location.href="content.html" // html에 있는 a태그와 동일 , JS에서 페이지 전환하는 방법

    return;
}