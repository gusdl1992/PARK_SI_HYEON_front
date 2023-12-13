
/*

let output = '';

// 문제1) 입력받은 수 만큼 * 출력 

const value1 = Number(prompt('문제1 수 입력'));
for( let i = 1 ; i <= value1 ; i++ ){
    // - i는 1부터 입력받은 수까지 1씩 증가
    output += '*';
}
console.log(output);


// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]

output = '';        // - 문제가 변경되었기 떄문에 출력할 내용 공백으로 수정
const value2 = Number(prompt('문제2 수 입력'));
for( let i = 1 ; i <= value2 ; i++ ){
    output += '*';
    // 만약에 i가 3배수 이면 줄바꿈 처리.
    if( i % 3 == 0 ){
        output += '\n';         // \n : 제어(이스케이프)문자
    }   
}
console.log(output);

// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';        // - 문제가 변경되었기 떄문에 출력할 내용 공백으로 수정
const line3 = Number(prompt('문제3 줄수 입력'));
for( let i = 1 ; i <= line3 ; i++ ){ // 1for s
    
    for( let j = 1 ; j <= i ; j++ ){ // 2for s
        output += '*';
    } // 2for e
    output += '\n'; 
} // 1 for e
console.log(output);

// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
output = '';        // - 문제가 변경되었기 떄문에 출력할 내용 공백으로 수정
const line4 = Number(prompt('문제4 줄수 입력'));
for( let i = line4 ; i >= 0 ; i-- ){ // 1for s
    
    for( let j = 1 ; j <= i ; j++ ){ // 2for s
        output += '*';
    } // 2for e
    output += '\n'; 
} // 1 for e
console.log(output);

// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';        // - 문제가 변경되었기 떄문에 출력할 내용 공백으로 수정
const line5 = Number(prompt('문제5 줄수 입력'));
for( let i = 1 ; i <= line5 ; i++){ // 1 for s
    for( let j = line5 ; j > i; j-- ){ // 2for s
        output += ' ';
    } // 2for e
    for( let m = 1 ; m <= i ; m++ ){ // 3for s
        output += '*';
    } // 3for e
    output += '\n'; 
} // 1 for e
console.log(output);

// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';        // - 문제가 변경되었기 떄문에 출력할 내용 공백으로 수정
const line6 = Number(prompt('문제6 줄수 입력'));
for( let i = line6 ; i >= 0 ; i--){
    for( let j = line6 ; j > i; j-- ){
        output += ' ';
    }
    for( let m = 1 ; m <= i ; m++ ){
        output += '*';
    }
    output += '\n'; 
}
console.log(output);

// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';        // - 문제가 변경되었기 떄문에 출력할 내용 공백으로 수정
const line7 = Number(prompt('문제7 줄수 입력'));
for( let i =1 ; i <= line7 ; i++ ){ // 입력된수 많큼 줄바꿈
    for( let j = line7 ; j > i; j--){   // j에 입력된수 를 담고 j가 i보다 클때까지 공백 입력 후 j 감소
        output += ' ';
    }
    for( let m = 0; m < (2*i)-1; m++ ){ //  m 이 2 * i - 1 보다 작을때 별 찍기  ex) 2*1-1 = 1 2*2-1 = 3 2*3 -1 = 5 
        output += '*';
    }
    output += '\n'; 
}
console.log(output);

// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';        // - 문제가 변경되었기 떄문에 출력할 내용 공백으로 수정
const line8 = Number(prompt('문제8 줄수 입력'));
for( let i = line8 ; i >= 1 ; i-- ){     // 입력된수 많큼 줄바꿈
    for( let j = line8 ; j > i; j--){   // j에 입력된수를 담고 j가 i 보다 클때까지 공백 입력후 j 감소
        output += ' ';
    }
    for( let m = 0; m < (2*i)-1; m++ ){ // m 이 2 * i - 1 보다 작을때 별 찍기  ex) 2*1-1 = 1 2*2-1 = 3 2*3 -1 = 5 
        output += '*';
    }
    output += '\n'; 
}
console.log(output);

// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
output = '';        // - 문제가 변경되었기 떄문에 출력할 내용 공백으로 수정
let line9 = Number(prompt('문제9 줄수 입력'));
if( line9 % 2 == 0 ){   // 입력된 수가 짝수일 경우
    line9 = line9/2     // 입력된 값을 /2 하여 절반값을 상단 하단에서 사용
    //상단
    for( let i =1 ; i <= line9 ; i++ ){
        for( let j = line9 ; j > i; j--){
            output += ' ';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            output += '*';
        }
        output += '\n'; 
    }
    //하단
    for( let i = line9 ; i >= 1 ; i-- ){
        for( let j = line9 ; j > i; j--){
            output += ' ';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            output += '*';
        }
        output += '\n'; 
    }
}else{  // 입력받은 수가 홀수일 경우
    line9 = parseInt(line9/2)   // 소숫점을 버리고 상단 하단 사용
    //상단
    for( let i =1 ; i <= line9+1 ; i++ ){   // 상단에서 +1 하여 버린 값 추가하여 하단보다 한번더 반복실행
        for( let j = line9+1 ; j > i; j--){
            output += ' ';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            output += '*';
        }
        output += '\n'; 
    }
    //하단
    for( let i =line9 ; i >= 1 ; i-- ){
        for( let j = line9+1 ; j > i; j--){
            output += ' ';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            output += '*';
        }
        output += '\n'; 
    }
}
console.log(output);

// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
output = '';        // - 문제가 변경되었기 떄문에 출력할 내용 공백으로 수정
let line10 = Number(prompt('문제10 홀수 줄수 입력'));
let a = 1;  // 맨첫줄 별값
let z = line10  // 맨끝줄 별값

if(line10 % 2 == 0 ){
    alert("홀수만 입력해주세요.");
}else{
    for( let i = 1 ; i <= line10 ; i++ ){   //1 for s
        for(let j = 1; j <= line10; j++){ //2 for s
            if( a == j || j == z){  // 첫번째줄 값과 반복문 j 값 비교 || 반복문 j값 과 끝줄 값 비교 
                output += '*';
            }else{
                output += ' ';
            }
        } // 2 for e
        a++ // 한바퀴 돈후 첫줄 별값 증가
        z-- // 한바퀴 돈후 끝줄 별값 감소
        output += '\n'; 
    } // 1for e
    console.log(output);
}

 */

