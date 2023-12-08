

// p.131 if 조건문
    // 조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문.
    // 가장 일반적인 조건문 : IF
    /*
        형태
        1.
            if( T / F ){ 참/T 일떄 실행 코드 };
        
        2.  참 또는 거짓일때 실행
                if( T / F ){ 참/T 일떄 실행 코드 }
                else{ 거짓/F 일때 실행코드 };
        
        3. 참 또는 거짓일 떄 조건 추가
                if( T/F ){                   // 성별이 남자 중에서
                    if( T/F ){}             // 미필군필 여부 확인
                    else{}
                }else{                      // 성별이 여자 중에서.
                    if( T/F ){}
                    else{}
                }

        4. 다수 조건 일떄 ->결과 1개     <---------->   다수 조건일떄 -> 결과 여러개
                if(조건1){}                     if(조건1){}
                else if(조건2){}                if(조건1){}
                else if(조건3){}                if(조건1){}
                else if(조건4){}                if(조건1){}
                else{}                          if(조건1){}
    */

if(273 < 100){
    console.log(" 273 < 100 => true "); // 실행 X [ 조건이 false 이므로 ]

}; // if end
console.log("1종료"); // 실행 [ 조건과 상관이 없다. ]

// 2.

const date = new Date(); // new Date(); 현재시간을 알려주는 코드 [ 클래스 ]
console.log(date);

const hour = date.getHours(); // 현재시간.getHours();  : 현재시간에서 시분초 중에서 시를 반환 함수
console.log(hour);

    // 1. 만약에 현지 시가 12보다 작으면 오전
if(hour < 12 ){ console.log("오전입니다."); };
    // 2. 만약에 현지 시가 12보다 이상이면 오후
if(hour > 12 ){ console.log("오후입니다."); };

// 3. p.134 if else 조건문

if(hour < 12 ){ console.log("오전입니다.");
}else{ console.log("오후입니다."); };

// 4. p135 중첩 조건문

if( hour < 11 ){  // 11시 미만
    console.log("아침 먹을 시간 입니다."); 
}else{   // 11시 이상
    // ** 중첩
    if( hour < 15 ){   // 11시 이상이면서 15 미만
        console.log("점심 먹을 시간입니다.");
    }else{  // 15시 이상
        console.log("저녁 먹을 시간입니다.")
    } // 두번쨰 if 끝
}   // 첫번쨰 if 끝

// 5. p.137

if( hour < 11 ){ console.log("아침 먹을 시간 입니다.");  }
else if( hour < 15 ){ console.log("점심 먹을 시간입니다."); }
else{ console.log("저녁 먹을 시간입니다.") };

//          VS

// 문제점 결과값이 시간에 따라 여러개 나올수도 있다.
if( hour < 11 ){ console.log("아침 먹을 시간 입니다.");  }
if( hour < 15 ){ console.log("점심 먹을 시간입니다."); }
else{ console.log("저녁 먹을 시간입니다.") };

/* p.138

    확인문제
        1 : 3
        2 : Number , Number , a > b , a == b
        3 : &&   ( x > 5 && x < 20 )



        - 앞전 조 과제에 경우의수 IF 와 같이 작성해보기.
        1. if( 현재중량 <= 허용중량 ){
            경보음발생()
            문 멈춤()
        }

*/

// 확인문제 4
    
    let 문제4 = Number(prompt("message"));
    if(문제4 > 0){
        console.log("양수 입니다.");
    }else if(문제4 == 0){
        console.log("0 입니다.");
    }else{
        console.log("음수 입니다.");
    };


// 확인문제 5
    let 문제5 = Number(prompt("message"));
    if((문제5 % 2) == 0){console.log("짝수 입니다.");
}else{console.log("홀수 입니다.");};
    


// 확인문제 6   계절 기준 -> 3~5 [봄] 6~8 [여름] 9~11[가을] 12~2[겨울]
    let 문제6 = Number(prompt("message"));
    if( 문제6 >= 3 && 문제6 <= 5){ console.log("봄 입니다."); }
    else if( 문제6 >= 6 && 문제6 <= 8){ console.log("여름 입니다.");}
    else if( 문제6 >= 9 && 문제6 <= 11){ console.log("가을 입니다."); }
    else if( 문제6 == 12 || 문제6 <= 2){ console.log("겨울 입니다."); }
