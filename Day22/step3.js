
// 1. JS가 head에 있으므로 body 생성되기전에 호출이므로 오류발생.
console.log(document.querySelector('img'));

// 2. JS가 head에 있으나 DOMContentLoaded 이벤트를 사용했으므로 우류발생X
document.addEventListener('DOMContentLoaded' , function(){

    console.log(document.querySelector('img'));
    // 1. class가 'rect' 인 요소를 여러개 호출
    const rects = document.querySelectorAll('.rect');
    // 2. rects/배열 하나씩 순서대로 호출 반복
    for(let i = 0 ; i < rects.length ; i++){
        const wudth= ( i +1 ) * 100;    // 가로 사이즈 계산
        const src = `http://placekitten.com/${wudth}/250`
        // rects[i].setAttribute('src', src);
        rects[i].src = src;     // 표준 속성
    }


    // [p.318]

    const divs = document.querySelectorAll('body>div'); // 자식 선택자
    for(let j = 0 ; j<divs.length; j++){
        console.log(j , divs[j]);
        const val = j * 10;             // 0*10 => 0    // 1*10 => 10
        divs[j].style.height = `10px`
        divs[j].style.backgroundColor = `rgba(${val},${val},${val})`
    }


    // [p.320] 요소 만들기.
    const header = document.createElement('h1'); // h1 요소 생성[ 생성 ]
    console.log(header);

    header.textContent = '문서객체 동적으로 생성하기';
    header.setAttribute('data-custom' , '사용자 정의 속성') // HTML 표준에 없는 속성을 추가.
    header.style.color = 'white';
    header.style.backgroundColor = 'black';

    document.body.appendChild(header);  // [ 2. 위치 지정해서 대입한다. ]
    document.body.innerHTML += `<h1></h1>`;
    document.body.innerHTML += header;
    



});