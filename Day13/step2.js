




const carArray = [];     // 차량 번호판 저장 배열
const timeArray = [];     // 차량 시간 저장 배열
const 기본시간 = 1800000;
const 금액 = 1000;
const 분 = 60000;
const 시 = 3600000;
let 총매출 = 0;

// =========================================  입차 함수  ============================================================

function 입차(){ // f start
    console.log("입차");

    // 1. [ 입력 ]
    const carInNumber = document.querySelector('#carInNumber').value;
    const carInTime = document.querySelector('#carInTime').value;
    // [처리] 배열명.push(새로운 요소)

    // * 유효성검사
    // 1. 차량번호 길이에 따른 갈림길 ... [ 저장 , 실패 ]
    if(carInNumber.length != 4){ alert('차량번호 4자리 입력해주세요'); return;}
    // 2. 입차시간을 입력 안했으면.
    if( carInTime === '' ){alert('입차시간을 선택해주세요.')}
    carArray.push(carInNumber)
    timeArray.push(carInTime)
    alert('입차 되었습니다.')

} // f end






// =========================================  출차 함수  ============================================================

function 출차(){    // f start
    console.log("출차");

     // 1. [ 입력 ]
     const carOutNumber = document.querySelector('#carOutNumber').value;
     const carOutTime = document.querySelector('#carOutTime').value;

     // 2. [ 차량번호 조회 ]
     console.log(carOutNumber);
     console.log(carOutTime);
     const sIndex = carArray.indexOf(carOutNumber);
    if( sIndex >= 0 ){
        // 입력 받은 차량 번호가 carArray 존재하면 참
        // 3. [ 계산 ]
        const inTime = timeArray[sIndex];
        const outTime = carOutTime;
        const 입차시간 = inTime.split(":");
        const 출차시간 = outTime.split(":");

        const 입차밀리초 = Number(입차시간[0] * 시) + Number(입차시간[1] * 분);
        const 출차밀리초 = Number(출차시간[0] * 시) + Number(출차시간[1] * 분);
        const 계산시간 = 출차밀리초 - 입차밀리초
        console.log(입차밀리초);
        console.log(출차밀리초);
        if(계산시간 >= 기본시간){
            // 4.[출력]
            const 사용시간 = parseInt((계산시간/분)/10);
            console.log(사용시간)
            alert(`요금은 : ${사용시간*금액} 입니다.`)
            alert('출차가 완료 되었습니다.')
            총매출 += 사용시간*금액  // 총매출에 금액 더하기
        }else if(계산시간 <= 0){
            console.log(계산시간)
           alert('출차시간이 더 적을수 없습니다.')
        }else{
            alert('30분 미만 시간 사용으로 무료 입니다.')
            salert('출차가 완료 되었습니다.')
        }
    }else{
        alert("입차한 차량이 없습니다.");
    }

}   // f end


function 매출(){
    console.log("매출 확인")
    document.querySelector('#총매출').innerHTML = `오늘 총 매출은 : ${총매출} 원 입니다.`;

}

/* 선생님이 하신 출차 코드
    function 출차(){ console.log('출차함수'); // * 함수 실행여부 확인
    // 1.[입력]
    const carOutNum = document.querySelector('#carOutNum').value;   console.log( carOutNum );
    const carOutTime = document.querySelector('#carOutTime').value; console.log( carOutTime );
    // 2.[처리]
    let 요금 = 3000; // 임의. 
    // =============================== 입차 시간 ===================================== //
    const outIndex = carNumArray.indexOf( carOutNum );  console.log( outIndex ); // 출차 차량번호의 인덱스
    if( outIndex == -1 ){ alert(`입차한 차량이 없습니다.`); return;  } // return 함수 강제 종료 // 아래 코드 실행X

    const inIime = carTimeArray[outIndex];  console.log( inIime ); // 출차차량번호의 인덱스를 이용한 입차배열내 입차시간.
    const inMtime = ( inIime.split(":")[0]*60) + Number( inIime.split(":")[1] );  console.log( inMtime );

    // =============================== 출차 시간 ===================================== //
        // 1. 시간을 모두 분으로 변경.
    const outArray = carOutTime.split(":"); console.log(outArray);
            // "03:56".split(":") 결과는 "03" "56"  : 자료2개 => 배열1개 // [ "03", "56"]
    const outH = outArray[0];               console.log( outH );   // 시 
    const outM = outArray[1];               console.log( outM );   // 분 
    const outMtime = (outH*60) + (outM*1);  console.log( outMtime );               
                                            // (시*60) + 분   // 출차시간을 분으로 환산 한 값.
    // =============================== 시간 차이  ===================================== //
    // 3.[출력]
    const time = outMtime - inMtime; console.log( '시간 차이 : ' + time )
    if( time < 0 ){ alert(`출차시간이 더 적을수 없습니다.`); return; }
    else if( time <= 30 ){ 요금 = 0; }
    else{   요금 = ( parseInt( (time-30)/10 ) ) * 1000;   }
    alert(`출차완료 : ${요금}`);

} // f end 



    [ 시간 차이 구하기 ]
    입차시간 : 02:30    ---> 1시간당 60분  ---> 120분+30분 -> 150분
    출차시간 : 04:20    ---> 1시간당 60분  ---> 240분+20분 -> 260분
        260 - 150 => 110 -> 60분당 1시간 => 1시간50분
        110 에 30분 무료 차감 => 80분 * 1000원 => 8000원
*/





