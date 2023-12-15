// 전역변수
const 이름목록 = [];    // 이름 저장
const 팔굽혀펴기목록 = [];     // 팔굽혀펴기 저장
const 윗몸일으키기목록 = [];    // 윗몸일으키기 저장
const 턱걸이목록 = [];         // 턱걸이 저장



// 1. 등록 함수 선언
function 등록함수(){ console.log('등록함수() 실행');
    //[1.입력] 
    const 이름 = document.querySelector('#이름').value; 
    const 팔굽혀펴기 = document.querySelector('#팔굽혀펴기').value;
    const 윗몸일으키기 = document.querySelector('#윗몸일으키기').value;
    const 턱걸이 = document.querySelector('#턱걸이').value; 
    // const 총점 = document.querySelector('#총점').value; console.log( 총점 );
    // const 등급 = document.querySelector('#등급').value; console.log( 등급 );


    //[2.처리] 
    이름목록.push( 이름 );  
    팔굽혀펴기목록.push( 팔굽혀펴기); 
    윗몸일으키기목록.push( 윗몸일으키기 );
    턱걸이목록.push( 턱걸이 );
    // 총점목록.push( 총점 );

    console.log( 이름 ); console.log( 팔굽혀펴기 );console.log( 윗몸일으키기 );console.log( 턱걸이 );
    document.querySelector('#이름,#이름,#윗몸일으키기,#턱걸이').value = ``; alert('등록 성공');
    
     //[3.출력]

    출력함수();
}
/* 어떻게 로직을 정해야 등급이 나올까 */


function 등급(test){

    let result = ""
    let 총점 = Number(팔굽혀펴기목록[test])+Number(윗몸일으키기목록[test])+Number(턱걸이목록[test])
    
    if (총점 >=130) {result= "A"}
    else if (총점 >=120) {result= "B"}
    else if (총점 >=110) {result= "C"}
    else if (총점 >=100) {result= "D"}
    else {result= "재시험"}
    
    
    return result;
    
    };

// 삭제함수

function 삭제함수( 삭제할인덱스 ){      //f start
    console.log("삭제함수실행");

    이름목록.splice(삭제할인덱스 , 1);
    팔굽혀펴기목록.splice(삭제할인덱스 , 1);
    윗몸일으키기목록.splice(삭제할인덱스 , 1);
    턱걸이목록.splice(삭제할인덱스 , 1);


    출력함수()

}   //f end

// 수정함수 시작
function 수정함수(){    // 수정
    console.log("수정함수 실행")
    // 입력
    let 수정이름 = document.querySelector('#이름').value
    let 팔굽혀펴기 = document.querySelector('#팔굽혀펴기').value
    let 윗몸일으키기 = document.querySelector('#윗몸일으키기').value
    let 턱걸이 = document.querySelector('#턱걸이').value
    const nIndex = 이름목록.indexOf(수정이름);  // 배열이름 비교 
    
    console.log( 수정이름 );
    console.log(nIndex);    // 값 확인 테스트
    if(nIndex >= 0){        // 똑같은 이름이 없으면 -1  있으면 해당 인덱스값 
        alert("수정되었습니다.")    // 수정 완료 메세지

        if(!(팔굽혀펴기 == '')){    // 팔굽혀펴기 값 수정
            팔굽혀펴기목록[nIndex] = 팔굽혀펴기;
        }else{
            팔굽혀펴기목록[nIndex] = 팔굽혀펴기목록[nIndex]
        }

        if(!(윗몸일으키기 == '')){  // 윗몸일으키기 값 수정
            윗몸일으키기목록[nIndex] = 윗몸일으키기;
        }else{
            윗몸일으키기목록[nIndex] = 윗몸일으키기목록[nIndex]
        }

        if(!(턱걸이 == '')){        // 턱걸이 값 수정
            턱걸이목록[nIndex] = 턱걸이;
        }else{
            턱걸이목록[nIndex] = 턱걸이목록[nIndex]
        }
        출력함수()  //출력

    }else{  // 같은 이름이 없으면
        alert("이름이 없습니다.")

        출력함수()  // 출력
    }
    

} // 수정함수 끝

// 출력함수

function 출력함수(){
    console.log('출력함수실행');
    //const contentOutput = document.querySelector('#contentOutput')
    let html = '';
        for( let i = 0; i<이름목록.length; i++){
            html +=  `<div class="output">        <!-- JS 출력함수() 부분 가이드 -->
                        <div class="name">${이름목록[i]}</div>
                        <div class="list_1">${팔굽혀펴기목록[i]}개</div>
                        <div class="list_2">${윗몸일으키기목록[i]}개</div>
                        <div class="list_3">${턱걸이목록[i]}개</div>
                        <div class="total">${Number(팔굽혀펴기목록[i])+Number(윗몸일으키기목록[i])+Number(턱걸이목록[i])}</div>
                        <div class="grade">${등급(i)}</div>
                        <div class="butn"><input onclick="삭제함수(${i})" type="button" value="삭제"></div>
                    </div>`

    }
    const contentOutput = document.querySelector('#contentOutput')
    contentOutput.innerHTML=html;
    // 텍스트초기화
    document.querySelector('#이름').value = '' ;
    document.querySelector('#팔굽혀펴기').value = '' ;
    document.querySelector('#윗몸일으키기').value = '' ;
    document.querySelector('#턱걸이').value = '' ;

}

