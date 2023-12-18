
// 전역변수
const 회원정보Array = [];    // 회원객체 배열 저장

// 1. 등록 함수 선언
function 등록함수(){ console.log('등록함수() 실행');
    //[1.입력] 
    const 이름 = document.querySelector('#이름').value; 
    const 팔굽혀펴기 = document.querySelector('#팔굽혀펴기').value;
    const 윗몸일으키기 = document.querySelector('#윗몸일으키기').value;
    const 턱걸이 = document.querySelector('#턱걸이').value; 

    const 회원정보 = { 이름 : 이름 , 팔굽혀펴기 : 팔굽혀펴기, 윗몸일으키기: 윗몸일으키기, 턱걸이 : 턱걸이}
    // 배열에서 indexOf 사용 안되어 findIndex 사용
    const nIndex = 회원정보Array.findIndex(i => i.이름 == 이름); 
    
    const namebin = ''; // 이름이 빈칸인지 비교 상수

    if(!(이름 == namebin)){     // 빈칸이 입력 됬는지 비교
        
        //이름 중복 검사 후 -1 true 시 회원등록 , 아닐시 이미 등록된 회원 안내
        if(nIndex == -1){       // 이름이 같은지 비교
            //[2.처리] 
            회원정보Array.push(회원정보)
        alert('등록 성공');
        }else{
            alert("이미 등록된 회원입니다.")
        }
        
    }else{
        alert("이름을 입력해 주세요!")
    }
    
     //[3.출력]

    출력함수();
}
/* 어떻게 로직을 정해야 등급이 나올까 */


function 등급(test){

    let result = ""
    let 총점 = Number(회원정보Array[[test]].팔굽혀펴기)+Number(회원정보Array[[test]].윗몸일으키기)+Number(회원정보Array[[test]].턱걸이)
    
    if (총점 >=130) {result= "A"}
    else if (총점 >=120) {result= "B"}
    else if (총점 >=110) {result= "C"}
    else if (총점 >=100) {result= "D"}
    else {result= "재시험"}
    
    
    return result;
    
    };

// 삭제함수

function 삭제함수( 삭제할인덱스 ){      //f start

    회원정보Array.splice(삭제할인덱스 , 1);
    
    출력함수()

}   //f end

// 수정함수 시작
function 수정함수(){    // 수정
    // 입력
    let 수정이름 = document.querySelector('#이름').value
    let 팔굽혀펴기 = document.querySelector('#팔굽혀펴기').value
    let 윗몸일으키기 = document.querySelector('#윗몸일으키기').value
    let 턱걸이 = document.querySelector('#턱걸이').value
    const nIndex = 회원정보Array.findIndex(i => i.이름 == 수정이름);   // 배열이름 비교 
    
    if(nIndex >= 0){        // 똑같은 이름이 없으면 -1  있으면 해당 인덱스값 
        alert("수정되었습니다.")    // 수정 완료 메세지

        if(!(팔굽혀펴기 == '')){    // 팔굽혀펴기 값 수정
            회원정보Array[nIndex].팔굽혀펴기 = 팔굽혀펴기;
        }else{
            회원정보Array[nIndex].팔굽혀펴기 = 회원정보Array[nIndex].팔굽혀펴기
        }

        if(!(윗몸일으키기 == '')){  // 윗몸일으키기 값 수정
            회원정보Array[nIndex].윗몸일으키기 = 윗몸일으키기;
        }else{
            회원정보Array[nIndex].윗몸일으키기 = 회원정보Array[nIndex].윗몸일으키기
        }

        if(!(턱걸이 == '')){        // 턱걸이 값 수정
            회원정보Array[nIndex].턱걸이 = 턱걸이;
        }else{
            회원정보Array[nIndex].턱걸이 = 회원정보Array[nIndex].턱걸이
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
        for( let i = 0; i<회원정보Array.length; i++){
            html +=  `<div class="output">        <!-- JS 출력함수() 부분 가이드 -->
                        <div class="name">${회원정보Array[i].이름}</div>
                        <div class="list_1">${회원정보Array[i].팔굽혀펴기}개</div>
                        <div class="list_2">${회원정보Array[i].윗몸일으키기}개</div>
                        <div class="list_3">${회원정보Array[i].턱걸이}개</div>
                        <div class="total">${Number(회원정보Array[i].팔굽혀펴기)+Number(회원정보Array[i].윗몸일으키기)+Number(회원정보Array[i].턱걸이)}점</div>
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

/*
    전역변수 
    const 회원정보Array = [ 회원정보 , 회원정보 , 회원정보 ];    // 회원객체 배열 저장

    지역변수(함수별)
    - 변수/상수
    1. 등록()
        const 이름          => HTML ipunt 입력된 이름 값 저장
        const 팔굽혀펴기    => HTML ipunt 입력된 팔굽혀펴기 값 저장
        const 윗몸일으키기  => HTML ipunt 입력된 윗몸일으키기 값 저장
        const 턱걸이        => HTML ipunt 입력된 턱걸이 값 저장
        const 회원정보      => 객체 생성 { 이름 , 팔굽혀펴기 , 윗몸일으키기 ,턱걸이  }
        const nIndex        => 회원이름 비교 값 결과 저장
        const namebin       => 공백 비교 빈문자열 상수
    
    2. 등급()
        let result = ""     => 리턴용 빈문자열 변수
        let 총점            => 총점 합계 계산 변수
    
    3. 삭제함수()

    4. 수정함수()
        let 수정이름        => 수정버튼 클릭시 input 이름 값
        let 팔굽혀펴기      => 수정버튼 클릭시 input 팔굽혀펴기 값
        let 윗몸일으키기    => 수정버튼 클릭시 input 윗몸일으키기 값
        let 턱걸이          => 수정버튼 클릭시 input 턱걸이 값
        const nIndex        => 수정버튼 클릭시 이름 수정이름과 회원정보Array 이름 비교 결과 값
    
    5. 출력함수()
        let html = '';      => 값을 더할 빈문자열 변수 선언
        const contentOutput => HTML 해당 ID #contentOutput 값을 출력을 위해 contentOutput 위치 저장
*/
