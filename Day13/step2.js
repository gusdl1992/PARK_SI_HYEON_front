




const carArray = [];     // 차량 번호판 저장 배열
const timeArray = [];     // 차량 시간 저장 배열
const 기본시간 = 1800000;
const 금액 = 1000;
const 분 = 60000;
const 시 = 3600000;

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
        }else{
           alert('30분 미만 시간 사용으로 무료 입니다.')
           alert('출차가 완료 되었습니다.') 
        }
    }

}   // f end

//46,800,000
// 12000
//46,812,000

//46,920,000
//54,180,000
//7260000
//121