/*
ex)7 입력됬을떄
1   7
2   6
3   5
  4  
5   3
6   2   
7   1
패턴 
*/

// 문제 10-2
function 문제10(){
    // [1. 입력 ]
    const line = Number(document.querySelector('#line10').value);
    // [2. 처리 ]
    let html ='';
    for( let r = 1 ; r <= line; r++ ){

    // 행시작
    html += '<tr>';
    for( let c = 1 ; c <= line; c++ ){
        if( c == r  ){html += '<td>★</td>';}
        else if( c+r == line+1 ){html += '<td>★</td>';}
        else{html += '<td> </td>';}
        
    }

    // 행끝
    html += '</tr>';
}
    // [3. 출력 ]
    const tableObj = document.querySelector('#table10');
    tableObj.innerHTML = html;

    console.log(tableObj);

}

function 문제9(){
// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
let html ='';
let line9 = Number(document.querySelector('#line9').value);
if( line9 % 2 == 0 ){   // 입력된 수가 짝수일 경우
    line9 = line9/2     // 입력된 값을 /2 하여 절반값을 상단 하단에서 사용
    //상단
    for( let i =1 ; i <= line9 ; i++ ){
        html += '<tr>';
        for( let j = line9 ; j > i; j--){
            html += '<td> </td>';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            html += '<td>★</td>';
        }
        html += '</tr>';

    }
    //하단
    for( let i = line9 ; i >= 1 ; i-- ){
        html += '<tr>';
        for( let j = line9 ; j > i; j--){
            html += '<td> </td>';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            html += '<td>★</td>';
        }
        html += '</tr>';

    }
    // [3. 출력 ]
    const tableObj = document.querySelector('#table9');
    tableObj.innerHTML = html;
    console.log(tableObj);
}else{  // 입력받은 수가 홀수일 경우
    line9 = parseInt(line9/2)   // 소숫점을 버리고 상단 하단 사용
    //상단
    for( let i =1 ; i <= line9+1 ; i++ ){
        html += '<tr>';
        for( let j = line9+1 ; j > i; j--){
            html += '<td> </td>';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            html += '<td>★</td>';
        }
        html += '</tr>';
    }
    //하단
    for( let i = line9 ; i >= 1 ; i-- ){
        html += '<tr>';
        for( let j = line9+1 ; j > i; j--){
            html += '<td> </td>';
        }
        for( let m = 0; m < (2*i)-1; m++ ){
            html += '<td>★</td>';
        }
        html += '</tr>';
    }
    // [3. 출력 ]
    const tableObj = document.querySelector('#table9');
    tableObj.innerHTML = html;
    console.log(tableObj);
}

}

