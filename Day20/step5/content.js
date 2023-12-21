
// 인덱스값 가져오기
let 인덱스 = JSON.parse( localStorage.getItem('개별인덱스') );
console.log(인덱스);


개별글출력(인덱스);
function 개별글출력(index){  //매개변수 : (대상)보고자 하는 번호 리턴 : X
    console.log('개별글출력')
    // 입력
    const boardBox = document.querySelector('#boardBox');
    
    // HTML에 저장되어있는 writerMumberArray 배열 값 가져오기
    const writerMumberArray = JSON.parse( localStorage.getItem('writerMumberArray') )

    let html =  `<div> 작성자 : ${ writerMumberArray[index].작성자}</div>
                 <div> 제목 : ${writerMumberArray[index].제목} </div>
                 <div> 내용 : ${writerMumberArray[index].내용.replaceAll('\n' , '<br/>')}</div>
                `;
    // 모든글에서 목록에서 개별글출력 클릭시 변수 html 부분에 boardArray 해당 인덱스값을 html 변수에 대입
    boardBox.innerHTML = html;

    return;
}