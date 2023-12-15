// 전역변수
const 이름목록 = ["유재석","강호동"];    // 이름 저장
const 팔굽혀펴기목록 = ["10","20"];     // 팔굽혀펴기 저장
const 윗몸일으키기목록 = ["10","20"];    // 윗몸일으키기 저장
const 턱걸이목록 = ["10","20"];         // 턱걸이 저장
const 총점목록 = ["30","60"];           // 총점 저장
const 등급목록 = ["C","B"];             // 등급저장

// 기본값 테스트 출력
console.log(이름목록);
console.log(팔굽혀펴기목록);
console.log(윗몸일으키기목록);
console.log(턱걸이목록);
console.log(총점목록);
console.log(등급목록);


function 등록함수(){
    console.log("등록함수 실행")

}

function 수정함수(){    // 수정
    console.log("수정함수 실행")
    // 입력
    let 이름 = document.querySelector('#이름').value
    let 팔굽혀펴기 = document.querySelector('#팔굽혀펴기').value
    let 윗몸일으키기 = document.querySelector('#윗몸일으키기').value
    let 턱걸이 = document.querySelector('#턱걸이').value
    const nIndex = 이름목록.indexOf(이름);  // 배열이름 비교 
    
    
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


    }else{  // 같은 이름이 없으면
        alert("이름이 없습니다.")
    }
    // 테스트 (출력함수() 자리)
    console.log(이름목록);
    console.log(팔굽혀펴기목록);
    console.log(윗몸일으키기목록);
    console.log(턱걸이목록);

   


}

function 삭제함수(){
    console.log("삭제함수 실행")

}

function 출력함수(){

}


